import { ExpressionContext, FunctionDeclarationContext, ParameterListContext, PrintStatementContext, StatementContext, VariableDeclarationContext, VariableMemoryTypeDeclarationContext } from './generated/JactParser'
import JactVisitor from './generated/JactVisitor'

export default class CustomJactVisitor extends JactVisitor<string> {
    private readonly _knownAttributes: string[]

    constructor() {
        super()
        this._knownAttributes = []
    }

    /*visitClassDeclaration?: (ctx: ClassDeclarationContext) => {
        return "";
    };
    visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result;*/

    visitStatement = (ctx: StatementContext) => {
        return ctx.getText()
    }

    visitPrintStatement = (ctx: PrintStatementContext) => {
        console.log('In print statement declaration!')
        return `console.log(${this.visitExpression(ctx.expression())});`
    }

    visitVariableDeclaration = (ctx: VariableDeclarationContext) => {
        return `${
            this.visitVariableMemoryTypeDeclaration(ctx.variableMemoryTypeDeclaration())
        } ${ctx.ID()} = ${this.visitExpression(ctx.expression())};`
    }

    visitVariableMemoryTypeDeclaration = (ctx: VariableMemoryTypeDeclarationContext) => {
        return ctx.getText()
    }

    visitExpression = (ctx: ExpressionContext) => {
        return ctx.getText()
    }

    visitFunctionDeclaration = (ctx: FunctionDeclarationContext) => {
        return `function ${ctx.ID()}(${this.visitParameterList(ctx.parameterList())}) {${ctx.statement_list().map((statement) => this.visitStatement(statement)).join('')}}`
    }


    visitParameterList = (ctx: ParameterListContext) => {
        return ctx.getText()
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
