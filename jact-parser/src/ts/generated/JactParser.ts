// Generated from Jact.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import JactListener from "./JactListener.js";
import JactVisitor from "./JactVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class JactParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly ID = 18;
	public static readonly INT = 19;
	public static readonly FLOAT = 20;
	public static readonly BOOL = 21;
	public static readonly STRING = 22;
	public static readonly VOID = 23;
	public static readonly WS = 24;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_printStatement = 2;
	public static readonly RULE_variableDeclaration = 3;
	public static readonly RULE_variableMemoryTypeDeclaration = 4;
	public static readonly RULE_expression = 5;
	public static readonly RULE_functionDeclaration = 6;
	public static readonly RULE_parameterList = 7;
	public static readonly RULE_parameter = 8;
	public static readonly RULE_builtInType = 9;
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "'print'", "'('", 
                                                            "')'", "' '", 
                                                            "':'", "' = '", 
                                                            "'const'", "'let'", 
                                                            "'var'", "'function'", 
                                                            "') {'", "'}'", 
                                                            "','", "'number'", 
                                                            "'boolean'", 
                                                            "'string'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'void'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "ID", "INT", 
                                                             "FLOAT", "BOOL", 
                                                             "STRING", "VOID", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "printStatement", "variableDeclaration", "variableMemoryTypeDeclaration", 
		"expression", "functionDeclaration", "parameterList", "parameter", "builtInType",
	];
	public get grammarFileName(): string { return "Jact.g4"; }
	public get literalNames(): (string | null)[] { return JactParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return JactParser.symbolicNames; }
	public get ruleNames(): string[] { return JactParser.ruleNames; }
	public get serializedATN(): number[] { return JactParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, JactParser._ATN, JactParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, JactParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 26;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 265988) !== 0)) {
				{
				this.state = 24;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 2:
					{
					this.state = 20;
					this.printStatement();
					}
					break;
				case 18:
					{
					this.state = 21;
					this.statement();
					}
					break;
				case 8:
				case 9:
				case 10:
					{
					this.state = 22;
					this.variableDeclaration();
					}
					break;
				case 11:
					{
					this.state = 23;
					this.functionDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 28;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, JactParser.RULE_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 29;
			this.match(JactParser.ID);
			this.state = 30;
			this.match(JactParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public printStatement(): PrintStatementContext {
		let localctx: PrintStatementContext = new PrintStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, JactParser.RULE_printStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 32;
			this.match(JactParser.T__1);
			this.state = 33;
			this.match(JactParser.T__2);
			this.state = 34;
			this.expression();
			this.state = 35;
			this.match(JactParser.T__3);
			this.state = 36;
			this.match(JactParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let localctx: VariableDeclarationContext = new VariableDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, JactParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 38;
			this.variableMemoryTypeDeclaration();
			this.state = 39;
			this.match(JactParser.T__4);
			this.state = 40;
			this.match(JactParser.ID);
			this.state = 41;
			this.match(JactParser.T__5);
			this.state = 42;
			this.builtInType();
			this.state = 43;
			this.match(JactParser.T__6);
			this.state = 44;
			this.expression();
			this.state = 45;
			this.match(JactParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableMemoryTypeDeclaration(): VariableMemoryTypeDeclarationContext {
		let localctx: VariableMemoryTypeDeclarationContext = new VariableMemoryTypeDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, JactParser.RULE_variableMemoryTypeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 47;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1792) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, JactParser.RULE_expression);
		try {
			this.state = 55;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 49;
				this.match(JactParser.INT);
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 50;
				this.match(JactParser.FLOAT);
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 51;
				this.match(JactParser.BOOL);
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 52;
				this.match(JactParser.STRING);
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 53;
				this.match(JactParser.ID);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 54;
				this.functionDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, JactParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 57;
			this.match(JactParser.T__10);
			this.state = 58;
			this.match(JactParser.ID);
			this.state = 59;
			this.match(JactParser.T__2);
			this.state = 60;
			this.parameterList();
			this.state = 61;
			this.match(JactParser.T__11);
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 62;
				this.statement();
				}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 68;
			this.match(JactParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let localctx: ParameterListContext = new ParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, JactParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 70;
				this.parameter();
				this.state = 75;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===14) {
					{
					{
					this.state = 71;
					this.match(JactParser.T__13);
					this.state = 72;
					this.parameter();
					}
					}
					this.state = 77;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let localctx: ParameterContext = new ParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, JactParser.RULE_parameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 80;
			this.match(JactParser.ID);
			this.state = 81;
			this.match(JactParser.T__5);
			this.state = 82;
			this.builtInType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public builtInType(): BuiltInTypeContext {
		let localctx: BuiltInTypeContext = new BuiltInTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, JactParser.RULE_builtInType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 84;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 8617984) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,24,87,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,
	0,1,0,1,0,1,0,5,0,25,8,0,10,0,12,0,28,9,0,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,
	2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,
	5,3,5,56,8,5,1,6,1,6,1,6,1,6,1,6,1,6,5,6,64,8,6,10,6,12,6,67,9,6,1,6,1,
	6,1,7,1,7,1,7,5,7,74,8,7,10,7,12,7,77,9,7,3,7,79,8,7,1,8,1,8,1,8,1,8,1,
	9,1,9,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,2,1,0,8,10,2,0,15,17,23,23,
	88,0,26,1,0,0,0,2,29,1,0,0,0,4,32,1,0,0,0,6,38,1,0,0,0,8,47,1,0,0,0,10,
	55,1,0,0,0,12,57,1,0,0,0,14,78,1,0,0,0,16,80,1,0,0,0,18,84,1,0,0,0,20,25,
	3,4,2,0,21,25,3,2,1,0,22,25,3,6,3,0,23,25,3,12,6,0,24,20,1,0,0,0,24,21,
	1,0,0,0,24,22,1,0,0,0,24,23,1,0,0,0,25,28,1,0,0,0,26,24,1,0,0,0,26,27,1,
	0,0,0,27,1,1,0,0,0,28,26,1,0,0,0,29,30,5,18,0,0,30,31,5,1,0,0,31,3,1,0,
	0,0,32,33,5,2,0,0,33,34,5,3,0,0,34,35,3,10,5,0,35,36,5,4,0,0,36,37,5,1,
	0,0,37,5,1,0,0,0,38,39,3,8,4,0,39,40,5,5,0,0,40,41,5,18,0,0,41,42,5,6,0,
	0,42,43,3,18,9,0,43,44,5,7,0,0,44,45,3,10,5,0,45,46,5,1,0,0,46,7,1,0,0,
	0,47,48,7,0,0,0,48,9,1,0,0,0,49,56,5,19,0,0,50,56,5,20,0,0,51,56,5,21,0,
	0,52,56,5,22,0,0,53,56,5,18,0,0,54,56,3,12,6,0,55,49,1,0,0,0,55,50,1,0,
	0,0,55,51,1,0,0,0,55,52,1,0,0,0,55,53,1,0,0,0,55,54,1,0,0,0,56,11,1,0,0,
	0,57,58,5,11,0,0,58,59,5,18,0,0,59,60,5,3,0,0,60,61,3,14,7,0,61,65,5,12,
	0,0,62,64,3,2,1,0,63,62,1,0,0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,
	0,66,68,1,0,0,0,67,65,1,0,0,0,68,69,5,13,0,0,69,13,1,0,0,0,70,75,3,16,8,
	0,71,72,5,14,0,0,72,74,3,16,8,0,73,71,1,0,0,0,74,77,1,0,0,0,75,73,1,0,0,
	0,75,76,1,0,0,0,76,79,1,0,0,0,77,75,1,0,0,0,78,70,1,0,0,0,78,79,1,0,0,0,
	79,15,1,0,0,0,80,81,5,18,0,0,81,82,5,6,0,0,82,83,3,18,9,0,83,17,1,0,0,0,
	84,85,7,1,0,0,85,19,1,0,0,0,6,24,26,55,65,75,78];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JactParser.__ATN) {
			JactParser.__ATN = new ATNDeserializer().deserialize(JactParser._serializedATN);
		}

		return JactParser.__ATN;
	}


	static DecisionsToDFA = JactParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: JactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public printStatement_list(): PrintStatementContext[] {
		return this.getTypedRuleContexts(PrintStatementContext) as PrintStatementContext[];
	}
	public printStatement(i: number): PrintStatementContext {
		return this.getTypedRuleContext(PrintStatementContext, i) as PrintStatementContext;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public variableDeclaration_list(): VariableDeclarationContext[] {
		return this.getTypedRuleContexts(VariableDeclarationContext) as VariableDeclarationContext[];
	}
	public variableDeclaration(i: number): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, i) as VariableDeclarationContext;
	}
	public functionDeclaration_list(): FunctionDeclarationContext[] {
		return this.getTypedRuleContexts(FunctionDeclarationContext) as FunctionDeclarationContext[];
	}
	public functionDeclaration(i: number): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, i) as FunctionDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JactParser.RULE_program;
	}
	public enterRule(listener: JactListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: JactListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JactVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: JactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(JactParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return JactParser.RULE_statement;
	}
	public enterRule(listener: JactListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: JactListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JactVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintStatementContext extends ParserRuleContext {
	constructor(parser?: JactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return JactParser.RULE_printStatement;
	}
	public enterRule(listener: JactListener): void {
	    if(listener.enterPrintStatement) {
	 		listener.enterPrintStatement(this);
		}
	}
	public exitRule(listener: JactListener): void {
	    if(listener.exitPrintStatement) {
	 		listener.exitPrintStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JactVisitor<Result>): Result {
		if (visitor.visitPrintStatement) {
			return visitor.visitPrintStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	constructor(parser?: JactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableMemoryTypeDeclaration(): VariableMemoryTypeDeclarationContext {
		return this.getTypedRuleContext(VariableMemoryTypeDeclarationContext, 0) as VariableMemoryTypeDeclarationContext;
	}
	public ID(): TerminalNode {
		return this.getToken(JactParser.ID, 0);
	}
	public builtInType(): BuiltInTypeContext {
		return this.getTypedRuleContext(BuiltInTypeContext, 0) as BuiltInTypeContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return JactParser.RULE_variableDeclaration;
	}
	public enterRule(listener: JactListener): void {
	    if(listener.enterVariableDeclaration) {
	 		listener.enterVariableDeclaration(this);
		}
	}
	public exitRule(listener: JactListener): void {
	    if(listener.exitVariableDeclaration) {
	 		listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JactVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableMemoryTypeDeclarationContext extends ParserRuleContext {
	constructor(parser?: JactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return JactParser.RULE_variableMemoryTypeDeclaration;
	}
	public enterRule(listener: JactListener): void {
	    if(listener.enterVariableMemoryTypeDeclaration) {
	 		listener.enterVariableMemoryTypeDeclaration(this);
		}
	}
	public exitRule(listener: JactListener): void {
	    if(listener.exitVariableMemoryTypeDeclaration) {
	 		listener.exitVariableMemoryTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JactVisitor<Result>): Result {
		if (visitor.visitVariableMemoryTypeDeclaration) {
			return visitor.visitVariableMemoryTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: JactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INT(): TerminalNode {
		return this.getToken(JactParser.INT, 0);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(JactParser.FLOAT, 0);
	}
	public BOOL(): TerminalNode {
		return this.getToken(JactParser.BOOL, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(JactParser.STRING, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(JactParser.ID, 0);
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JactParser.RULE_expression;
	}
	public enterRule(listener: JactListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: JactListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JactVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	constructor(parser?: JactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(JactParser.ID, 0);
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return JactParser.RULE_functionDeclaration;
	}
	public enterRule(listener: JactListener): void {
	    if(listener.enterFunctionDeclaration) {
	 		listener.enterFunctionDeclaration(this);
		}
	}
	public exitRule(listener: JactListener): void {
	    if(listener.exitFunctionDeclaration) {
	 		listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JactVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	constructor(parser?: JactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parameter_list(): ParameterContext[] {
		return this.getTypedRuleContexts(ParameterContext) as ParameterContext[];
	}
	public parameter(i: number): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, i) as ParameterContext;
	}
    public get ruleIndex(): number {
    	return JactParser.RULE_parameterList;
	}
	public enterRule(listener: JactListener): void {
	    if(listener.enterParameterList) {
	 		listener.enterParameterList(this);
		}
	}
	public exitRule(listener: JactListener): void {
	    if(listener.exitParameterList) {
	 		listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JactVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	constructor(parser?: JactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(JactParser.ID, 0);
	}
	public builtInType(): BuiltInTypeContext {
		return this.getTypedRuleContext(BuiltInTypeContext, 0) as BuiltInTypeContext;
	}
    public get ruleIndex(): number {
    	return JactParser.RULE_parameter;
	}
	public enterRule(listener: JactListener): void {
	    if(listener.enterParameter) {
	 		listener.enterParameter(this);
		}
	}
	public exitRule(listener: JactListener): void {
	    if(listener.exitParameter) {
	 		listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JactVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BuiltInTypeContext extends ParserRuleContext {
	constructor(parser?: JactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VOID(): TerminalNode {
		return this.getToken(JactParser.VOID, 0);
	}
    public get ruleIndex(): number {
    	return JactParser.RULE_builtInType;
	}
	public enterRule(listener: JactListener): void {
	    if(listener.enterBuiltInType) {
	 		listener.enterBuiltInType(this);
		}
	}
	public exitRule(listener: JactListener): void {
	    if(listener.exitBuiltInType) {
	 		listener.exitBuiltInType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JactVisitor<Result>): Result {
		if (visitor.visitBuiltInType) {
			return visitor.visitBuiltInType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
