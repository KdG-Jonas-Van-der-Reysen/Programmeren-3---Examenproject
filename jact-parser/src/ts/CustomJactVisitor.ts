import { TerminalNode } from 'antlr4'
import {
    CalculationStatementContext,
    ElementContentContext,
    ExportStatementContext,
    ExpressionContext,
    FunctionCallContext,
    FunctionDeclarationContext,
    JactCodeContext,
    JactElementContext,
    ParameterContext,
    ParameterListContext,
    PrintStatementContext,
    ReturnStatementContext,
    StatementContext,
    UntypedParameterListContext,
    VariableDeclarationContext,
    VariableMemoryTypeDeclarationContext
} from './generated/JactParser'
import JactVisitor from './generated/JactVisitor'

export default class CustomJactVisitor extends JactVisitor<string> {
    private readonly _knownAttributes: string[]

    constructor() {
        super()
        this._knownAttributes = []
    }

    visitStatement = (ctx: StatementContext) => {
        return (!!ctx ? this.visit(ctx.getChild(0)) : '')
    }

    visitPrintStatement = (ctx: PrintStatementContext) => {
        let expression = null

        if(ctx.functionCall()) {
            expression = this.visitFunctionCall(ctx.functionCall())
        } else if (ctx.calculationStatement()) {
            expression = this.visitCalculationStatement(ctx.calculationStatement())
        } else if (ctx.expression()) {
            expression = this.visitExpression(ctx.expression())
        }

        return `console.log(${expression});`
    }

    visitVariableDeclaration = (ctx: VariableDeclarationContext) => {
        return `${this.visitVariableMemoryTypeDeclaration(
            ctx.variableMemoryTypeDeclaration()
        )} ${ctx.ID()} = ${this.visitExpression(ctx.expression())};`
    }

    visitFunctionCall = (ctx: FunctionCallContext) => {
        return `${ctx.ID()}(${this.visitUntypedParameterList(ctx.untypedParameterList())})`
    }

    visitUntypedParameterList = (ctx: UntypedParameterListContext) => {
        return ctx.ID_list().map((id) => id.getText()).join(',')
    }

    visitVariableMemoryTypeDeclaration = (
        ctx: VariableMemoryTypeDeclarationContext
    ) => {
        switch (ctx.getText()) {
            case 'tzitvast':
                return 'const'
            case 'tisvrij':
                return 'let'
            case 'tisoud':
                return 'var'
        }
    }

    visitExpression = (ctx: ExpressionContext) => {
        switch(ctx.getText()) {
            case 'ja':
                return 'true'
            case 'nee':
                return 'false'
            default:
                return ctx.getText()
        }
    }

    visitReturnStatement = (ctx: ReturnStatementContext) => {
        return ctx.jactCode() ? this.visitJactCode(ctx.jactCode()) : this.visitStatement(ctx.statement())
    }

    visitJactCode = (ctx: JactCodeContext) => {
        return ctx.jactElement_list().map((element) => this.visitJactElement(element)).join('')
    }

    visitJactElement = (ctx: JactElementContext) => {
        const elementName = ctx.jactElementName(0).getText()
        const childrenText = ctx.children.map((child) => {
            const text: string = this.visit(child)

            if(!text || text.toString().trim() === '') return null
            console.log('the text is ' + text)
            return text
        }).filter(elem => elem != null).join(' + ')

        return `jactRenderer.createElement("${elementName}", ${ctx.children.length === 0 ? '' : childrenText})`
    }

    visitCalculationStatement = (ctx: CalculationStatementContext) => {
        return `${this.visitExpression(ctx.expression_list()[0])} ${ctx.OPERATOR()} ${this.visitExpression(ctx.expression_list()[1])}`
    }

    visitElementContent = (ctx: ElementContentContext) => {
        return ctx.getText()
    }

    visitFunctionDeclaration = (ctx: FunctionDeclarationContext) => {
        return `function ${ctx.ID()}(${this.visitParameterList(
            ctx.parameterList()
        )}) {${ctx
            .statement_list()
            .map((statement) => this.visitChildren(statement))
            .join('')}}`
    }

    visitParameterList = (ctx: ParameterListContext) => {
        return ctx
            .parameter_list()
            .map((parameter) => this.visitParameter(parameter))
            .join(',')
    }

    visitParameter = (ctx: ParameterContext) => {
        return ctx.ID().getText()
    }

    visitExportStatement = (ctx: ExportStatementContext) => {
        return `export ${this.visitStatement(ctx.statement())};`
    }
}
