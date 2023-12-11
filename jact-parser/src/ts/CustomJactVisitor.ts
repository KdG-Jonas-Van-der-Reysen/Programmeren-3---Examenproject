import { ExpressionContext, PrintStatementContext, VariableDeclarationContext, VariableMemoryTypeDeclarationContext } from './generated/JactParser'
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

    visitPrintStatementDeclaration = (ctx: PrintStatementContext) => {
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



    /*visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;
    visitType?: (ctx: TypeContext) => Result;
    visitBuiltInType?: (ctx: BuiltInTypeContext) => Result;
    visitParameterList?: (ctx: ParameterListContext) => Result;*/

    /*visitStatement = (ctx: StatementContext) =>  {
        // IF ASSIGNMENT
        return {}
    }*/
}
