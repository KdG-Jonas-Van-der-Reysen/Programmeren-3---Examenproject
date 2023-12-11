import { AttributeDeclarationContext, ClassDeclarationContext, MemberDeclarationContext, MethodDeclarationContext } from './generated/JactParser'
import JactVisitor from './generated/JactVisitor'

export default class DemoCustomJactVisitor extends JactVisitor<string> {
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
        return `export default class ${ctx.ID()} { ${
            ctx.memberDeclaration_list().map((member) => {
                return this.visitMemberDeclaration(member)
            })
        } };`
    }

    visitMemberDeclaration = (ctx: MemberDeclarationContext) => {
        return ctx.children.map((child) => {
            if(child instanceof AttributeDeclarationContext) {
                return this.visitAttributeDeclaration(child)
            } else if(child instanceof MethodDeclarationContext) {
                return this.visitMethodDeclaration(child)
            } else {
                return 'Unknown member declaration'
            }
        }).join('')
    }

    visitAttributeDeclaration = (ctx: AttributeDeclarationContext) => {
        this._knownAttributes.push(ctx.children[3].getText())

        return ctx.children[3].getText()
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
