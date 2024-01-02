// Generated from c://1_LOKALE_PROJECTEN//SCHOOL//2023-2024//Programmeren 3//jonas.vanderreysen//jact-parser//src//resources//Jact.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link JactParser}.
 */
public interface JactListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link JactParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(JactParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link JactParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(JactParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link JactParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(JactParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link JactParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(JactParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link JactParser#printStatement}.
	 * @param ctx the parse tree
	 */
	void enterPrintStatement(JactParser.PrintStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link JactParser#printStatement}.
	 * @param ctx the parse tree
	 */
	void exitPrintStatement(JactParser.PrintStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link JactParser#returnStatement}.
	 * @param ctx the parse tree
	 */
	void enterReturnStatement(JactParser.ReturnStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link JactParser#returnStatement}.
	 * @param ctx the parse tree
	 */
	void exitReturnStatement(JactParser.ReturnStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link JactParser#exportStatement}.
	 * @param ctx the parse tree
	 */
	void enterExportStatement(JactParser.ExportStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link JactParser#exportStatement}.
	 * @param ctx the parse tree
	 */
	void exitExportStatement(JactParser.ExportStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link JactParser#jactCode}.
	 * @param ctx the parse tree
	 */
	void enterJactCode(JactParser.JactCodeContext ctx);
	/**
	 * Exit a parse tree produced by {@link JactParser#jactCode}.
	 * @param ctx the parse tree
	 */
	void exitJactCode(JactParser.JactCodeContext ctx);
	/**
	 * Enter a parse tree produced by {@link JactParser#jactElement}.
	 * @param ctx the parse tree
	 */
	void enterJactElement(JactParser.JactElementContext ctx);
	/**
	 * Exit a parse tree produced by {@link JactParser#jactElement}.
	 * @param ctx the parse tree
	 */
	void exitJactElement(JactParser.JactElementContext ctx);
	/**
	 * Enter a parse tree produced by {@link JactParser#jactElementName}.
	 * @param ctx the parse tree
	 */
	void enterJactElementName(JactParser.JactElementNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link JactParser#jactElementName}.
	 * @param ctx the parse tree
	 */
	void exitJactElementName(JactParser.JactElementNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link JactParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterVariableDeclaration(JactParser.VariableDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link JactParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitVariableDeclaration(JactParser.VariableDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link JactParser#variableMemoryTypeDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterVariableMemoryTypeDeclaration(JactParser.VariableMemoryTypeDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link JactParser#variableMemoryTypeDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitVariableMemoryTypeDeclaration(JactParser.VariableMemoryTypeDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link JactParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(JactParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link JactParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(JactParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link JactParser#functionDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterFunctionDeclaration(JactParser.FunctionDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link JactParser#functionDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitFunctionDeclaration(JactParser.FunctionDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link JactParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void enterFunctionCall(JactParser.FunctionCallContext ctx);
	/**
	 * Exit a parse tree produced by {@link JactParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void exitFunctionCall(JactParser.FunctionCallContext ctx);
	/**
	 * Enter a parse tree produced by {@link JactParser#parameterList}.
	 * @param ctx the parse tree
	 */
	void enterParameterList(JactParser.ParameterListContext ctx);
	/**
	 * Exit a parse tree produced by {@link JactParser#parameterList}.
	 * @param ctx the parse tree
	 */
	void exitParameterList(JactParser.ParameterListContext ctx);
	/**
	 * Enter a parse tree produced by {@link JactParser#untypedParameterList}.
	 * @param ctx the parse tree
	 */
	void enterUntypedParameterList(JactParser.UntypedParameterListContext ctx);
	/**
	 * Exit a parse tree produced by {@link JactParser#untypedParameterList}.
	 * @param ctx the parse tree
	 */
	void exitUntypedParameterList(JactParser.UntypedParameterListContext ctx);
	/**
	 * Enter a parse tree produced by {@link JactParser#parameter}.
	 * @param ctx the parse tree
	 */
	void enterParameter(JactParser.ParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link JactParser#parameter}.
	 * @param ctx the parse tree
	 */
	void exitParameter(JactParser.ParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link JactParser#calculationStatement}.
	 * @param ctx the parse tree
	 */
	void enterCalculationStatement(JactParser.CalculationStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link JactParser#calculationStatement}.
	 * @param ctx the parse tree
	 */
	void exitCalculationStatement(JactParser.CalculationStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link JactParser#builtInType}.
	 * @param ctx the parse tree
	 */
	void enterBuiltInType(JactParser.BuiltInTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link JactParser#builtInType}.
	 * @param ctx the parse tree
	 */
	void exitBuiltInType(JactParser.BuiltInTypeContext ctx);
}