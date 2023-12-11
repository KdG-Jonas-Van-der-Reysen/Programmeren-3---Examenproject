// Generated from Jact.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { ClassDeclarationContext } from "./JactParser";
import { MemberDeclarationContext } from "./JactParser";
import { AttributeDeclarationContext } from "./JactParser";
import { MethodDeclarationContext } from "./JactParser";
import { TypeContext } from "./JactParser";
import { BuiltInTypeContext } from "./JactParser";
import { ParameterListContext } from "./JactParser";
import { StatementContext } from "./JactParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `JactParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class JactVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `JactParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JactParser.memberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JactParser.attributeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeDeclaration?: (ctx: AttributeDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JactParser.methodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JactParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;
	/**
	 * Visit a parse tree produced by `JactParser.builtInType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltInType?: (ctx: BuiltInTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `JactParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;
	/**
	 * Visit a parse tree produced by `JactParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
}

