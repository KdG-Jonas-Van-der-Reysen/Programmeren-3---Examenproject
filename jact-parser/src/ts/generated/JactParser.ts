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
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly ID = 24;
	public static readonly INT = 25;
	public static readonly FLOAT = 26;
	public static readonly BOOL = 27;
	public static readonly STRING = 28;
	public static readonly WS = 29;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_printStatement = 2;
	public static readonly RULE_returnStatement = 3;
	public static readonly RULE_calculationStatement = 4;
	public static readonly RULE_variableDeclaration = 5;
	public static readonly RULE_variableMemoryTypeDeclaration = 6;
	public static readonly RULE_expression = 7;
	public static readonly RULE_functionDeclaration = 8;
	public static readonly RULE_functionCall = 9;
	public static readonly RULE_parameterList = 10;
	public static readonly RULE_parameter = 11;
	public static readonly RULE_builtInType = 12;
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "'lotzien'", 
                                                            "'('", "')'", 
                                                            "'kbentkwijt '", 
                                                            "'+'", "'-'", 
                                                            "'*'", "'/'", 
                                                            "'%'", "' '", 
                                                            "':'", "' = '", 
                                                            "'tzitvast'", 
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
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "ID", "INT", 
                                                             "FLOAT", "BOOL", 
                                                             "STRING", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "printStatement", "returnStatement", "calculationStatement", 
		"variableDeclaration", "variableMemoryTypeDeclaration", "expression", 
		"functionDeclaration", "functionCall", "parameterList", "parameter", "builtInType",
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
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 520339492) !== 0)) {
				{
				{
				this.state = 26;
				this.statement();
				}
				}
				this.state = 31;
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
			this.state = 40;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 32;
				this.match(JactParser.ID);
				this.state = 33;
				this.match(JactParser.T__0);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 34;
				this.printStatement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 35;
				this.variableDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 36;
				this.functionDeclaration();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 37;
				this.returnStatement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 38;
				this.functionCall();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 39;
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
			this.state = 42;
			this.match(JactParser.T__1);
			this.state = 43;
			this.match(JactParser.T__2);
			this.state = 44;
			this.expression();
			this.state = 45;
			this.match(JactParser.T__3);
			this.state = 46;
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
			this.state = 48;
			this.match(JactParser.T__4);
			this.state = 49;
			this.statement();
			this.state = 50;
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
	public calculationStatement(): CalculationStatementContext {
		let localctx: CalculationStatementContext = new CalculationStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, JactParser.RULE_calculationStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 52;
			this.expression();
			this.state = 53;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1984) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 54;
			this.expression();
			this.state = 55;
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
		this.enterRule(localctx, 10, JactParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 57;
			this.variableMemoryTypeDeclaration();
			this.state = 58;
			this.match(JactParser.T__10);
			this.state = 59;
			this.match(JactParser.ID);
			this.state = 60;
			this.match(JactParser.T__11);
			this.state = 61;
			this.builtInType();
			this.state = 62;
			this.match(JactParser.T__12);
			this.state = 63;
			this.expression();
			this.state = 64;
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
		this.enterRule(localctx, 12, JactParser.RULE_variableMemoryTypeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 66;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 114688) !== 0))) {
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
		this.enterRule(localctx, 14, JactParser.RULE_expression);
		try {
			this.state = 74;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 25:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 68;
				this.match(JactParser.INT);
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 69;
				this.match(JactParser.FLOAT);
				}
				break;
			case 27:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 70;
				this.match(JactParser.BOOL);
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 71;
				this.match(JactParser.STRING);
				}
				break;
			case 24:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 72;
				this.match(JactParser.ID);
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 73;
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
		this.enterRule(localctx, 16, JactParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 76;
			this.match(JactParser.T__16);
			this.state = 77;
			this.match(JactParser.ID);
			this.state = 78;
			this.match(JactParser.T__2);
			this.state = 79;
			this.parameterList();
			this.state = 80;
			this.match(JactParser.T__17);
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 520339492) !== 0)) {
				{
				{
				this.state = 81;
				this.statement();
				}
				}
				this.state = 86;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 87;
			this.match(JactParser.T__18);
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
		this.enterRule(localctx, 18, JactParser.RULE_functionCall);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 89;
			this.match(JactParser.ID);
			this.state = 90;
			this.match(JactParser.T__2);
			this.state = 91;
			this.parameterList();
			this.state = 92;
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
		this.enterRule(localctx, 20, JactParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 94;
				this.parameter();
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===20) {
					{
					{
					this.state = 95;
					this.match(JactParser.T__19);
					this.state = 96;
					this.parameter();
					}
					}
					this.state = 101;
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
			this.state = 104;
			this.match(JactParser.ID);
			this.state = 105;
			this.match(JactParser.T__11);
			this.state = 106;
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
		this.enterRule(localctx, 24, JactParser.RULE_builtInType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 108;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14680064) !== 0))) {
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

	public static readonly _serializedATN: number[] = [4,1,29,111,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,1,0,5,0,28,8,0,10,0,12,0,31,9,0,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,3,1,41,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,
	1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,
	1,7,1,7,1,7,1,7,3,7,75,8,7,1,8,1,8,1,8,1,8,1,8,1,8,5,8,83,8,8,10,8,12,8,
	86,9,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,5,10,98,8,10,10,10,12,
	10,101,9,10,3,10,103,8,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,0,0,13,0,2,
	4,6,8,10,12,14,16,18,20,22,24,0,3,1,0,6,10,1,0,14,16,1,0,21,23,112,0,29,
	1,0,0,0,2,40,1,0,0,0,4,42,1,0,0,0,6,48,1,0,0,0,8,52,1,0,0,0,10,57,1,0,0,
	0,12,66,1,0,0,0,14,74,1,0,0,0,16,76,1,0,0,0,18,89,1,0,0,0,20,102,1,0,0,
	0,22,104,1,0,0,0,24,108,1,0,0,0,26,28,3,2,1,0,27,26,1,0,0,0,28,31,1,0,0,
	0,29,27,1,0,0,0,29,30,1,0,0,0,30,1,1,0,0,0,31,29,1,0,0,0,32,33,5,24,0,0,
	33,41,5,1,0,0,34,41,3,4,2,0,35,41,3,10,5,0,36,41,3,16,8,0,37,41,3,6,3,0,
	38,41,3,18,9,0,39,41,3,8,4,0,40,32,1,0,0,0,40,34,1,0,0,0,40,35,1,0,0,0,
	40,36,1,0,0,0,40,37,1,0,0,0,40,38,1,0,0,0,40,39,1,0,0,0,41,3,1,0,0,0,42,
	43,5,2,0,0,43,44,5,3,0,0,44,45,3,14,7,0,45,46,5,4,0,0,46,47,5,1,0,0,47,
	5,1,0,0,0,48,49,5,5,0,0,49,50,3,2,1,0,50,51,5,1,0,0,51,7,1,0,0,0,52,53,
	3,14,7,0,53,54,7,0,0,0,54,55,3,14,7,0,55,56,5,1,0,0,56,9,1,0,0,0,57,58,
	3,12,6,0,58,59,5,11,0,0,59,60,5,24,0,0,60,61,5,12,0,0,61,62,3,24,12,0,62,
	63,5,13,0,0,63,64,3,14,7,0,64,65,5,1,0,0,65,11,1,0,0,0,66,67,7,1,0,0,67,
	13,1,0,0,0,68,75,5,25,0,0,69,75,5,26,0,0,70,75,5,27,0,0,71,75,5,28,0,0,
	72,75,5,24,0,0,73,75,3,16,8,0,74,68,1,0,0,0,74,69,1,0,0,0,74,70,1,0,0,0,
	74,71,1,0,0,0,74,72,1,0,0,0,74,73,1,0,0,0,75,15,1,0,0,0,76,77,5,17,0,0,
	77,78,5,24,0,0,78,79,5,3,0,0,79,80,3,20,10,0,80,84,5,18,0,0,81,83,3,2,1,
	0,82,81,1,0,0,0,83,86,1,0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,87,1,0,0,0,
	86,84,1,0,0,0,87,88,5,19,0,0,88,17,1,0,0,0,89,90,5,24,0,0,90,91,5,3,0,0,
	91,92,3,20,10,0,92,93,5,4,0,0,93,19,1,0,0,0,94,99,3,22,11,0,95,96,5,20,
	0,0,96,98,3,22,11,0,97,95,1,0,0,0,98,101,1,0,0,0,99,97,1,0,0,0,99,100,1,
	0,0,0,100,103,1,0,0,0,101,99,1,0,0,0,102,94,1,0,0,0,102,103,1,0,0,0,103,
	21,1,0,0,0,104,105,5,24,0,0,105,106,5,12,0,0,106,107,3,24,12,0,107,23,1,
	0,0,0,108,109,7,2,0,0,109,25,1,0,0,0,6,29,40,74,84,99,102];

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


export class FunctionCallContext extends ParserRuleContext {
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
