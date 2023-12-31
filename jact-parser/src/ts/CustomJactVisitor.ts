import { TerminalNode } from 'antlr4'
import {
    CalculationStatementContext,
    ExportStatementContext,
    ExpressionContext,
    FunctionCallContext,
    FunctionDeclarationContext,
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
        return this.visitChildren(ctx)
    }

    /*visitClassDeclaration?: (ctx: ClassDeclarationContext) => {
        return "";
    };
    visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result;*/

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
        return `return ${this.visitStatement(ctx.statement())};`
    }

    visitCalculationStatement = (ctx: CalculationStatementContext) => {
        return `${this.visitExpression(ctx.expression_list()[0])} ${ctx.OPERATOR()} ${this.visitExpression(ctx.expression_list()[1])}}`
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
