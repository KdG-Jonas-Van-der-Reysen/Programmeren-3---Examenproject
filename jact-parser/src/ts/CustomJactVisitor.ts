import { AttributeDeclarationContext, ClassDeclarationContext, MemberDeclarationContext } from './generated/JactParser'
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


    visitClassDeclaration = (ctx: ClassDeclarationContext) => {
        return `public class ${ctx.ID()} { ${
            ctx.memberDeclaration_list().map((member) => {this.visitMemberDeclaration(member)})
        } };`
    }
    visitAttributeDeclaration = (ctx: AttributeDeclarationContext) => {
        this._knownAttributes.push(ctx.children[3].getText())

        return ctx.children[3].getText()
    }

    visitMemberDeclaration = (ctx: MemberDeclarationContext) => {
        return 'oi'
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
