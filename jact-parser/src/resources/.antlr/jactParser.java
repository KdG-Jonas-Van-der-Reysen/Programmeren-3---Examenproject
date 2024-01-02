// Generated from c://1_LOKALE_PROJECTEN//SCHOOL//2023-2024//Programmeren 3//jonas.vanderreysen//jact-parser//src//resources//Jact.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class JactParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, ID=37, INT=38, FLOAT=39, 
		BOOL=40, STRING=41, OPERATOR=42, WS=43;
	public static final int
		RULE_program = 0, RULE_statement = 1, RULE_printStatement = 2, RULE_returnStatement = 3, 
		RULE_exportStatement = 4, RULE_jactCode = 5, RULE_jactElement = 6, RULE_jactElementName = 7, 
		RULE_elementContent = 8, RULE_variableDeclaration = 9, RULE_variableMemoryTypeDeclaration = 10, 
		RULE_expression = 11, RULE_functionDeclaration = 12, RULE_functionCall = 13, 
		RULE_parameterList = 14, RULE_untypedParameterList = 15, RULE_passedParameter = 16, 
		RULE_parameter = 17, RULE_calculationStatement = 18, RULE_builtInType = 19;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "statement", "printStatement", "returnStatement", "exportStatement", 
			"jactCode", "jactElement", "jactElementName", "elementContent", "variableDeclaration", 
			"variableMemoryTypeDeclaration", "expression", "functionDeclaration", 
			"functionCall", "parameterList", "untypedParameterList", "passedParameter", 
			"parameter", "calculationStatement", "builtInType"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "';'", "'lotzien('", "');'", "'kbentkwijt '", "'exporteer '", "'['", 
			"']'", "'<'", "'>'", "'</'", "'h1'", "'h2'", "'h3'", "'h4'", "'h5'", 
			"'h6'", "'div'", "'p'", "'span'", "' '", "'!'", "'.'", "'?'", "':'", 
			"' = '", "'tzitvast'", "'tisvrij'", "'tisoud'", "'doenekeeriet '", "'('", 
			"') {'", "'}'", "','", "'nummerke'", "'jaofnee'", "'tekstje'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, "ID", "INT", "FLOAT", "BOOL", "STRING", "OPERATOR", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Jact.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public JactParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(43);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4261614190708L) != 0)) {
				{
				{
				setState(40);
				statement();
				}
				}
				setState(45);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(JactParser.ID, 0); }
		public PrintStatementContext printStatement() {
			return getRuleContext(PrintStatementContext.class,0);
		}
		public VariableDeclarationContext variableDeclaration() {
			return getRuleContext(VariableDeclarationContext.class,0);
		}
		public FunctionDeclarationContext functionDeclaration() {
			return getRuleContext(FunctionDeclarationContext.class,0);
		}
		public ReturnStatementContext returnStatement() {
			return getRuleContext(ReturnStatementContext.class,0);
		}
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public CalculationStatementContext calculationStatement() {
			return getRuleContext(CalculationStatementContext.class,0);
		}
		public ExportStatementContext exportStatement() {
			return getRuleContext(ExportStatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			setState(55);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(46);
				match(ID);
				setState(47);
				match(T__0);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(48);
				printStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(49);
				variableDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(50);
				functionDeclaration();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(51);
				returnStatement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(52);
				functionCall();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(53);
				calculationStatement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(54);
				exportStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrintStatementContext extends ParserRuleContext {
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public CalculationStatementContext calculationStatement() {
			return getRuleContext(CalculationStatementContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public PrintStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_printStatement; }
	}

	public final PrintStatementContext printStatement() throws RecognitionException {
		PrintStatementContext _localctx = new PrintStatementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_printStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(57);
			match(T__1);
			setState(61);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				{
				setState(58);
				functionCall();
				}
				break;
			case 2:
				{
				setState(59);
				calculationStatement();
				}
				break;
			case 3:
				{
				setState(60);
				expression();
				}
				break;
			}
			setState(63);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReturnStatementContext extends ParserRuleContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public JactCodeContext jactCode() {
			return getRuleContext(JactCodeContext.class,0);
		}
		public ReturnStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStatement; }
	}

	public final ReturnStatementContext returnStatement() throws RecognitionException {
		ReturnStatementContext _localctx = new ReturnStatementContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_returnStatement);
		try {
			setState(70);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
				enterOuterAlt(_localctx, 1);
				{
				setState(65);
				match(T__3);
				setState(66);
				statement();
				}
				break;
			case T__5:
				enterOuterAlt(_localctx, 2);
				{
				setState(67);
				jactCode();
				setState(68);
				match(T__0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExportStatementContext extends ParserRuleContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public ExportStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exportStatement; }
	}

	public final ExportStatementContext exportStatement() throws RecognitionException {
		ExportStatementContext _localctx = new ExportStatementContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_exportStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(72);
			match(T__4);
			setState(73);
			statement();
			setState(74);
			match(T__0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class JactCodeContext extends ParserRuleContext {
		public List<JactElementContext> jactElement() {
			return getRuleContexts(JactElementContext.class);
		}
		public JactElementContext jactElement(int i) {
			return getRuleContext(JactElementContext.class,i);
		}
		public JactCodeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_jactCode; }
	}

	public final JactCodeContext jactCode() throws RecognitionException {
		JactCodeContext _localctx = new JactCodeContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_jactCode);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(76);
			match(T__5);
			setState(80);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__7) {
				{
				{
				setState(77);
				jactElement();
				}
				}
				setState(82);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(83);
			match(T__6);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class JactElementContext extends ParserRuleContext {
		public List<JactElementNameContext> jactElementName() {
			return getRuleContexts(JactElementNameContext.class);
		}
		public JactElementNameContext jactElementName(int i) {
			return getRuleContext(JactElementNameContext.class,i);
		}
		public List<JactElementContext> jactElement() {
			return getRuleContexts(JactElementContext.class);
		}
		public JactElementContext jactElement(int i) {
			return getRuleContext(JactElementContext.class,i);
		}
		public List<ElementContentContext> elementContent() {
			return getRuleContexts(ElementContentContext.class);
		}
		public ElementContentContext elementContent(int i) {
			return getRuleContext(ElementContentContext.class,i);
		}
		public JactElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_jactElement; }
	}

	public final JactElementContext jactElement() throws RecognitionException {
		JactElementContext _localctx = new JactElementContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_jactElement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
			match(T__7);
			setState(86);
			jactElementName();
			setState(87);
			match(T__8);
			setState(92);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 137454682368L) != 0)) {
				{
				setState(90);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__7:
					{
					setState(88);
					jactElement();
					}
					break;
				case T__19:
				case T__20:
				case T__21:
				case T__22:
				case ID:
					{
					setState(89);
					elementContent();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(94);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(95);
			match(T__9);
			setState(96);
			jactElementName();
			setState(97);
			match(T__8);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class JactElementNameContext extends ParserRuleContext {
		public JactElementNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_jactElementName; }
	}

	public final JactElementNameContext jactElementName() throws RecognitionException {
		JactElementNameContext _localctx = new JactElementNameContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_jactElementName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(99);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1046528L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ElementContentContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(JactParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(JactParser.ID, i);
		}
		public ElementContentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementContent; }
	}

	public final ElementContentContext elementContent() throws RecognitionException {
		ElementContentContext _localctx = new ElementContentContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_elementContent);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(102); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(101);
					_la = _input.LA(1);
					if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 137454682112L) != 0)) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(104); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariableDeclarationContext extends ParserRuleContext {
		public VariableMemoryTypeDeclarationContext variableMemoryTypeDeclaration() {
			return getRuleContext(VariableMemoryTypeDeclarationContext.class,0);
		}
		public TerminalNode ID() { return getToken(JactParser.ID, 0); }
		public BuiltInTypeContext builtInType() {
			return getRuleContext(BuiltInTypeContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public VariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaration; }
	}

	public final VariableDeclarationContext variableDeclaration() throws RecognitionException {
		VariableDeclarationContext _localctx = new VariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(106);
			variableMemoryTypeDeclaration();
			setState(107);
			match(T__19);
			setState(108);
			match(ID);
			setState(109);
			match(T__23);
			setState(110);
			builtInType();
			setState(111);
			match(T__24);
			setState(112);
			expression();
			setState(113);
			match(T__0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariableMemoryTypeDeclarationContext extends ParserRuleContext {
		public VariableMemoryTypeDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableMemoryTypeDeclaration; }
	}

	public final VariableMemoryTypeDeclarationContext variableMemoryTypeDeclaration() throws RecognitionException {
		VariableMemoryTypeDeclarationContext _localctx = new VariableMemoryTypeDeclarationContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_variableMemoryTypeDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(115);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 469762048L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionContext extends ParserRuleContext {
		public TerminalNode INT() { return getToken(JactParser.INT, 0); }
		public TerminalNode FLOAT() { return getToken(JactParser.FLOAT, 0); }
		public TerminalNode BOOL() { return getToken(JactParser.BOOL, 0); }
		public TerminalNode STRING() { return getToken(JactParser.STRING, 0); }
		public TerminalNode ID() { return getToken(JactParser.ID, 0); }
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 4260607557632L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionDeclarationContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(JactParser.ID, 0); }
		public ParameterListContext parameterList() {
			return getRuleContext(ParameterListContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public FunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDeclaration; }
	}

	public final FunctionDeclarationContext functionDeclaration() throws RecognitionException {
		FunctionDeclarationContext _localctx = new FunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_functionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
			match(T__28);
			setState(120);
			match(ID);
			setState(121);
			match(T__29);
			setState(122);
			parameterList();
			setState(123);
			match(T__30);
			setState(127);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4261614190708L) != 0)) {
				{
				{
				setState(124);
				statement();
				}
				}
				setState(129);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(130);
			match(T__31);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionCallContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(JactParser.ID, 0); }
		public UntypedParameterListContext untypedParameterList() {
			return getRuleContext(UntypedParameterListContext.class,0);
		}
		public FunctionCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCall; }
	}

	public final FunctionCallContext functionCall() throws RecognitionException {
		FunctionCallContext _localctx = new FunctionCallContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_functionCall);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(132);
			match(ID);
			setState(133);
			match(T__29);
			setState(134);
			untypedParameterList();
			setState(135);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParameterListContext extends ParserRuleContext {
		public List<ParameterContext> parameter() {
			return getRuleContexts(ParameterContext.class);
		}
		public ParameterContext parameter(int i) {
			return getRuleContext(ParameterContext.class,i);
		}
		public ParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterList; }
	}

	public final ParameterListContext parameterList() throws RecognitionException {
		ParameterListContext _localctx = new ParameterListContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_parameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(145);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(137);
				parameter();
				setState(142);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__32) {
					{
					{
					setState(138);
					match(T__32);
					setState(139);
					parameter();
					}
					}
					setState(144);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UntypedParameterListContext extends ParserRuleContext {
		public List<PassedParameterContext> passedParameter() {
			return getRuleContexts(PassedParameterContext.class);
		}
		public PassedParameterContext passedParameter(int i) {
			return getRuleContext(PassedParameterContext.class,i);
		}
		public UntypedParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_untypedParameterList; }
	}

	public final UntypedParameterListContext untypedParameterList() throws RecognitionException {
		UntypedParameterListContext _localctx = new UntypedParameterListContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_untypedParameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(155);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4260607557632L) != 0)) {
				{
				setState(147);
				passedParameter();
				setState(152);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__32) {
					{
					{
					setState(148);
					match(T__32);
					setState(149);
					passedParameter();
					}
					}
					setState(154);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PassedParameterContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode ID() { return getToken(JactParser.ID, 0); }
		public PassedParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_passedParameter; }
	}

	public final PassedParameterContext passedParameter() throws RecognitionException {
		PassedParameterContext _localctx = new PassedParameterContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_passedParameter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(159);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				{
				setState(157);
				expression();
				}
				break;
			case 2:
				{
				setState(158);
				match(ID);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParameterContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(JactParser.ID, 0); }
		public BuiltInTypeContext builtInType() {
			return getRuleContext(BuiltInTypeContext.class,0);
		}
		public ParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameter; }
	}

	public final ParameterContext parameter() throws RecognitionException {
		ParameterContext _localctx = new ParameterContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_parameter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(161);
			match(ID);
			setState(162);
			match(T__23);
			setState(163);
			builtInType();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CalculationStatementContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode OPERATOR() { return getToken(JactParser.OPERATOR, 0); }
		public CalculationStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calculationStatement; }
	}

	public final CalculationStatementContext calculationStatement() throws RecognitionException {
		CalculationStatementContext _localctx = new CalculationStatementContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_calculationStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(165);
			expression();
			setState(166);
			match(T__19);
			setState(167);
			match(OPERATOR);
			setState(168);
			match(T__19);
			setState(169);
			expression();
			setState(170);
			match(T__0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BuiltInTypeContext extends ParserRuleContext {
		public BuiltInTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_builtInType; }
	}

	public final BuiltInTypeContext builtInType() throws RecognitionException {
		BuiltInTypeContext _localctx = new BuiltInTypeContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_builtInType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(172);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 120259084288L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001+\u00af\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0001\u0000\u0005\u0000*\b\u0000\n\u0000\f\u0000"+
		"-\t\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u00018\b\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002>\b\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0003\u0003G\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0005\u0001\u0005\u0005\u0005O\b\u0005\n\u0005\f\u0005"+
		"R\t\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0005\u0006[\b\u0006\n\u0006\f\u0006^\t\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0004\bg\b\b\u000b\b\f\bh\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0005\f~\b\f\n\f\f\f"+
		"\u0081\t\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0005\u000e\u008d\b\u000e\n\u000e\f\u000e"+
		"\u0090\t\u000e\u0003\u000e\u0092\b\u000e\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0005\u000f\u0097\b\u000f\n\u000f\f\u000f\u009a\t\u000f\u0003\u000f"+
		"\u009c\b\u000f\u0001\u0010\u0001\u0010\u0003\u0010\u00a0\b\u0010\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0000\u0000\u0014\u0000\u0002\u0004\u0006\b\n\f\u000e"+
		"\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&\u0000\u0005\u0001"+
		"\u0000\u000b\u0013\u0002\u0000\u0014\u0017%%\u0001\u0000\u001a\u001c\u0001"+
		"\u0000%)\u0001\u0000\"$\u00af\u0000+\u0001\u0000\u0000\u0000\u00027\u0001"+
		"\u0000\u0000\u0000\u00049\u0001\u0000\u0000\u0000\u0006F\u0001\u0000\u0000"+
		"\u0000\bH\u0001\u0000\u0000\u0000\nL\u0001\u0000\u0000\u0000\fU\u0001"+
		"\u0000\u0000\u0000\u000ec\u0001\u0000\u0000\u0000\u0010f\u0001\u0000\u0000"+
		"\u0000\u0012j\u0001\u0000\u0000\u0000\u0014s\u0001\u0000\u0000\u0000\u0016"+
		"u\u0001\u0000\u0000\u0000\u0018w\u0001\u0000\u0000\u0000\u001a\u0084\u0001"+
		"\u0000\u0000\u0000\u001c\u0091\u0001\u0000\u0000\u0000\u001e\u009b\u0001"+
		"\u0000\u0000\u0000 \u009f\u0001\u0000\u0000\u0000\"\u00a1\u0001\u0000"+
		"\u0000\u0000$\u00a5\u0001\u0000\u0000\u0000&\u00ac\u0001\u0000\u0000\u0000"+
		"(*\u0003\u0002\u0001\u0000)(\u0001\u0000\u0000\u0000*-\u0001\u0000\u0000"+
		"\u0000+)\u0001\u0000\u0000\u0000+,\u0001\u0000\u0000\u0000,\u0001\u0001"+
		"\u0000\u0000\u0000-+\u0001\u0000\u0000\u0000./\u0005%\u0000\u0000/8\u0005"+
		"\u0001\u0000\u000008\u0003\u0004\u0002\u000018\u0003\u0012\t\u000028\u0003"+
		"\u0018\f\u000038\u0003\u0006\u0003\u000048\u0003\u001a\r\u000058\u0003"+
		"$\u0012\u000068\u0003\b\u0004\u00007.\u0001\u0000\u0000\u000070\u0001"+
		"\u0000\u0000\u000071\u0001\u0000\u0000\u000072\u0001\u0000\u0000\u0000"+
		"73\u0001\u0000\u0000\u000074\u0001\u0000\u0000\u000075\u0001\u0000\u0000"+
		"\u000076\u0001\u0000\u0000\u00008\u0003\u0001\u0000\u0000\u00009=\u0005"+
		"\u0002\u0000\u0000:>\u0003\u001a\r\u0000;>\u0003$\u0012\u0000<>\u0003"+
		"\u0016\u000b\u0000=:\u0001\u0000\u0000\u0000=;\u0001\u0000\u0000\u0000"+
		"=<\u0001\u0000\u0000\u0000>?\u0001\u0000\u0000\u0000?@\u0005\u0003\u0000"+
		"\u0000@\u0005\u0001\u0000\u0000\u0000AB\u0005\u0004\u0000\u0000BG\u0003"+
		"\u0002\u0001\u0000CD\u0003\n\u0005\u0000DE\u0005\u0001\u0000\u0000EG\u0001"+
		"\u0000\u0000\u0000FA\u0001\u0000\u0000\u0000FC\u0001\u0000\u0000\u0000"+
		"G\u0007\u0001\u0000\u0000\u0000HI\u0005\u0005\u0000\u0000IJ\u0003\u0002"+
		"\u0001\u0000JK\u0005\u0001\u0000\u0000K\t\u0001\u0000\u0000\u0000LP\u0005"+
		"\u0006\u0000\u0000MO\u0003\f\u0006\u0000NM\u0001\u0000\u0000\u0000OR\u0001"+
		"\u0000\u0000\u0000PN\u0001\u0000\u0000\u0000PQ\u0001\u0000\u0000\u0000"+
		"QS\u0001\u0000\u0000\u0000RP\u0001\u0000\u0000\u0000ST\u0005\u0007\u0000"+
		"\u0000T\u000b\u0001\u0000\u0000\u0000UV\u0005\b\u0000\u0000VW\u0003\u000e"+
		"\u0007\u0000W\\\u0005\t\u0000\u0000X[\u0003\f\u0006\u0000Y[\u0003\u0010"+
		"\b\u0000ZX\u0001\u0000\u0000\u0000ZY\u0001\u0000\u0000\u0000[^\u0001\u0000"+
		"\u0000\u0000\\Z\u0001\u0000\u0000\u0000\\]\u0001\u0000\u0000\u0000]_\u0001"+
		"\u0000\u0000\u0000^\\\u0001\u0000\u0000\u0000_`\u0005\n\u0000\u0000`a"+
		"\u0003\u000e\u0007\u0000ab\u0005\t\u0000\u0000b\r\u0001\u0000\u0000\u0000"+
		"cd\u0007\u0000\u0000\u0000d\u000f\u0001\u0000\u0000\u0000eg\u0007\u0001"+
		"\u0000\u0000fe\u0001\u0000\u0000\u0000gh\u0001\u0000\u0000\u0000hf\u0001"+
		"\u0000\u0000\u0000hi\u0001\u0000\u0000\u0000i\u0011\u0001\u0000\u0000"+
		"\u0000jk\u0003\u0014\n\u0000kl\u0005\u0014\u0000\u0000lm\u0005%\u0000"+
		"\u0000mn\u0005\u0018\u0000\u0000no\u0003&\u0013\u0000op\u0005\u0019\u0000"+
		"\u0000pq\u0003\u0016\u000b\u0000qr\u0005\u0001\u0000\u0000r\u0013\u0001"+
		"\u0000\u0000\u0000st\u0007\u0002\u0000\u0000t\u0015\u0001\u0000\u0000"+
		"\u0000uv\u0007\u0003\u0000\u0000v\u0017\u0001\u0000\u0000\u0000wx\u0005"+
		"\u001d\u0000\u0000xy\u0005%\u0000\u0000yz\u0005\u001e\u0000\u0000z{\u0003"+
		"\u001c\u000e\u0000{\u007f\u0005\u001f\u0000\u0000|~\u0003\u0002\u0001"+
		"\u0000}|\u0001\u0000\u0000\u0000~\u0081\u0001\u0000\u0000\u0000\u007f"+
		"}\u0001\u0000\u0000\u0000\u007f\u0080\u0001\u0000\u0000\u0000\u0080\u0082"+
		"\u0001\u0000\u0000\u0000\u0081\u007f\u0001\u0000\u0000\u0000\u0082\u0083"+
		"\u0005 \u0000\u0000\u0083\u0019\u0001\u0000\u0000\u0000\u0084\u0085\u0005"+
		"%\u0000\u0000\u0085\u0086\u0005\u001e\u0000\u0000\u0086\u0087\u0003\u001e"+
		"\u000f\u0000\u0087\u0088\u0005\u0003\u0000\u0000\u0088\u001b\u0001\u0000"+
		"\u0000\u0000\u0089\u008e\u0003\"\u0011\u0000\u008a\u008b\u0005!\u0000"+
		"\u0000\u008b\u008d\u0003\"\u0011\u0000\u008c\u008a\u0001\u0000\u0000\u0000"+
		"\u008d\u0090\u0001\u0000\u0000\u0000\u008e\u008c\u0001\u0000\u0000\u0000"+
		"\u008e\u008f\u0001\u0000\u0000\u0000\u008f\u0092\u0001\u0000\u0000\u0000"+
		"\u0090\u008e\u0001\u0000\u0000\u0000\u0091\u0089\u0001\u0000\u0000\u0000"+
		"\u0091\u0092\u0001\u0000\u0000\u0000\u0092\u001d\u0001\u0000\u0000\u0000"+
		"\u0093\u0098\u0003 \u0010\u0000\u0094\u0095\u0005!\u0000\u0000\u0095\u0097"+
		"\u0003 \u0010\u0000\u0096\u0094\u0001\u0000\u0000\u0000\u0097\u009a\u0001"+
		"\u0000\u0000\u0000\u0098\u0096\u0001\u0000\u0000\u0000\u0098\u0099\u0001"+
		"\u0000\u0000\u0000\u0099\u009c\u0001\u0000\u0000\u0000\u009a\u0098\u0001"+
		"\u0000\u0000\u0000\u009b\u0093\u0001\u0000\u0000\u0000\u009b\u009c\u0001"+
		"\u0000\u0000\u0000\u009c\u001f\u0001\u0000\u0000\u0000\u009d\u00a0\u0003"+
		"\u0016\u000b\u0000\u009e\u00a0\u0005%\u0000\u0000\u009f\u009d\u0001\u0000"+
		"\u0000\u0000\u009f\u009e\u0001\u0000\u0000\u0000\u00a0!\u0001\u0000\u0000"+
		"\u0000\u00a1\u00a2\u0005%\u0000\u0000\u00a2\u00a3\u0005\u0018\u0000\u0000"+
		"\u00a3\u00a4\u0003&\u0013\u0000\u00a4#\u0001\u0000\u0000\u0000\u00a5\u00a6"+
		"\u0003\u0016\u000b\u0000\u00a6\u00a7\u0005\u0014\u0000\u0000\u00a7\u00a8"+
		"\u0005*\u0000\u0000\u00a8\u00a9\u0005\u0014\u0000\u0000\u00a9\u00aa\u0003"+
		"\u0016\u000b\u0000\u00aa\u00ab\u0005\u0001\u0000\u0000\u00ab%\u0001\u0000"+
		"\u0000\u0000\u00ac\u00ad\u0007\u0004\u0000\u0000\u00ad\'\u0001\u0000\u0000"+
		"\u0000\u000e+7=FPZ\\h\u007f\u008e\u0091\u0098\u009b\u009f";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}