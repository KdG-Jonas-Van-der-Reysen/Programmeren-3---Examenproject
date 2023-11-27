// Generated from mrbeastreacts.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `mrbeastreactsParser`.
 */
export default class mrbeastreactsListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `mrbeastreactsParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `mrbeastreactsParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `mrbeastreactsParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `mrbeastreactsParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `mrbeastreactsParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `mrbeastreactsParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Enter a parse tree produced by `mrbeastreactsParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `mrbeastreactsParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;
	/**
	 * Enter a parse tree produced by `mrbeastreactsParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `mrbeastreactsParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;
	/**
	 * Enter a parse tree produced by `mrbeastreactsParser.statementList`.
	 * @param ctx the parse tree
	 */
	enterStatementList?: (ctx: StatementListContext) => void;
	/**
	 * Exit a parse tree produced by `mrbeastreactsParser.statementList`.
	 * @param ctx the parse tree
	 */
	exitStatementList?: (ctx: StatementListContext) => void;
	/**
	 * Enter a parse tree produced by `mrbeastreactsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `mrbeastreactsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `mrbeastreactsParser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	enterAssignmentStatement?: (ctx: AssignmentStatementContext) => void;
	/**
	 * Exit a parse tree produced by `mrbeastreactsParser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	exitAssignmentStatement?: (ctx: AssignmentStatementContext) => void;
	/**
	 * Enter a parse tree produced by `mrbeastreactsParser.printStatement`.
	 * @param ctx the parse tree
	 */
	enterPrintStatement?: (ctx: PrintStatementContext) => void;
	/**
	 * Exit a parse tree produced by `mrbeastreactsParser.printStatement`.
	 * @param ctx the parse tree
	 */
	exitPrintStatement?: (ctx: PrintStatementContext) => void;
	/**
	 * Enter a parse tree produced by `mrbeastreactsParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `mrbeastreactsParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Enter a parse tree produced by `mrbeastreactsParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `mrbeastreactsParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Enter a parse tree produced by `mrbeastreactsParser.functionCallStatement`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallStatement?: (ctx: FunctionCallStatementContext) => void;
	/**
	 * Exit a parse tree produced by `mrbeastreactsParser.functionCallStatement`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallStatement?: (ctx: FunctionCallStatementContext) => void;
	/**
	 * Enter a parse tree produced by `mrbeastreactsParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `mrbeastreactsParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Enter a parse tree produced by `mrbeastreactsParser.jsxStatement`.
	 * @param ctx the parse tree
	 */
	enterJsxStatement?: (ctx: JsxStatementContext) => void;
	/**
	 * Exit a parse tree produced by `mrbeastreactsParser.jsxStatement`.
	 * @param ctx the parse tree
	 */
	exitJsxStatement?: (ctx: JsxStatementContext) => void;
	/**
	 * Enter a parse tree produced by `mrbeastreactsParser.jsxElement`.
	 * @param ctx the parse tree
	 */
	enterJsxElement?: (ctx: JsxElementContext) => void;
	/**
	 * Exit a parse tree produced by `mrbeastreactsParser.jsxElement`.
	 * @param ctx the parse tree
	 */
	exitJsxElement?: (ctx: JsxElementContext) => void;
	/**
	 * Enter a parse tree produced by `mrbeastreactsParser.jsxTagName`.
	 * @param ctx the parse tree
	 */
	enterJsxTagName?: (ctx: JsxTagNameContext) => void;
	/**
	 * Exit a parse tree produced by `mrbeastreactsParser.jsxTagName`.
	 * @param ctx the parse tree
	 */
	exitJsxTagName?: (ctx: JsxTagNameContext) => void;
	/**
	 * Enter a parse tree produced by `mrbeastreactsParser.jsxChildren`.
	 * @param ctx the parse tree
	 */
	enterJsxChildren?: (ctx: JsxChildrenContext) => void;
	/**
	 * Exit a parse tree produced by `mrbeastreactsParser.jsxChildren`.
	 * @param ctx the parse tree
	 */
	exitJsxChildren?: (ctx: JsxChildrenContext) => void;
	/**
	 * Enter a parse tree produced by `mrbeastreactsParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `mrbeastreactsParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Enter a parse tree produced by `mrbeastreactsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `mrbeastreactsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
}

