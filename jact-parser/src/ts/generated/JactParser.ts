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
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly ID = 37;
	public static readonly INT = 38;
	public static readonly FLOAT = 39;
	public static readonly BOOL = 40;
	public static readonly STRING = 41;
	public static readonly OPERATOR = 42;
	public static readonly WS = 43;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_printStatement = 2;
	public static readonly RULE_returnStatement = 3;
	public static readonly RULE_exportStatement = 4;
	public static readonly RULE_jactCode = 5;
	public static readonly RULE_jactElement = 6;
	public static readonly RULE_jactElementName = 7;
	public static readonly RULE_elementContent = 8;
	public static readonly RULE_variableDeclaration = 9;
	public static readonly RULE_variableMemoryTypeDeclaration = 10;
	public static readonly RULE_expression = 11;
	public static readonly RULE_functionDeclaration = 12;
	public static readonly RULE_functionCall = 13;
	public static readonly RULE_parameterList = 14;
	public static readonly RULE_untypedParameterList = 15;
	public static readonly RULE_passedParameter = 16;
	public static readonly RULE_parameter = 17;
	public static readonly RULE_calculationStatement = 18;
	public static readonly RULE_builtInType = 19;
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "'lotzien('", 
                                                            "');'", "'kbentkwijt '", 
                                                            "'exporteer '", 
                                                            "'['", "']'", 
                                                            "'<'", "'>'", 
                                                            "'</'", "'h1'", 
                                                            "'h2'", "'h3'", 
                                                            "'h4'", "'h5'", 
                                                            "'h6'", "'div'", 
                                                            "'p'", "'span'", 
                                                            "' '", "'!'", 
                                                            "'.'", "'?'", 
                                                            "':'", "' = '", 
                                                            "'tzitvast'", 
                                                            "'tisvrij'", 
                                                            "'tisoud'", 
                                                            "'doenekeeriet '", 
                                                            "'('", "') {'", 
                                                            "'}'", "','", 
                                                            "'nummerke'", 
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
		"program", "statement", "printStatement", "returnStatement", "exportStatement", 
		"jactCode", "jactElement", "jactElementName", "elementContent", "variableDeclaration", 
		"variableMemoryTypeDeclaration", "expression", "functionDeclaration", 
		"functionCall", "parameterList", "untypedParameterList", "passedParameter", 
		"parameter", "calculationStatement", "builtInType",
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
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1006633076) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 31) !== 0)) {
				{
				{
				this.state = 40;
				this.statement();
				}
				}
				this.state = 45;
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
			this.state = 55;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 46;
				this.match(JactParser.ID);
				this.state = 47;
				this.match(JactParser.T__0);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 48;
				this.printStatement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 49;
				this.variableDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 50;
				this.functionDeclaration();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 51;
				this.returnStatement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 52;
				this.functionCall();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 53;
				this.calculationStatement();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 54;
				this.exportStatement();
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
			this.state = 57;
			this.match(JactParser.T__1);
			this.state = 61;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 58;
				this.functionCall();
				}
				break;
			case 2:
				{
				this.state = 59;
				this.calculationStatement();
				}
				break;
			case 3:
				{
				this.state = 60;
				this.expression();
				}
				break;
			}
			this.state = 63;
			this.match(JactParser.T__2);
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
			this.state = 70;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 65;
				this.match(JactParser.T__3);
				this.state = 66;
				this.statement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 67;
				this.jactCode();
				this.state = 68;
				this.match(JactParser.T__0);
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
	public exportStatement(): ExportStatementContext {
		let localctx: ExportStatementContext = new ExportStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, JactParser.RULE_exportStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 72;
			this.match(JactParser.T__4);
			this.state = 73;
			this.statement();
			this.state = 74;
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
	public jactCode(): JactCodeContext {
		let localctx: JactCodeContext = new JactCodeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, JactParser.RULE_jactCode);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 76;
			this.match(JactParser.T__5);
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===8) {
				{
				{
				this.state = 77;
				this.jactElement();
				}
				}
				this.state = 82;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 83;
			this.match(JactParser.T__6);
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
	public jactElement(): JactElementContext {
		let localctx: JactElementContext = new JactElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, JactParser.RULE_jactElement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 85;
			this.match(JactParser.T__7);
			this.state = 86;
			this.jactElementName();
			this.state = 87;
			this.match(JactParser.T__8);
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & 536932353) !== 0)) {
				{
				this.state = 90;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 8:
					{
					this.state = 88;
					this.jactElement();
					}
					break;
				case 20:
				case 21:
				case 22:
				case 23:
				case 37:
					{
					this.state = 89;
					this.elementContent();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 95;
			this.match(JactParser.T__9);
			this.state = 96;
			this.jactElementName();
			this.state = 97;
			this.match(JactParser.T__8);
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
	public jactElementName(): JactElementNameContext {
		let localctx: JactElementNameContext = new JactElementNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, JactParser.RULE_jactElementName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 99;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1046528) !== 0))) {
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
	public elementContent(): ElementContentContext {
		let localctx: ElementContentContext = new ElementContentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, JactParser.RULE_elementContent);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 102;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 101;
					_la = this._input.LA(1);
					if(!(((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & 131087) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 104;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
		this.enterRule(localctx, 18, JactParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 106;
			this.variableMemoryTypeDeclaration();
			this.state = 107;
			this.match(JactParser.T__19);
			this.state = 108;
			this.match(JactParser.ID);
			this.state = 109;
			this.match(JactParser.T__23);
			this.state = 110;
			this.builtInType();
			this.state = 111;
			this.match(JactParser.T__24);
			this.state = 112;
			this.expression();
			this.state = 113;
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
		this.enterRule(localctx, 20, JactParser.RULE_variableMemoryTypeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 115;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 469762048) !== 0))) {
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
		this.enterRule(localctx, 22, JactParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 117;
			_la = this._input.LA(1);
			if(!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 31) !== 0))) {
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
		this.enterRule(localctx, 24, JactParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 119;
			this.match(JactParser.T__28);
			this.state = 120;
			this.match(JactParser.ID);
			this.state = 121;
			this.match(JactParser.T__29);
			this.state = 122;
			this.parameterList();
			this.state = 123;
			this.match(JactParser.T__30);
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1006633076) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 31) !== 0)) {
				{
				{
				this.state = 124;
				this.statement();
				}
				}
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 130;
			this.match(JactParser.T__31);
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
		this.enterRule(localctx, 26, JactParser.RULE_functionCall);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 132;
			this.match(JactParser.ID);
			this.state = 133;
			this.match(JactParser.T__29);
			this.state = 134;
			this.untypedParameterList();
			this.state = 135;
			this.match(JactParser.T__2);
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
		this.enterRule(localctx, 28, JactParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===37) {
				{
				this.state = 137;
				this.parameter();
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===33) {
					{
					{
					this.state = 138;
					this.match(JactParser.T__32);
					this.state = 139;
					this.parameter();
					}
					}
					this.state = 144;
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
		this.enterRule(localctx, 30, JactParser.RULE_untypedParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 31) !== 0)) {
				{
				this.state = 147;
				this.passedParameter();
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===33) {
					{
					{
					this.state = 148;
					this.match(JactParser.T__32);
					this.state = 149;
					this.passedParameter();
					}
					}
					this.state = 154;
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
	public passedParameter(): PassedParameterContext {
		let localctx: PassedParameterContext = new PassedParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, JactParser.RULE_passedParameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 159;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 157;
				this.expression();
				}
				break;
			case 2:
				{
				this.state = 158;
				this.match(JactParser.ID);
				}
				break;
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
		this.enterRule(localctx, 34, JactParser.RULE_parameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 161;
			this.match(JactParser.ID);
			this.state = 162;
			this.match(JactParser.T__23);
			this.state = 163;
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
		this.enterRule(localctx, 36, JactParser.RULE_calculationStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 165;
			this.expression();
			this.state = 166;
			this.match(JactParser.T__19);
			this.state = 167;
			this.match(JactParser.OPERATOR);
			this.state = 168;
			this.match(JactParser.T__19);
			this.state = 169;
			this.expression();
			this.state = 170;
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
	public builtInType(): BuiltInTypeContext {
		let localctx: BuiltInTypeContext = new BuiltInTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, JactParser.RULE_builtInType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 172;
			_la = this._input.LA(1);
			if(!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 7) !== 0))) {
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

	public static readonly _serializedATN: number[] = [4,1,43,175,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,1,0,5,0,42,8,0,10,0,12,0,45,9,0,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,3,1,56,8,1,1,2,1,2,1,2,1,2,3,2,62,8,2,1,2,1,2,1,3,
	1,3,1,3,1,3,1,3,3,3,71,8,3,1,4,1,4,1,4,1,4,1,5,1,5,5,5,79,8,5,10,5,12,5,
	82,9,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,5,6,91,8,6,10,6,12,6,94,9,6,1,6,1,6,
	1,6,1,6,1,7,1,7,1,8,4,8,103,8,8,11,8,12,8,104,1,9,1,9,1,9,1,9,1,9,1,9,1,
	9,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,5,12,126,8,
	12,10,12,12,12,129,9,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,
	14,5,14,141,8,14,10,14,12,14,144,9,14,3,14,146,8,14,1,15,1,15,1,15,5,15,
	151,8,15,10,15,12,15,154,9,15,3,15,156,8,15,1,16,1,16,3,16,160,8,16,1,17,
	1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,0,0,20,
	0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,0,5,1,0,11,19,2,
	0,20,23,37,37,1,0,26,28,1,0,37,41,1,0,34,36,175,0,43,1,0,0,0,2,55,1,0,0,
	0,4,57,1,0,0,0,6,70,1,0,0,0,8,72,1,0,0,0,10,76,1,0,0,0,12,85,1,0,0,0,14,
	99,1,0,0,0,16,102,1,0,0,0,18,106,1,0,0,0,20,115,1,0,0,0,22,117,1,0,0,0,
	24,119,1,0,0,0,26,132,1,0,0,0,28,145,1,0,0,0,30,155,1,0,0,0,32,159,1,0,
	0,0,34,161,1,0,0,0,36,165,1,0,0,0,38,172,1,0,0,0,40,42,3,2,1,0,41,40,1,
	0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,1,1,0,0,0,45,43,1,0,
	0,0,46,47,5,37,0,0,47,56,5,1,0,0,48,56,3,4,2,0,49,56,3,18,9,0,50,56,3,24,
	12,0,51,56,3,6,3,0,52,56,3,26,13,0,53,56,3,36,18,0,54,56,3,8,4,0,55,46,
	1,0,0,0,55,48,1,0,0,0,55,49,1,0,0,0,55,50,1,0,0,0,55,51,1,0,0,0,55,52,1,
	0,0,0,55,53,1,0,0,0,55,54,1,0,0,0,56,3,1,0,0,0,57,61,5,2,0,0,58,62,3,26,
	13,0,59,62,3,36,18,0,60,62,3,22,11,0,61,58,1,0,0,0,61,59,1,0,0,0,61,60,
	1,0,0,0,62,63,1,0,0,0,63,64,5,3,0,0,64,5,1,0,0,0,65,66,5,4,0,0,66,71,3,
	2,1,0,67,68,3,10,5,0,68,69,5,1,0,0,69,71,1,0,0,0,70,65,1,0,0,0,70,67,1,
	0,0,0,71,7,1,0,0,0,72,73,5,5,0,0,73,74,3,2,1,0,74,75,5,1,0,0,75,9,1,0,0,
	0,76,80,5,6,0,0,77,79,3,12,6,0,78,77,1,0,0,0,79,82,1,0,0,0,80,78,1,0,0,
	0,80,81,1,0,0,0,81,83,1,0,0,0,82,80,1,0,0,0,83,84,5,7,0,0,84,11,1,0,0,0,
	85,86,5,8,0,0,86,87,3,14,7,0,87,92,5,9,0,0,88,91,3,12,6,0,89,91,3,16,8,
	0,90,88,1,0,0,0,90,89,1,0,0,0,91,94,1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,
	93,95,1,0,0,0,94,92,1,0,0,0,95,96,5,10,0,0,96,97,3,14,7,0,97,98,5,9,0,0,
	98,13,1,0,0,0,99,100,7,0,0,0,100,15,1,0,0,0,101,103,7,1,0,0,102,101,1,0,
	0,0,103,104,1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,17,1,0,0,0,106,
	107,3,20,10,0,107,108,5,20,0,0,108,109,5,37,0,0,109,110,5,24,0,0,110,111,
	3,38,19,0,111,112,5,25,0,0,112,113,3,22,11,0,113,114,5,1,0,0,114,19,1,0,
	0,0,115,116,7,2,0,0,116,21,1,0,0,0,117,118,7,3,0,0,118,23,1,0,0,0,119,120,
	5,29,0,0,120,121,5,37,0,0,121,122,5,30,0,0,122,123,3,28,14,0,123,127,5,
	31,0,0,124,126,3,2,1,0,125,124,1,0,0,0,126,129,1,0,0,0,127,125,1,0,0,0,
	127,128,1,0,0,0,128,130,1,0,0,0,129,127,1,0,0,0,130,131,5,32,0,0,131,25,
	1,0,0,0,132,133,5,37,0,0,133,134,5,30,0,0,134,135,3,30,15,0,135,136,5,3,
	0,0,136,27,1,0,0,0,137,142,3,34,17,0,138,139,5,33,0,0,139,141,3,34,17,0,
	140,138,1,0,0,0,141,144,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,146,
	1,0,0,0,144,142,1,0,0,0,145,137,1,0,0,0,145,146,1,0,0,0,146,29,1,0,0,0,
	147,152,3,32,16,0,148,149,5,33,0,0,149,151,3,32,16,0,150,148,1,0,0,0,151,
	154,1,0,0,0,152,150,1,0,0,0,152,153,1,0,0,0,153,156,1,0,0,0,154,152,1,0,
	0,0,155,147,1,0,0,0,155,156,1,0,0,0,156,31,1,0,0,0,157,160,3,22,11,0,158,
	160,5,37,0,0,159,157,1,0,0,0,159,158,1,0,0,0,160,33,1,0,0,0,161,162,5,37,
	0,0,162,163,5,24,0,0,163,164,3,38,19,0,164,35,1,0,0,0,165,166,3,22,11,0,
	166,167,5,20,0,0,167,168,5,42,0,0,168,169,5,20,0,0,169,170,3,22,11,0,170,
	171,5,1,0,0,171,37,1,0,0,0,172,173,7,4,0,0,173,39,1,0,0,0,14,43,55,61,70,
	80,90,92,104,127,142,145,152,155,159];

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
	public exportStatement(): ExportStatementContext {
		return this.getTypedRuleContext(ExportStatementContext, 0) as ExportStatementContext;
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
	public jactCode(): JactCodeContext {
		return this.getTypedRuleContext(JactCodeContext, 0) as JactCodeContext;
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


export class ExportStatementContext extends ParserRuleContext {
	constructor(parser?: JactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return JactParser.RULE_exportStatement;
	}
	public enterRule(listener: JactListener): void {
	    if(listener.enterExportStatement) {
	 		listener.enterExportStatement(this);
		}
	}
	public exitRule(listener: JactListener): void {
	    if(listener.exitExportStatement) {
	 		listener.exitExportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JactVisitor<Result>): Result {
		if (visitor.visitExportStatement) {
			return visitor.visitExportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JactCodeContext extends ParserRuleContext {
	constructor(parser?: JactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public jactElement_list(): JactElementContext[] {
		return this.getTypedRuleContexts(JactElementContext) as JactElementContext[];
	}
	public jactElement(i: number): JactElementContext {
		return this.getTypedRuleContext(JactElementContext, i) as JactElementContext;
	}
    public get ruleIndex(): number {
    	return JactParser.RULE_jactCode;
	}
	public enterRule(listener: JactListener): void {
	    if(listener.enterJactCode) {
	 		listener.enterJactCode(this);
		}
	}
	public exitRule(listener: JactListener): void {
	    if(listener.exitJactCode) {
	 		listener.exitJactCode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JactVisitor<Result>): Result {
		if (visitor.visitJactCode) {
			return visitor.visitJactCode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JactElementContext extends ParserRuleContext {
	constructor(parser?: JactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public jactElementName_list(): JactElementNameContext[] {
		return this.getTypedRuleContexts(JactElementNameContext) as JactElementNameContext[];
	}
	public jactElementName(i: number): JactElementNameContext {
		return this.getTypedRuleContext(JactElementNameContext, i) as JactElementNameContext;
	}
	public jactElement_list(): JactElementContext[] {
		return this.getTypedRuleContexts(JactElementContext) as JactElementContext[];
	}
	public jactElement(i: number): JactElementContext {
		return this.getTypedRuleContext(JactElementContext, i) as JactElementContext;
	}
	public elementContent_list(): ElementContentContext[] {
		return this.getTypedRuleContexts(ElementContentContext) as ElementContentContext[];
	}
	public elementContent(i: number): ElementContentContext {
		return this.getTypedRuleContext(ElementContentContext, i) as ElementContentContext;
	}
    public get ruleIndex(): number {
    	return JactParser.RULE_jactElement;
	}
	public enterRule(listener: JactListener): void {
	    if(listener.enterJactElement) {
	 		listener.enterJactElement(this);
		}
	}
	public exitRule(listener: JactListener): void {
	    if(listener.exitJactElement) {
	 		listener.exitJactElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JactVisitor<Result>): Result {
		if (visitor.visitJactElement) {
			return visitor.visitJactElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JactElementNameContext extends ParserRuleContext {
	constructor(parser?: JactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return JactParser.RULE_jactElementName;
	}
	public enterRule(listener: JactListener): void {
	    if(listener.enterJactElementName) {
	 		listener.enterJactElementName(this);
		}
	}
	public exitRule(listener: JactListener): void {
	    if(listener.exitJactElementName) {
	 		listener.exitJactElementName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JactVisitor<Result>): Result {
		if (visitor.visitJactElementName) {
			return visitor.visitJactElementName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContentContext extends ParserRuleContext {
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
    	return JactParser.RULE_elementContent;
	}
	public enterRule(listener: JactListener): void {
	    if(listener.enterElementContent) {
	 		listener.enterElementContent(this);
		}
	}
	public exitRule(listener: JactListener): void {
	    if(listener.exitElementContent) {
	 		listener.exitElementContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JactVisitor<Result>): Result {
		if (visitor.visitElementContent) {
			return visitor.visitElementContent(this);
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
	public passedParameter_list(): PassedParameterContext[] {
		return this.getTypedRuleContexts(PassedParameterContext) as PassedParameterContext[];
	}
	public passedParameter(i: number): PassedParameterContext {
		return this.getTypedRuleContext(PassedParameterContext, i) as PassedParameterContext;
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


export class PassedParameterContext extends ParserRuleContext {
	constructor(parser?: JactParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public ID(): TerminalNode {
		return this.getToken(JactParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return JactParser.RULE_passedParameter;
	}
	public enterRule(listener: JactListener): void {
	    if(listener.enterPassedParameter) {
	 		listener.enterPassedParameter(this);
		}
	}
	public exitRule(listener: JactListener): void {
	    if(listener.exitPassedParameter) {
	 		listener.exitPassedParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JactVisitor<Result>): Result {
		if (visitor.visitPassedParameter) {
			return visitor.visitPassedParameter(this);
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
