// Generated from Jact.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { ProgramContext } from "./JactParser";
import { StatementContext } from "./JactParser";
import { PrintStatementContext } from "./JactParser";
import { ReturnStatementContext } from "./JactParser";
import { CalculationStatementContext } from "./JactParser";
import { VariableDeclarationContext } from "./JactParser";
import { VariableMemoryTypeDeclarationContext } from "./JactParser";
import { ExpressionContext } from "./JactParser";
import { FunctionDeclarationContext } from "./JactParser";
import { FunctionCallContext } from "./JactParser";
import { ParameterListContext } from "./JactParser";
import { ParameterContext } from "./JactParser";
import { BuiltInTypeContext } from "./JactParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `JactParser`.
 */
export default class JactListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `JactParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `JactParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `JactParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `JactParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `JactParser.printStatement`.
	 * @param ctx the parse tree
	 */
	enterPrintStatement?: (ctx: PrintStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JactParser.printStatement`.
	 * @param ctx the parse tree
	 */
	exitPrintStatement?: (ctx: PrintStatementContext) => void;
	/**
	 * Enter a parse tree produced by `JactParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JactParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Enter a parse tree produced by `JactParser.calculationStatement`.
	 * @param ctx the parse tree
	 */
	enterCalculationStatement?: (ctx: CalculationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JactParser.calculationStatement`.
	 * @param ctx the parse tree
	 */
	exitCalculationStatement?: (ctx: CalculationStatementContext) => void;
	/**
	 * Enter a parse tree produced by `JactParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JactParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JactParser.variableMemoryTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableMemoryTypeDeclaration?: (ctx: VariableMemoryTypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JactParser.variableMemoryTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableMemoryTypeDeclaration?: (ctx: VariableMemoryTypeDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JactParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `JactParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `JactParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JactParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JactParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `JactParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by `JactParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `JactParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Enter a parse tree produced by `JactParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `JactParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;
	/**
	 * Enter a parse tree produced by `JactParser.builtInType`.
	 * @param ctx the parse tree
	 */
	enterBuiltInType?: (ctx: BuiltInTypeContext) => void;
	/**
	 * Exit a parse tree produced by `JactParser.builtInType`.
	 * @param ctx the parse tree
	 */
	exitBuiltInType?: (ctx: BuiltInTypeContext) => void;
}

