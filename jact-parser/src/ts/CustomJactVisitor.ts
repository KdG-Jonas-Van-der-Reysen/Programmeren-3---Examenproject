import { TerminalNode } from 'antlr4'
import {
    CalculationStatementContext,
    ExpressionContext,
    FunctionDeclarationContext,
    ParameterContext,
    ParameterListContext,
    PrintStatementContext,
    ReturnStatementContext,
    StatementContext,
    VariableDeclarationContext,
    VariableMemoryTypeDeclarationContext
} from './generated/JactParser'
import JactVisitor from './generated/JactVisitor'

export default class CustomJactVisitor extends JactVisitor<string> {
    private readonly _knownAttributes: string[]

    constructor() {
        console.log('In constructor joepie')
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
        console.log('In print statement declaration!')
        return `console.log(${this.visitExpression(ctx.expression())});`
    }

    visitVariableDeclaration = (ctx: VariableDeclarationContext) => {
        return `${this.visitVariableMemoryTypeDeclaration(
            ctx.variableMemoryTypeDeclaration()
        )} ${ctx.ID()} = ${this.visitExpression(ctx.expression())};`
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
        return 'ik ga nekeer rekenen hé'
    }

    visitFunctionDeclaration = (ctx: FunctionDeclarationContext) => {
        return `function ${ctx.ID()}(${this.visitParameterList(
            ctx.parameterList()
        )}) {${ctx
            .statement_list()
            .map((statement) => this.visitStatement(statement))
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

    /*visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;
    visitType?: (ctx: TypeContext) => Result;
    visitBuiltInType?: (ctx: BuiltInTypeContext) => Result;
    visitParameterList?: (ctx: ParameterListContext) => Result;*/

    /*visitStatement = (ctx: StatementContext) =>  {
        // IF ASSIGNMENT
        return {}
    }*/
}
