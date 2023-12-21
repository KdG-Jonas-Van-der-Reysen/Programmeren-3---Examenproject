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
	public static readonly T__17 = 18;
	public static readonly ID = 19;
	public static readonly INT = 20;
	public static readonly FLOAT = 21;
	public static readonly BOOL = 22;
	public static readonly STRING = 23;
	public static readonly OPERATOR = 24;
	public static readonly WS = 25;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_printStatement = 2;
	public static readonly RULE_returnStatement = 3;
	public static readonly RULE_variableDeclaration = 4;
	public static readonly RULE_variableMemoryTypeDeclaration = 5;
	public static readonly RULE_expression = 6;
	public static readonly RULE_functionDeclaration = 7;
	public static readonly RULE_functionCall = 8;
	public static readonly RULE_parameterList = 9;
	public static readonly RULE_untypedParameterList = 10;
	public static readonly RULE_parameter = 11;
	public static readonly RULE_calculationStatement = 12;
	public static readonly RULE_builtInType = 13;
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "'lotzien'", 
                                                            "'('", "')'", 
                                                            "'kbentkwijt '", 
                                                            "' '", "':'", 
                                                            "' = '", "'tzitvast'", 
                                                            "'tisvrij'", 
                                                            "'tisoud'", 
                                                            "'doenekeeriet '", 
                                                            "') {'", "'}'", 
                                                            "','", "'nummerke'", 
                                                            "'jaofnee'", 
                                                            "'tekstje'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "ID", 
                                                             "INT", "FLOAT", 
                                                             "BOOL", "STRING", 
                                                             "OPERATOR", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "printStatement", "returnStatement", "variableDeclaration", 
		"variableMemoryTypeDeclaration", "expression", "functionDeclaration", 
		"functionCall", "parameterList", "untypedParameterList", "parameter", 
		"calculationStatement", "builtInType",
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
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16260644) !== 0)) {
				{
				{
				this.state = 28;
				this.statement();
				}
				}
				this.state = 33;
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
			this.state = 42;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 34;
				this.match(JactParser.ID);
				this.state = 35;
				this.match(JactParser.T__0);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 36;
				this.printStatement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 37;
				this.variableDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 38;
				this.functionDeclaration();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 39;
				this.returnStatement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 40;
				this.functionCall();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 41;
				this.calculationStatement();
				}
				break;
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
			this.state = 44;
			this.match(JactParser.T__1);
			this.state = 45;
			this.match(JactParser.T__2);
			this.state = 49;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 46;
				this.functionCall();
				}
				break;
			case 2:
				{
				this.state = 47;
				this.calculationStatement();
				}
				break;
			case 3:
				{
				this.state = 48;
				this.expression();
				}
				break;
			}
			this.state = 51;
			this.match(JactParser.T__3);
			this.state = 52;
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
	public returnStatement(): ReturnStatementContext {
		let localctx: ReturnStatementContext = new ReturnStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, JactParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 54;
			this.match(JactParser.T__4);
			this.state = 55;
			this.statement();
			this.state = 56;
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
		this.enterRule(localctx, 8, JactParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 58;
			this.variableMemoryTypeDeclaration();
			this.state = 59;
			this.match(JactParser.T__5);
			this.state = 60;
			this.match(JactParser.ID);
			this.state = 61;
			this.match(JactParser.T__6);
			this.state = 62;
			this.builtInType();
			this.state = 63;
			this.match(JactParser.T__7);
			this.state = 64;
			this.expression();
			this.state = 65;
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
		this.enterRule(localctx, 10, JactParser.RULE_variableMemoryTypeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 67;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3584) !== 0))) {
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
		this.enterRule(localctx, 12, JactParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 69;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 16252928) !== 0))) {
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
	public functionDeclaration(): FunctionDeclarationContext {
		let localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, JactParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 71;
			this.match(JactParser.T__11);
			this.state = 72;
			this.match(JactParser.ID);
			this.state = 73;
			this.match(JactParser.T__2);
			this.state = 74;
			this.parameterList();
			this.state = 75;
			this.match(JactParser.T__12);
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16260644) !== 0)) {
				{
				{
				this.state = 76;
				this.statement();
				}
				}
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 82;
			this.match(JactParser.T__13);
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
	public functionCall(): FunctionCallContext {
		let localctx: FunctionCallContext = new FunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, JactParser.RULE_functionCall);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 84;
			this.match(JactParser.ID);
			this.state = 85;
			this.match(JactParser.T__2);
			this.state = 86;
			this.untypedParameterList();
			this.state = 87;
			this.match(JactParser.T__3);
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
		this.enterRule(localctx, 18, JactParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 89;
				this.parameter();
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===15) {
					{
					{
					this.state = 90;
					this.match(JactParser.T__14);
					this.state = 91;
					this.parameter();
					}
					}
					this.state = 96;
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
	public untypedParameterList(): UntypedParameterListContext {
		let localctx: UntypedParameterListContext = new UntypedParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, JactParser.RULE_untypedParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 99;
				this.match(JactParser.ID);
				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===15) {
					{
					{
					this.state = 100;
					this.match(JactParser.T__14);
					this.state = 101;
					this.match(JactParser.ID);
					}
					}
					this.state = 106;
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
		this.enterRule(localctx, 22, JactParser.RULE_parameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 109;
			this.match(JactParser.ID);
			this.state = 110;
			this.match(JactParser.T__6);
			this.state = 111;
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
	public calculationStatement(): CalculationStatementContext {
		let localctx: CalculationStatementContext = new CalculationStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, JactParser.RULE_calculationStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 113;
			this.expression();
			this.state = 114;
			this.match(JactParser.T__5);
			this.state = 115;
			this.match(JactParser.OPERATOR);
			this.state = 116;
			this.match(JactParser.T__5);
			this.state = 117;
			this.expression();
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
		this.enterRule(localctx, 26, JactParser.RULE_builtInType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 119;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 458752) !== 0))) {
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

	public static readonly _serializedATN: number[] = [4,1,25,122,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,1,0,5,0,30,8,0,10,0,12,0,33,9,0,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,43,8,1,1,2,1,2,1,2,1,2,1,2,3,2,50,8,2,
	1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,
	1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,5,7,78,8,7,10,7,12,7,81,9,7,1,7,1,7,1,8,
	1,8,1,8,1,8,1,8,1,9,1,9,1,9,5,9,93,8,9,10,9,12,9,96,9,9,3,9,98,8,9,1,10,
	1,10,1,10,5,10,103,8,10,10,10,12,10,106,9,10,3,10,108,8,10,1,11,1,11,1,
	11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,0,0,14,0,2,4,6,8,10,
	12,14,16,18,20,22,24,26,0,3,1,0,9,11,1,0,19,23,1,0,16,18,121,0,31,1,0,0,
	0,2,42,1,0,0,0,4,44,1,0,0,0,6,54,1,0,0,0,8,58,1,0,0,0,10,67,1,0,0,0,12,
	69,1,0,0,0,14,71,1,0,0,0,16,84,1,0,0,0,18,97,1,0,0,0,20,107,1,0,0,0,22,
	109,1,0,0,0,24,113,1,0,0,0,26,119,1,0,0,0,28,30,3,2,1,0,29,28,1,0,0,0,30,
	33,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,1,1,0,0,0,33,31,1,0,0,0,34,35,
	5,19,0,0,35,43,5,1,0,0,36,43,3,4,2,0,37,43,3,8,4,0,38,43,3,14,7,0,39,43,
	3,6,3,0,40,43,3,16,8,0,41,43,3,24,12,0,42,34,1,0,0,0,42,36,1,0,0,0,42,37,
	1,0,0,0,42,38,1,0,0,0,42,39,1,0,0,0,42,40,1,0,0,0,42,41,1,0,0,0,43,3,1,
	0,0,0,44,45,5,2,0,0,45,49,5,3,0,0,46,50,3,16,8,0,47,50,3,24,12,0,48,50,
	3,12,6,0,49,46,1,0,0,0,49,47,1,0,0,0,49,48,1,0,0,0,50,51,1,0,0,0,51,52,
	5,4,0,0,52,53,5,1,0,0,53,5,1,0,0,0,54,55,5,5,0,0,55,56,3,2,1,0,56,57,5,
	1,0,0,57,7,1,0,0,0,58,59,3,10,5,0,59,60,5,6,0,0,60,61,5,19,0,0,61,62,5,
	7,0,0,62,63,3,26,13,0,63,64,5,8,0,0,64,65,3,12,6,0,65,66,5,1,0,0,66,9,1,
	0,0,0,67,68,7,0,0,0,68,11,1,0,0,0,69,70,7,1,0,0,70,13,1,0,0,0,71,72,5,12,
	0,0,72,73,5,19,0,0,73,74,5,3,0,0,74,75,3,18,9,0,75,79,5,13,0,0,76,78,3,
	2,1,0,77,76,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,82,1,0,
	0,0,81,79,1,0,0,0,82,83,5,14,0,0,83,15,1,0,0,0,84,85,5,19,0,0,85,86,5,3,
	0,0,86,87,3,20,10,0,87,88,5,4,0,0,88,17,1,0,0,0,89,94,3,22,11,0,90,91,5,
	15,0,0,91,93,3,22,11,0,92,90,1,0,0,0,93,96,1,0,0,0,94,92,1,0,0,0,94,95,
	1,0,0,0,95,98,1,0,0,0,96,94,1,0,0,0,97,89,1,0,0,0,97,98,1,0,0,0,98,19,1,
	0,0,0,99,104,5,19,0,0,100,101,5,15,0,0,101,103,5,19,0,0,102,100,1,0,0,0,
	103,106,1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,108,1,0,0,0,106,104,
	1,0,0,0,107,99,1,0,0,0,107,108,1,0,0,0,108,21,1,0,0,0,109,110,5,19,0,0,
	110,111,5,7,0,0,111,112,3,26,13,0,112,23,1,0,0,0,113,114,3,12,6,0,114,115,
	5,6,0,0,115,116,5,24,0,0,116,117,5,6,0,0,117,118,3,12,6,0,118,25,1,0,0,
	0,119,120,7,2,0,0,120,27,1,0,0,0,8,31,42,49,79,94,97,104,107];

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
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
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
	public printStatement(): PrintStatementContext {
		return this.getTypedRuleContext(PrintStatementContext, 0) as PrintStatementContext;
	}
	public variableDeclaration(): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, 0) as VariableDeclarationContext;
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
	public returnStatement(): ReturnStatementContext {
		return this.getTypedRuleContext(ReturnStatementContext, 0) as ReturnStatementContext;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public calculationStatement(): CalculationStatementContext {
		return this.getTypedRuleContext(CalculationStatementContext, 0) as CalculationStatementContext;
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
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public calculationStatement(): CalculationStatementContext {
		return this.getTypedRuleContext(CalculationStatementContext, 0) as CalculationStatementContext;
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


export class ReturnStatementContext extends ParserRuleContext {
	constructor(parser?: JactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return JactParser.RULE_returnStatement;
	}
	public enterRule(listener: JactListener): void {
	    if(listener.enterReturnStatement) {
	 		listener.enterReturnStatement(this);
		}
	}
	public exitRule(listener: JactListener): void {
	    if(listener.exitReturnStatement) {
	 		listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JactVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
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


export class FunctionCallContext extends ParserRuleContext {
	constructor(parser?: JactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(JactParser.ID, 0);
	}
	public untypedParameterList(): UntypedParameterListContext {
		return this.getTypedRuleContext(UntypedParameterListContext, 0) as UntypedParameterListContext;
	}
    public get ruleIndex(): number {
    	return JactParser.RULE_functionCall;
	}
	public enterRule(listener: JactListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: JactListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JactVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
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


export class UntypedParameterListContext extends ParserRuleContext {
	constructor(parser?: JactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(JactParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(JactParser.ID, i);
	}
    public get ruleIndex(): number {
    	return JactParser.RULE_untypedParameterList;
	}
	public enterRule(listener: JactListener): void {
	    if(listener.enterUntypedParameterList) {
	 		listener.enterUntypedParameterList(this);
		}
	}
	public exitRule(listener: JactListener): void {
	    if(listener.exitUntypedParameterList) {
	 		listener.exitUntypedParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JactVisitor<Result>): Result {
		if (visitor.visitUntypedParameterList) {
			return visitor.visitUntypedParameterList(this);
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


export class CalculationStatementContext extends ParserRuleContext {
	constructor(parser?: JactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public OPERATOR(): TerminalNode {
		return this.getToken(JactParser.OPERATOR, 0);
	}
    public get ruleIndex(): number {
    	return JactParser.RULE_calculationStatement;
	}
	public enterRule(listener: JactListener): void {
	    if(listener.enterCalculationStatement) {
	 		listener.enterCalculationStatement(this);
		}
	}
	public exitRule(listener: JactListener): void {
	    if(listener.exitCalculationStatement) {
	 		listener.exitCalculationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JactVisitor<Result>): Result {
		if (visitor.visitCalculationStatement) {
			return visitor.visitCalculationStatement(this);
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
