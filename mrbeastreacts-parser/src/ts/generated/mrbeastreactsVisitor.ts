// Generated from mrbeastreacts.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { ProgramContext } from "./mrbeastreactsParser";
import { FunctionDeclarationContext } from "./mrbeastreactsParser";
import { ParameterListContext } from "./mrbeastreactsParser";
import { ParameterContext } from "./mrbeastreactsParser";
import { TypeContext } from "./mrbeastreactsParser";
import { StatementListContext } from "./mrbeastreactsParser";
import { StatementContext } from "./mrbeastreactsParser";
import { AssignmentStatementContext } from "./mrbeastreactsParser";
import { PrintStatementContext } from "./mrbeastreactsParser";
import { IfStatementContext } from "./mrbeastreactsParser";
import { WhileStatementContext } from "./mrbeastreactsParser";
import { FunctionCallStatementContext } from "./mrbeastreactsParser";
import { ReturnStatementContext } from "./mrbeastreactsParser";
import { JsxStatementContext } from "./mrbeastreactsParser";
import { JsxElementContext } from "./mrbeastreactsParser";
import { JsxTagNameContext } from "./mrbeastreactsParser";
import { JsxChildrenContext } from "./mrbeastreactsParser";
import { ExpressionListContext } from "./mrbeastreactsParser";
import { ExpressionContext } from "./mrbeastreactsParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `mrbeastreactsParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class mrbeastreactsVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `mrbeastreactsParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
	/**
	 * Visit a parse tree produced by `mrbeastreactsParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `mrbeastreactsParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;
	/**
	 * Visit a parse tree produced by `mrbeastreactsParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `mrbeastreactsParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;
	/**
	 * Visit a parse tree produced by `mrbeastreactsParser.statementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementList?: (ctx: StatementListContext) => Result;
	/**
	 * Visit a parse tree produced by `mrbeastreactsParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `mrbeastreactsParser.assignmentStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentStatement?: (ctx: AssignmentStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `mrbeastreactsParser.printStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintStatement?: (ctx: PrintStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `mrbeastreactsParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `mrbeastreactsParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `mrbeastreactsParser.functionCallStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallStatement?: (ctx: FunctionCallStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `mrbeastreactsParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `mrbeastreactsParser.jsxStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsxStatement?: (ctx: JsxStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `mrbeastreactsParser.jsxElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsxElement?: (ctx: JsxElementContext) => Result;
	/**
	 * Visit a parse tree produced by `mrbeastreactsParser.jsxTagName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsxTagName?: (ctx: JsxTagNameContext) => Result;
	/**
	 * Visit a parse tree produced by `mrbeastreactsParser.jsxChildren`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsxChildren?: (ctx: JsxChildrenContext) => Result;
	/**
	 * Visit a parse tree produced by `mrbeastreactsParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;
	/**
	 * Visit a parse tree produced by `mrbeastreactsParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
}

