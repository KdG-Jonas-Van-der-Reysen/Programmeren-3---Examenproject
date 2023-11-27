// Generated from mrbeastreacts.g4 by ANTLR 4.13.1
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
import mrbeastreactsListener from "./mrbeastreactsListener.js";
import mrbeastreactsVisitor from "./mrbeastreactsVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class mrbeastreactsParser extends Parser {
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
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly INT = 30;
	public static readonly STRING = 31;
	public static readonly BOOL = 32;
	public static readonly ID = 33;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_functionDeclaration = 1;
	public static readonly RULE_parameterList = 2;
	public static readonly RULE_parameter = 3;
	public static readonly RULE_type = 4;
	public static readonly RULE_statementList = 5;
	public static readonly RULE_statement = 6;
	public static readonly RULE_assignmentStatement = 7;
	public static readonly RULE_printStatement = 8;
	public static readonly RULE_ifStatement = 9;
	public static readonly RULE_whileStatement = 10;
	public static readonly RULE_functionCallStatement = 11;
	public static readonly RULE_returnStatement = 12;
	public static readonly RULE_jsxStatement = 13;
	public static readonly RULE_jsxElement = 14;
	public static readonly RULE_jsxTagName = 15;
	public static readonly RULE_jsxChildren = 16;
	public static readonly RULE_expressionList = 17;
	public static readonly RULE_expression = 18;
	public static readonly literalNames: (string | null)[] = [ null, "'function'", 
                                                            "'('", "') {'", 
                                                            "'}'", "','", 
                                                            "'int'", "'string'", 
                                                            "'bool'", "'='", 
                                                            "';'", "'console.log'", 
                                                            "')'", "'if'", 
                                                            "'{'", "'else'", 
                                                            "'while'", "'return'", 
                                                            "'export'", 
                                                            "'<'", "'>'", 
                                                            "'</'", "'*'", 
                                                            "'/'", "'+'", 
                                                            "'-'", "'=='", 
                                                            "'!='", "'<='", 
                                                            "'>='" ];
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
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "INT", "STRING", 
                                                             "BOOL", "ID" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "functionDeclaration", "parameterList", "parameter", "type", 
		"statementList", "statement", "assignmentStatement", "printStatement", 
		"ifStatement", "whileStatement", "functionCallStatement", "returnStatement", 
		"jsxStatement", "jsxElement", "jsxTagName", "jsxChildren", "expressionList", 
		"expression",
	];
	public get grammarFileName(): string { return "mrbeastreacts.g4"; }
	public get literalNames(): (string | null)[] { return mrbeastreactsParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return mrbeastreactsParser.symbolicNames; }
	public get ruleNames(): string[] { return mrbeastreactsParser.ruleNames; }
	public get serializedATN(): number[] { return mrbeastreactsParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, mrbeastreactsParser._ATN, mrbeastreactsParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, mrbeastreactsParser.RULE_program);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 38;
			this.statementList();
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
		this.enterRule(localctx, 2, mrbeastreactsParser.RULE_functionDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 40;
			this.match(mrbeastreactsParser.T__0);
			this.state = 41;
			this.match(mrbeastreactsParser.ID);
			this.state = 42;
			this.match(mrbeastreactsParser.T__1);
			this.state = 43;
			this.parameterList();
			this.state = 44;
			this.match(mrbeastreactsParser.T__2);
			this.state = 45;
			this.statementList();
			this.state = 46;
			this.match(mrbeastreactsParser.T__3);
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
		this.enterRule(localctx, 4, mrbeastreactsParser.RULE_parameterList);
		let _la: number;
		try {
			this.state = 57;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
			case 7:
			case 8:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 48;
				this.parameter();
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 49;
					this.match(mrbeastreactsParser.T__4);
					this.state = 50;
					this.parameter();
					}
					}
					this.state = 55;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
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
	public parameter(): ParameterContext {
		let localctx: ParameterContext = new ParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, mrbeastreactsParser.RULE_parameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 59;
			this.type_();
			this.state = 60;
			this.match(mrbeastreactsParser.ID);
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
	public type_(): TypeContext {
		let localctx: TypeContext = new TypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, mrbeastreactsParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 62;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 448) !== 0))) {
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
	public statementList(): StatementListContext {
		let localctx: StatementListContext = new StatementListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, mrbeastreactsParser.RULE_statementList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 4194533) !== 0)) {
				{
				{
				this.state = 64;
				this.statement();
				}
				}
				this.state = 69;
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
		this.enterRule(localctx, 12, mrbeastreactsParser.RULE_statement);
		try {
			this.state = 77;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 70;
				this.assignmentStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 71;
				this.printStatement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 72;
				this.ifStatement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 73;
				this.whileStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 74;
				this.functionCallStatement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 75;
				this.returnStatement();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 76;
				this.jsxStatement();
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
	public assignmentStatement(): AssignmentStatementContext {
		let localctx: AssignmentStatementContext = new AssignmentStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, mrbeastreactsParser.RULE_assignmentStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 79;
			this.match(mrbeastreactsParser.ID);
			this.state = 80;
			this.match(mrbeastreactsParser.T__8);
			this.state = 81;
			this.expression(0);
			this.state = 82;
			this.match(mrbeastreactsParser.T__9);
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
		this.enterRule(localctx, 16, mrbeastreactsParser.RULE_printStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 84;
			this.match(mrbeastreactsParser.T__10);
			this.state = 85;
			this.match(mrbeastreactsParser.T__1);
			this.state = 86;
			this.expression(0);
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 87;
				this.match(mrbeastreactsParser.T__4);
				this.state = 88;
				this.expression(0);
				}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 94;
			this.match(mrbeastreactsParser.T__11);
			this.state = 95;
			this.match(mrbeastreactsParser.T__9);
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
	public ifStatement(): IfStatementContext {
		let localctx: IfStatementContext = new IfStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, mrbeastreactsParser.RULE_ifStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 97;
			this.match(mrbeastreactsParser.T__12);
			this.state = 98;
			this.match(mrbeastreactsParser.T__1);
			this.state = 99;
			this.expression(0);
			this.state = 100;
			this.match(mrbeastreactsParser.T__11);
			this.state = 101;
			this.match(mrbeastreactsParser.T__13);
			this.state = 102;
			this.statementList();
			this.state = 103;
			this.match(mrbeastreactsParser.T__3);
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 104;
				this.match(mrbeastreactsParser.T__14);
				this.state = 105;
				this.match(mrbeastreactsParser.T__13);
				this.state = 106;
				this.statementList();
				this.state = 107;
				this.match(mrbeastreactsParser.T__3);
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
	public whileStatement(): WhileStatementContext {
		let localctx: WhileStatementContext = new WhileStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, mrbeastreactsParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 111;
			this.match(mrbeastreactsParser.T__15);
			this.state = 112;
			this.match(mrbeastreactsParser.T__1);
			this.state = 113;
			this.expression(0);
			this.state = 114;
			this.match(mrbeastreactsParser.T__11);
			this.state = 115;
			this.match(mrbeastreactsParser.T__13);
			this.state = 116;
			this.statementList();
			this.state = 117;
			this.match(mrbeastreactsParser.T__3);
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
	public functionCallStatement(): FunctionCallStatementContext {
		let localctx: FunctionCallStatementContext = new FunctionCallStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, mrbeastreactsParser.RULE_functionCallStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 119;
			this.match(mrbeastreactsParser.ID);
			this.state = 120;
			this.match(mrbeastreactsParser.T__1);
			this.state = 121;
			this.expressionList();
			this.state = 122;
			this.match(mrbeastreactsParser.T__11);
			this.state = 123;
			this.match(mrbeastreactsParser.T__9);
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
		this.enterRule(localctx, 24, mrbeastreactsParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 125;
			this.match(mrbeastreactsParser.T__16);
			this.state = 126;
			this.expression(0);
			this.state = 127;
			this.match(mrbeastreactsParser.T__9);
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
	public jsxStatement(): JsxStatementContext {
		let localctx: JsxStatementContext = new JsxStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, mrbeastreactsParser.RULE_jsxStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 129;
			this.match(mrbeastreactsParser.T__17);
			this.state = 130;
			this.match(mrbeastreactsParser.T__0);
			this.state = 131;
			this.match(mrbeastreactsParser.T__1);
			this.state = 132;
			this.match(mrbeastreactsParser.T__11);
			this.state = 133;
			this.match(mrbeastreactsParser.T__13);
			this.state = 134;
			this.jsxElement();
			this.state = 135;
			this.match(mrbeastreactsParser.T__3);
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
	public jsxElement(): JsxElementContext {
		let localctx: JsxElementContext = new JsxElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, mrbeastreactsParser.RULE_jsxElement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 137;
			this.match(mrbeastreactsParser.T__18);
			this.state = 138;
			this.jsxTagName();
			this.state = 139;
			this.match(mrbeastreactsParser.T__19);
			this.state = 140;
			this.jsxChildren();
			this.state = 141;
			this.match(mrbeastreactsParser.T__20);
			this.state = 142;
			this.jsxTagName();
			this.state = 143;
			this.match(mrbeastreactsParser.T__19);
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
	public jsxTagName(): JsxTagNameContext {
		let localctx: JsxTagNameContext = new JsxTagNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, mrbeastreactsParser.RULE_jsxTagName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 145;
			this.match(mrbeastreactsParser.ID);
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
	public jsxChildren(): JsxChildrenContext {
		let localctx: JsxChildrenContext = new JsxChildrenContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, mrbeastreactsParser.RULE_jsxChildren);
		try {
			this.state = 149;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 147;
				this.jsxElement();
				}
				break;
			case 31:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 148;
				this.match(mrbeastreactsParser.STRING);
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
	public expressionList(): ExpressionListContext {
		let localctx: ExpressionListContext = new ExpressionListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, mrbeastreactsParser.RULE_expressionList);
		let _la: number;
		try {
			this.state = 160;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
			case 30:
			case 31:
			case 32:
			case 33:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 151;
				this.expression(0);
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 152;
					this.match(mrbeastreactsParser.T__4);
					this.state = 153;
					this.expression(0);
					}
					}
					this.state = 158;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
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

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 36;
		this.enterRecursionRule(localctx, 36, mrbeastreactsParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 172;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 163;
				this.match(mrbeastreactsParser.T__1);
				this.state = 164;
				this.expression(0);
				this.state = 165;
				this.match(mrbeastreactsParser.T__11);
				}
				break;
			case 2:
				{
				this.state = 167;
				this.match(mrbeastreactsParser.ID);
				}
				break;
			case 3:
				{
				this.state = 168;
				this.match(mrbeastreactsParser.INT);
				}
				break;
			case 4:
				{
				this.state = 169;
				this.match(mrbeastreactsParser.STRING);
				}
				break;
			case 5:
				{
				this.state = 170;
				this.match(mrbeastreactsParser.BOOL);
				}
				break;
			case 6:
				{
				this.state = 171;
				this.functionCallStatement();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 179;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, mrbeastreactsParser.RULE_expression);
					this.state = 174;
					if (!(this.precpred(this._ctx, 6))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
					}
					this.state = 175;
					_la = this._input.LA(1);
					if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1071120384) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 176;
					this.expression(7);
					}
					}
				}
				this.state = 181;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 18:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,33,183,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,5,2,
	52,8,2,10,2,12,2,55,9,2,1,2,3,2,58,8,2,1,3,1,3,1,3,1,4,1,4,1,5,5,5,66,8,
	5,10,5,12,5,69,9,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,78,8,6,1,7,1,7,1,7,1,
	7,1,7,1,8,1,8,1,8,1,8,1,8,5,8,90,8,8,10,8,12,8,93,9,8,1,8,1,8,1,8,1,9,1,
	9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,110,8,9,1,10,1,10,1,10,1,
	10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,
	1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,
	14,1,14,1,15,1,15,1,16,1,16,3,16,150,8,16,1,17,1,17,1,17,5,17,155,8,17,
	10,17,12,17,158,9,17,1,17,3,17,161,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,
	18,1,18,1,18,1,18,3,18,173,8,18,1,18,1,18,1,18,5,18,178,8,18,10,18,12,18,
	181,9,18,1,18,0,1,36,19,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
	36,0,2,1,0,6,8,2,0,19,20,22,29,183,0,38,1,0,0,0,2,40,1,0,0,0,4,57,1,0,0,
	0,6,59,1,0,0,0,8,62,1,0,0,0,10,67,1,0,0,0,12,77,1,0,0,0,14,79,1,0,0,0,16,
	84,1,0,0,0,18,97,1,0,0,0,20,111,1,0,0,0,22,119,1,0,0,0,24,125,1,0,0,0,26,
	129,1,0,0,0,28,137,1,0,0,0,30,145,1,0,0,0,32,149,1,0,0,0,34,160,1,0,0,0,
	36,172,1,0,0,0,38,39,3,10,5,0,39,1,1,0,0,0,40,41,5,1,0,0,41,42,5,33,0,0,
	42,43,5,2,0,0,43,44,3,4,2,0,44,45,5,3,0,0,45,46,3,10,5,0,46,47,5,4,0,0,
	47,3,1,0,0,0,48,53,3,6,3,0,49,50,5,5,0,0,50,52,3,6,3,0,51,49,1,0,0,0,52,
	55,1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,58,1,0,0,0,55,53,1,0,0,0,56,58,
	1,0,0,0,57,48,1,0,0,0,57,56,1,0,0,0,58,5,1,0,0,0,59,60,3,8,4,0,60,61,5,
	33,0,0,61,7,1,0,0,0,62,63,7,0,0,0,63,9,1,0,0,0,64,66,3,12,6,0,65,64,1,0,
	0,0,66,69,1,0,0,0,67,65,1,0,0,0,67,68,1,0,0,0,68,11,1,0,0,0,69,67,1,0,0,
	0,70,78,3,14,7,0,71,78,3,16,8,0,72,78,3,18,9,0,73,78,3,20,10,0,74,78,3,
	22,11,0,75,78,3,24,12,0,76,78,3,26,13,0,77,70,1,0,0,0,77,71,1,0,0,0,77,
	72,1,0,0,0,77,73,1,0,0,0,77,74,1,0,0,0,77,75,1,0,0,0,77,76,1,0,0,0,78,13,
	1,0,0,0,79,80,5,33,0,0,80,81,5,9,0,0,81,82,3,36,18,0,82,83,5,10,0,0,83,
	15,1,0,0,0,84,85,5,11,0,0,85,86,5,2,0,0,86,91,3,36,18,0,87,88,5,5,0,0,88,
	90,3,36,18,0,89,87,1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,
	94,1,0,0,0,93,91,1,0,0,0,94,95,5,12,0,0,95,96,5,10,0,0,96,17,1,0,0,0,97,
	98,5,13,0,0,98,99,5,2,0,0,99,100,3,36,18,0,100,101,5,12,0,0,101,102,5,14,
	0,0,102,103,3,10,5,0,103,109,5,4,0,0,104,105,5,15,0,0,105,106,5,14,0,0,
	106,107,3,10,5,0,107,108,5,4,0,0,108,110,1,0,0,0,109,104,1,0,0,0,109,110,
	1,0,0,0,110,19,1,0,0,0,111,112,5,16,0,0,112,113,5,2,0,0,113,114,3,36,18,
	0,114,115,5,12,0,0,115,116,5,14,0,0,116,117,3,10,5,0,117,118,5,4,0,0,118,
	21,1,0,0,0,119,120,5,33,0,0,120,121,5,2,0,0,121,122,3,34,17,0,122,123,5,
	12,0,0,123,124,5,10,0,0,124,23,1,0,0,0,125,126,5,17,0,0,126,127,3,36,18,
	0,127,128,5,10,0,0,128,25,1,0,0,0,129,130,5,18,0,0,130,131,5,1,0,0,131,
	132,5,2,0,0,132,133,5,12,0,0,133,134,5,14,0,0,134,135,3,28,14,0,135,136,
	5,4,0,0,136,27,1,0,0,0,137,138,5,19,0,0,138,139,3,30,15,0,139,140,5,20,
	0,0,140,141,3,32,16,0,141,142,5,21,0,0,142,143,3,30,15,0,143,144,5,20,0,
	0,144,29,1,0,0,0,145,146,5,33,0,0,146,31,1,0,0,0,147,150,3,28,14,0,148,
	150,5,31,0,0,149,147,1,0,0,0,149,148,1,0,0,0,150,33,1,0,0,0,151,156,3,36,
	18,0,152,153,5,5,0,0,153,155,3,36,18,0,154,152,1,0,0,0,155,158,1,0,0,0,
	156,154,1,0,0,0,156,157,1,0,0,0,157,161,1,0,0,0,158,156,1,0,0,0,159,161,
	1,0,0,0,160,151,1,0,0,0,160,159,1,0,0,0,161,35,1,0,0,0,162,163,6,18,-1,
	0,163,164,5,2,0,0,164,165,3,36,18,0,165,166,5,12,0,0,166,173,1,0,0,0,167,
	173,5,33,0,0,168,173,5,30,0,0,169,173,5,31,0,0,170,173,5,32,0,0,171,173,
	3,22,11,0,172,162,1,0,0,0,172,167,1,0,0,0,172,168,1,0,0,0,172,169,1,0,0,
	0,172,170,1,0,0,0,172,171,1,0,0,0,173,179,1,0,0,0,174,175,10,6,0,0,175,
	176,7,1,0,0,176,178,3,36,18,7,177,174,1,0,0,0,178,181,1,0,0,0,179,177,1,
	0,0,0,179,180,1,0,0,0,180,37,1,0,0,0,181,179,1,0,0,0,11,53,57,67,77,91,
	109,149,156,160,172,179];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!mrbeastreactsParser.__ATN) {
			mrbeastreactsParser.__ATN = new ATNDeserializer().deserialize(mrbeastreactsParser._serializedATN);
		}

		return mrbeastreactsParser.__ATN;
	}


	static DecisionsToDFA = mrbeastreactsParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: mrbeastreactsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statementList(): StatementListContext {
		return this.getTypedRuleContext(StatementListContext, 0) as StatementListContext;
	}
    public get ruleIndex(): number {
    	return mrbeastreactsParser.RULE_program;
	}
	public enterRule(listener: mrbeastreactsListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: mrbeastreactsListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mrbeastreactsVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	constructor(parser?: mrbeastreactsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(mrbeastreactsParser.ID, 0);
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
	public statementList(): StatementListContext {
		return this.getTypedRuleContext(StatementListContext, 0) as StatementListContext;
	}
    public get ruleIndex(): number {
    	return mrbeastreactsParser.RULE_functionDeclaration;
	}
	public enterRule(listener: mrbeastreactsListener): void {
	    if(listener.enterFunctionDeclaration) {
	 		listener.enterFunctionDeclaration(this);
		}
	}
	public exitRule(listener: mrbeastreactsListener): void {
	    if(listener.exitFunctionDeclaration) {
	 		listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mrbeastreactsVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	constructor(parser?: mrbeastreactsParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return mrbeastreactsParser.RULE_parameterList;
	}
	public enterRule(listener: mrbeastreactsListener): void {
	    if(listener.enterParameterList) {
	 		listener.enterParameterList(this);
		}
	}
	public exitRule(listener: mrbeastreactsListener): void {
	    if(listener.exitParameterList) {
	 		listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mrbeastreactsVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	constructor(parser?: mrbeastreactsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public ID(): TerminalNode {
		return this.getToken(mrbeastreactsParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return mrbeastreactsParser.RULE_parameter;
	}
	public enterRule(listener: mrbeastreactsListener): void {
	    if(listener.enterParameter) {
	 		listener.enterParameter(this);
		}
	}
	public exitRule(listener: mrbeastreactsListener): void {
	    if(listener.exitParameter) {
	 		listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mrbeastreactsVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parser?: mrbeastreactsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return mrbeastreactsParser.RULE_type;
	}
	public enterRule(listener: mrbeastreactsListener): void {
	    if(listener.enterType) {
	 		listener.enterType(this);
		}
	}
	public exitRule(listener: mrbeastreactsListener): void {
	    if(listener.exitType) {
	 		listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mrbeastreactsVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementListContext extends ParserRuleContext {
	constructor(parser?: mrbeastreactsParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return mrbeastreactsParser.RULE_statementList;
	}
	public enterRule(listener: mrbeastreactsListener): void {
	    if(listener.enterStatementList) {
	 		listener.enterStatementList(this);
		}
	}
	public exitRule(listener: mrbeastreactsListener): void {
	    if(listener.exitStatementList) {
	 		listener.exitStatementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mrbeastreactsVisitor<Result>): Result {
		if (visitor.visitStatementList) {
			return visitor.visitStatementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: mrbeastreactsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignmentStatement(): AssignmentStatementContext {
		return this.getTypedRuleContext(AssignmentStatementContext, 0) as AssignmentStatementContext;
	}
	public printStatement(): PrintStatementContext {
		return this.getTypedRuleContext(PrintStatementContext, 0) as PrintStatementContext;
	}
	public ifStatement(): IfStatementContext {
		return this.getTypedRuleContext(IfStatementContext, 0) as IfStatementContext;
	}
	public whileStatement(): WhileStatementContext {
		return this.getTypedRuleContext(WhileStatementContext, 0) as WhileStatementContext;
	}
	public functionCallStatement(): FunctionCallStatementContext {
		return this.getTypedRuleContext(FunctionCallStatementContext, 0) as FunctionCallStatementContext;
	}
	public returnStatement(): ReturnStatementContext {
		return this.getTypedRuleContext(ReturnStatementContext, 0) as ReturnStatementContext;
	}
	public jsxStatement(): JsxStatementContext {
		return this.getTypedRuleContext(JsxStatementContext, 0) as JsxStatementContext;
	}
    public get ruleIndex(): number {
    	return mrbeastreactsParser.RULE_statement;
	}
	public enterRule(listener: mrbeastreactsListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: mrbeastreactsListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mrbeastreactsVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentStatementContext extends ParserRuleContext {
	constructor(parser?: mrbeastreactsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(mrbeastreactsParser.ID, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return mrbeastreactsParser.RULE_assignmentStatement;
	}
	public enterRule(listener: mrbeastreactsListener): void {
	    if(listener.enterAssignmentStatement) {
	 		listener.enterAssignmentStatement(this);
		}
	}
	public exitRule(listener: mrbeastreactsListener): void {
	    if(listener.exitAssignmentStatement) {
	 		listener.exitAssignmentStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mrbeastreactsVisitor<Result>): Result {
		if (visitor.visitAssignmentStatement) {
			return visitor.visitAssignmentStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintStatementContext extends ParserRuleContext {
	constructor(parser?: mrbeastreactsParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return mrbeastreactsParser.RULE_printStatement;
	}
	public enterRule(listener: mrbeastreactsListener): void {
	    if(listener.enterPrintStatement) {
	 		listener.enterPrintStatement(this);
		}
	}
	public exitRule(listener: mrbeastreactsListener): void {
	    if(listener.exitPrintStatement) {
	 		listener.exitPrintStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mrbeastreactsVisitor<Result>): Result {
		if (visitor.visitPrintStatement) {
			return visitor.visitPrintStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	constructor(parser?: mrbeastreactsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statementList_list(): StatementListContext[] {
		return this.getTypedRuleContexts(StatementListContext) as StatementListContext[];
	}
	public statementList(i: number): StatementListContext {
		return this.getTypedRuleContext(StatementListContext, i) as StatementListContext;
	}
    public get ruleIndex(): number {
    	return mrbeastreactsParser.RULE_ifStatement;
	}
	public enterRule(listener: mrbeastreactsListener): void {
	    if(listener.enterIfStatement) {
	 		listener.enterIfStatement(this);
		}
	}
	public exitRule(listener: mrbeastreactsListener): void {
	    if(listener.exitIfStatement) {
	 		listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mrbeastreactsVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	constructor(parser?: mrbeastreactsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statementList(): StatementListContext {
		return this.getTypedRuleContext(StatementListContext, 0) as StatementListContext;
	}
    public get ruleIndex(): number {
    	return mrbeastreactsParser.RULE_whileStatement;
	}
	public enterRule(listener: mrbeastreactsListener): void {
	    if(listener.enterWhileStatement) {
	 		listener.enterWhileStatement(this);
		}
	}
	public exitRule(listener: mrbeastreactsListener): void {
	    if(listener.exitWhileStatement) {
	 		listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mrbeastreactsVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallStatementContext extends ParserRuleContext {
	constructor(parser?: mrbeastreactsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(mrbeastreactsParser.ID, 0);
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
    public get ruleIndex(): number {
    	return mrbeastreactsParser.RULE_functionCallStatement;
	}
	public enterRule(listener: mrbeastreactsListener): void {
	    if(listener.enterFunctionCallStatement) {
	 		listener.enterFunctionCallStatement(this);
		}
	}
	public exitRule(listener: mrbeastreactsListener): void {
	    if(listener.exitFunctionCallStatement) {
	 		listener.exitFunctionCallStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mrbeastreactsVisitor<Result>): Result {
		if (visitor.visitFunctionCallStatement) {
			return visitor.visitFunctionCallStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	constructor(parser?: mrbeastreactsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return mrbeastreactsParser.RULE_returnStatement;
	}
	public enterRule(listener: mrbeastreactsListener): void {
	    if(listener.enterReturnStatement) {
	 		listener.enterReturnStatement(this);
		}
	}
	public exitRule(listener: mrbeastreactsListener): void {
	    if(listener.exitReturnStatement) {
	 		listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mrbeastreactsVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsxStatementContext extends ParserRuleContext {
	constructor(parser?: mrbeastreactsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public jsxElement(): JsxElementContext {
		return this.getTypedRuleContext(JsxElementContext, 0) as JsxElementContext;
	}
    public get ruleIndex(): number {
    	return mrbeastreactsParser.RULE_jsxStatement;
	}
	public enterRule(listener: mrbeastreactsListener): void {
	    if(listener.enterJsxStatement) {
	 		listener.enterJsxStatement(this);
		}
	}
	public exitRule(listener: mrbeastreactsListener): void {
	    if(listener.exitJsxStatement) {
	 		listener.exitJsxStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mrbeastreactsVisitor<Result>): Result {
		if (visitor.visitJsxStatement) {
			return visitor.visitJsxStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsxElementContext extends ParserRuleContext {
	constructor(parser?: mrbeastreactsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public jsxTagName_list(): JsxTagNameContext[] {
		return this.getTypedRuleContexts(JsxTagNameContext) as JsxTagNameContext[];
	}
	public jsxTagName(i: number): JsxTagNameContext {
		return this.getTypedRuleContext(JsxTagNameContext, i) as JsxTagNameContext;
	}
	public jsxChildren(): JsxChildrenContext {
		return this.getTypedRuleContext(JsxChildrenContext, 0) as JsxChildrenContext;
	}
    public get ruleIndex(): number {
    	return mrbeastreactsParser.RULE_jsxElement;
	}
	public enterRule(listener: mrbeastreactsListener): void {
	    if(listener.enterJsxElement) {
	 		listener.enterJsxElement(this);
		}
	}
	public exitRule(listener: mrbeastreactsListener): void {
	    if(listener.exitJsxElement) {
	 		listener.exitJsxElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mrbeastreactsVisitor<Result>): Result {
		if (visitor.visitJsxElement) {
			return visitor.visitJsxElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsxTagNameContext extends ParserRuleContext {
	constructor(parser?: mrbeastreactsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(mrbeastreactsParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return mrbeastreactsParser.RULE_jsxTagName;
	}
	public enterRule(listener: mrbeastreactsListener): void {
	    if(listener.enterJsxTagName) {
	 		listener.enterJsxTagName(this);
		}
	}
	public exitRule(listener: mrbeastreactsListener): void {
	    if(listener.exitJsxTagName) {
	 		listener.exitJsxTagName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mrbeastreactsVisitor<Result>): Result {
		if (visitor.visitJsxTagName) {
			return visitor.visitJsxTagName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsxChildrenContext extends ParserRuleContext {
	constructor(parser?: mrbeastreactsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public jsxElement(): JsxElementContext {
		return this.getTypedRuleContext(JsxElementContext, 0) as JsxElementContext;
	}
	public STRING(): TerminalNode {
		return this.getToken(mrbeastreactsParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return mrbeastreactsParser.RULE_jsxChildren;
	}
	public enterRule(listener: mrbeastreactsListener): void {
	    if(listener.enterJsxChildren) {
	 		listener.enterJsxChildren(this);
		}
	}
	public exitRule(listener: mrbeastreactsListener): void {
	    if(listener.exitJsxChildren) {
	 		listener.exitJsxChildren(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mrbeastreactsVisitor<Result>): Result {
		if (visitor.visitJsxChildren) {
			return visitor.visitJsxChildren(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	constructor(parser?: mrbeastreactsParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return mrbeastreactsParser.RULE_expressionList;
	}
	public enterRule(listener: mrbeastreactsListener): void {
	    if(listener.enterExpressionList) {
	 		listener.enterExpressionList(this);
		}
	}
	public exitRule(listener: mrbeastreactsListener): void {
	    if(listener.exitExpressionList) {
	 		listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mrbeastreactsVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: mrbeastreactsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public ID(): TerminalNode {
		return this.getToken(mrbeastreactsParser.ID, 0);
	}
	public INT(): TerminalNode {
		return this.getToken(mrbeastreactsParser.INT, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(mrbeastreactsParser.STRING, 0);
	}
	public BOOL(): TerminalNode {
		return this.getToken(mrbeastreactsParser.BOOL, 0);
	}
	public functionCallStatement(): FunctionCallStatementContext {
		return this.getTypedRuleContext(FunctionCallStatementContext, 0) as FunctionCallStatementContext;
	}
    public get ruleIndex(): number {
    	return mrbeastreactsParser.RULE_expression;
	}
	public enterRule(listener: mrbeastreactsListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: mrbeastreactsListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mrbeastreactsVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
