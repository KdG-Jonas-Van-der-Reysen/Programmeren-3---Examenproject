// Generated from Jact.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `JactParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class JactVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `JactParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
	/**
	 * Visit a parse tree produced by `JactParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `JactParser.printStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintStatement?: (ctx: PrintStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `JactParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `JactParser.calculationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculationStatement?: (ctx: CalculationStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `JactParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JactParser.variableMemoryTypeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableMemoryTypeDeclaration?: (ctx: VariableMemoryTypeDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JactParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JactParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JactParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by `JactParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;
	/**
	 * Visit a parse tree produced by `JactParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `JactParser.builtInType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltInType?: (ctx: BuiltInTypeContext) => Result;
}

