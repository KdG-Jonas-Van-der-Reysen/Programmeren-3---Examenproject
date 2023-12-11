// Generated from Jact.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { ClassDeclarationContext } from "./JactParser";
import { MemberDeclarationContext } from "./JactParser";
import { AttributeDeclarationContext } from "./JactParser";
import { MethodDeclarationContext } from "./JactParser";
import { TypeContext } from "./JactParser";
import { BuiltInTypeContext } from "./JactParser";
import { ParameterListContext } from "./JactParser";
import { StatementContext } from "./JactParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `JactParser`.
 */
export default class JactListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `JactParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JactParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JactParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMemberDeclaration?: (ctx: MemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JactParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMemberDeclaration?: (ctx: MemberDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JactParser.attributeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAttributeDeclaration?: (ctx: AttributeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JactParser.attributeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAttributeDeclaration?: (ctx: AttributeDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JactParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JactParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JactParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `JactParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;
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
	 * Enter a parse tree produced by `JactParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `JactParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
}

