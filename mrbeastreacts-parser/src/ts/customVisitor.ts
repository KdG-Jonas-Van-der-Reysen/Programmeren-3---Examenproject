/* eslint-disable linebreak-style */
// Generated visitor for mrbeastreacts grammar
import mrbeastreactsVisitor from './generated/mrbeastreactsVisitor'
import {
    ProgramContext,
    FunctionDeclarationContext,
    ParameterListContext,
    ParameterContext,
    TypeContext,
    StatementListContext,
    AssignmentStatementContext,
    PrintStatementContext,
    ExpressionContext,
    IfStatementContext,
    WhileStatementContext,
    StatementContext,
    FunctionCallStatementContext,
    ReturnStatementContext,
    JsxStatementContext,
    JsxElementContext,
    JsxTagNameContext,
    JsxChildrenContext,
    ExpressionListContext
} from './generated/mrbeastreactsParser'

export class CustomVisitor extends mrbeastreactsVisitor<string> {
    /**
   * Visit a parse tree produced by `mrbeastreactsParser.program`.
   * @param ctx the parse tree
   * @return the visitor result
   */
    visitProgram = (ctx: ProgramContext): string => {
        console.log('In program')
        return this.visitStatementList(ctx.statementList())
    }
    /**
   * Visit a parse tree produced by `mrbeastreactsParser.functionDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
    visitFunctionDeclaration = (ctx: FunctionDeclarationContext): string => {
        const functionName = ctx.ID().getText()
        const parameters = this.visitParameterList(ctx.parameterList())
        const statements = this.visitStatementList(ctx.statementList())
        return `function ${functionName}(${parameters}) {${statements}}`
    }
    /**
   * Visit a parse tree produced by `mrbeastreactsParser.parameterList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
    visitParameterList = (ctx: ParameterListContext): string => {
        return ctx.parameter_list().map((parameter) => {
            return this.visitParameter(parameter)
        }).join(', ')
    }
    /**
   * Visit a parse tree produced by `mrbeastreactsParser.parameter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
    visitParameter = (ctx: ParameterContext): string => {
        return `${ctx.ID().getText()}: ${this.visitType(ctx.type_())}`
    }
    /**
   * Visit a parse tree produced by `mrbeastreactsParser.type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
    visitType = (ctx: TypeContext): string => {
        return ctx.getText()
    }
    /**
   * Visit a parse tree produced by `mrbeastreactsParser.statementList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
    visitStatementList = (ctx: StatementListContext): string => {
        console.log('In statement list')
        console.log(ctx.statement_list())
        return ctx.statement_list().map((statement) => {
            this.visitStatement(statement)
            // console.log(statement)
        }).join('')
    }
    /**
   * Visit a parse tree produced by `mrbeastreactsParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
    visitStatement = (ctx: StatementContext): string => {return 'not implemented yet statement'}
    /**
   * Visit a parse tree produced by `mrbeastreactsParser.assignmentStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
    visitAssignmentStatement = (ctx: AssignmentStatementContext): string => {return 'not implemented yet assignmentStatement'}
    /**
   * Visit a parse tree produced by `mrbeastreactsParser.printStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
    visitPrintStatement = (ctx: PrintStatementContext): string => {return 'not implemented yet printStatement'}
    /**
   * Visit a parse tree produced by `mrbeastreactsParser.ifStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
    visitIfStatement = (ctx: IfStatementContext): string => {return 'not implemented yet ifStatement'}
    /**
   * Visit a parse tree produced by `mrbeastreactsParser.whileStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
    visitWhileStatement = (ctx: WhileStatementContext): string => {return 'not implemented yet whileStatement'}
    /**
   * Visit a parse tree produced by `mrbeastreactsParser.functionCallStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
    visitFunctionCallStatement = (
        ctx: FunctionCallStatementContext
    ): string => {return 'not implemented yet functionCallStatement'}
    /**
   * Visit a parse tree produced by `mrbeastreactsParser.returnStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
    visitReturnStatement = (ctx: ReturnStatementContext): string => {return 'not implemented yet returnStatement'}
    /**
   * Visit a parse tree produced by `mrbeastreactsParser.jsxStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
    visitJsxStatement = (ctx: JsxStatementContext): string => {return 'not implemented yet jsxStatement'}
    /**
   * Visit a parse tree produced by `mrbeastreactsParser.jsxElement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
    visitJsxElement = (ctx: JsxElementContext): string => {return 'not implemented yet jsxElement'}
    /**
   * Visit a parse tree produced by `mrbeastreactsParser.jsxTagName`.
   * @param ctx the parse tree
   * @return the visitor result
   */
    visitJsxTagName = (ctx: JsxTagNameContext): string => {return 'not implemented yet jsxTagName'}
    /**
   * Visit a parse tree produced by `mrbeastreactsParser.jsxChildren`.
   * @param ctx the parse tree
   * @return the visitor result
   */
    visitJsxChildren = (ctx: JsxChildrenContext): string => {return 'not implemented yet jsxChildren'}
    /**
   * Visit a parse tree produced by `mrbeastreactsParser.expressionList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
    visitExpressionList = (ctx: ExpressionListContext): string => {return 'not implemented yet expressionList'}
    /**
   * Visit a parse tree produced by `mrbeastreactsParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
    visitExpression = (ctx: ExpressionContext): string => {return 'not implemented yet expression'}
}
