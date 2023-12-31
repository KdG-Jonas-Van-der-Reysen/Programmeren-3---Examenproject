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
		T__24=25, T__25=26, T__26=27, T__27=28, ID=29, INT=30, FLOAT=31, BOOL=32, 
		STRING=33, OPERATOR=34, WS=35;
	public static final int
		RULE_program = 0, RULE_statement = 1, RULE_printStatement = 2, RULE_returnStatement = 3, 
		RULE_exportStatement = 4, RULE_jactCode = 5, RULE_jactElement = 6, RULE_jactElementName = 7, 
		RULE_variableDeclaration = 8, RULE_variableMemoryTypeDeclaration = 9, 
		RULE_expression = 10, RULE_functionDeclaration = 11, RULE_functionCall = 12, 
		RULE_parameterList = 13, RULE_untypedParameterList = 14, RULE_parameter = 15, 
		RULE_calculationStatement = 16, RULE_builtInType = 17;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "statement", "printStatement", "returnStatement", "exportStatement", 
			"jactCode", "jactElement", "jactElementName", "variableDeclaration", 
			"variableMemoryTypeDeclaration", "expression", "functionDeclaration", 
			"functionCall", "parameterList", "untypedParameterList", "parameter", 
			"calculationStatement", "builtInType"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "';'", "'lotzien'", "'('", "')'", "'kbentkwijt '", "'exporteer '", 
			"'['", "']'", "'<'", "'>'", "'\\/>'", "'div'", "'h1'", "'h2'", "'h3'", 
			"' '", "':'", "' = '", "'tzitvast'", "'tisvrij'", "'tisoud'", "'doenekeeriet '", 
			"') {'", "'}'", "','", "'nummerke'", "'jaofnee'", "'tekstje'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, "ID", "INT", "FLOAT", "BOOL", "STRING", 
			"OPERATOR", "WS"
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
			setState(39);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 16650862820L) != 0)) {
				{
				{
				setState(36);
				statement();
				}
				}
				setState(41);
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
			setState(51);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(42);
				match(ID);
				setState(43);
				match(T__0);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(44);
				printStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(45);
				variableDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(46);
				functionDeclaration();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(47);
				returnStatement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(48);
				functionCall();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(49);
				calculationStatement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(50);
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
			setState(53);
			match(T__1);
			setState(54);
			match(T__2);
			setState(58);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				{
				setState(55);
				functionCall();
				}
				break;
			case 2:
				{
				setState(56);
				calculationStatement();
				}
				break;
			case 3:
				{
				setState(57);
				expression();
				}
				break;
			}
			setState(60);
			match(T__3);
			setState(61);
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
			setState(68);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__4:
				enterOuterAlt(_localctx, 1);
				{
				setState(63);
				match(T__4);
				setState(64);
				statement();
				}
				break;
			case T__6:
				enterOuterAlt(_localctx, 2);
				{
				setState(65);
				jactCode();
				setState(66);
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
			setState(70);
			match(T__5);
			setState(71);
			statement();
			setState(72);
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
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(74);
			match(T__6);
			setState(78);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(75);
					jactElement();
					}
					} 
				}
				setState(80);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			}
			setState(81);
			match(T__7);
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
		public JactElementNameContext jactElementName() {
			return getRuleContext(JactElementNameContext.class,0);
		}
		public List<JactElementContext> jactElement() {
			return getRuleContexts(JactElementContext.class);
		}
		public JactElementContext jactElement(int i) {
			return getRuleContext(JactElementContext.class,i);
		}
		public JactElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_jactElement; }
	}

	public final JactElementContext jactElement() throws RecognitionException {
		JactElementContext _localctx = new JactElementContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_jactElement);
		try {
			int _alt;
			setState(102);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(83);
				match(T__8);
				setState(84);
				jactElementName();
				setState(85);
				match(T__9);
				setState(89);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(86);
						jactElement();
						}
						} 
					}
					setState(91);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(95);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
				while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1+1 ) {
						{
						{
						setState(92);
						matchWildcard();
						}
						} 
					}
					setState(97);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
				}
				setState(98);
				match(T__8);
				setState(99);
				jactElementName();
				setState(100);
				match(T__10);
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
			setState(104);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 61440L) != 0)) ) {
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
		enterRule(_localctx, 16, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(106);
			variableMemoryTypeDeclaration();
			setState(107);
			match(T__15);
			setState(108);
			match(ID);
			setState(109);
			match(T__16);
			setState(110);
			builtInType();
			setState(111);
			match(T__17);
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
		enterRule(_localctx, 18, RULE_variableMemoryTypeDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(115);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 3670016L) != 0)) ) {
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
		enterRule(_localctx, 20, RULE_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 16642998272L) != 0)) ) {
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
		enterRule(_localctx, 22, RULE_functionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
			match(T__21);
			setState(120);
			match(ID);
			setState(121);
			match(T__2);
			setState(122);
			parameterList();
			setState(123);
			match(T__22);
			setState(127);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 16650862820L) != 0)) {
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
			match(T__23);
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
		enterRule(_localctx, 24, RULE_functionCall);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(132);
			match(ID);
			setState(133);
			match(T__2);
			setState(134);
			untypedParameterList();
			setState(135);
			match(T__3);
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
		enterRule(_localctx, 26, RULE_parameterList);
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
				while (_la==T__24) {
					{
					{
					setState(138);
					match(T__24);
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
		public List<TerminalNode> ID() { return getTokens(JactParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(JactParser.ID, i);
		}
		public UntypedParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_untypedParameterList; }
	}

	public final UntypedParameterListContext untypedParameterList() throws RecognitionException {
		UntypedParameterListContext _localctx = new UntypedParameterListContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_untypedParameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(155);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(147);
				match(ID);
				setState(152);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__24) {
					{
					{
					setState(148);
					match(T__24);
					setState(149);
					match(ID);
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
		enterRule(_localctx, 30, RULE_parameter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			match(ID);
			setState(158);
			match(T__16);
			setState(159);
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
		enterRule(_localctx, 32, RULE_calculationStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(161);
			expression();
			setState(162);
			match(T__15);
			setState(163);
			match(OPERATOR);
			setState(164);
			match(T__15);
			setState(165);
			expression();
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
		enterRule(_localctx, 34, RULE_builtInType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(167);
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

	public static final String _serializedATN =
		"\u0004\u0001#\u00aa\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0001\u0000\u0005\u0000"+
		"&\b\u0000\n\u0000\f\u0000)\t\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0003\u00014\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0003\u0002;\b\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003"+
		"E\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005"+
		"\u0001\u0005\u0005\u0005M\b\u0005\n\u0005\f\u0005P\t\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0005\u0006"+
		"X\b\u0006\n\u0006\f\u0006[\t\u0006\u0001\u0006\u0005\u0006^\b\u0006\n"+
		"\u0006\f\u0006a\t\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0003\u0006g\b\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0005\u000b~\b\u000b\n\u000b\f\u000b\u0081\t\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001"+
		"\r\u0001\r\u0005\r\u008d\b\r\n\r\f\r\u0090\t\r\u0003\r\u0092\b\r\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0005\u000e\u0097\b\u000e\n\u000e\f\u000e"+
		"\u009a\t\u000e\u0003\u000e\u009c\b\u000e\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001_\u0000\u0012"+
		"\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a"+
		"\u001c\u001e \"\u0000\u0004\u0001\u0000\f\u000f\u0001\u0000\u0013\u0015"+
		"\u0001\u0000\u001d!\u0001\u0000\u001a\u001c\u00ab\u0000\'\u0001\u0000"+
		"\u0000\u0000\u00023\u0001\u0000\u0000\u0000\u00045\u0001\u0000\u0000\u0000"+
		"\u0006D\u0001\u0000\u0000\u0000\bF\u0001\u0000\u0000\u0000\nJ\u0001\u0000"+
		"\u0000\u0000\ff\u0001\u0000\u0000\u0000\u000eh\u0001\u0000\u0000\u0000"+
		"\u0010j\u0001\u0000\u0000\u0000\u0012s\u0001\u0000\u0000\u0000\u0014u"+
		"\u0001\u0000\u0000\u0000\u0016w\u0001\u0000\u0000\u0000\u0018\u0084\u0001"+
		"\u0000\u0000\u0000\u001a\u0091\u0001\u0000\u0000\u0000\u001c\u009b\u0001"+
		"\u0000\u0000\u0000\u001e\u009d\u0001\u0000\u0000\u0000 \u00a1\u0001\u0000"+
		"\u0000\u0000\"\u00a7\u0001\u0000\u0000\u0000$&\u0003\u0002\u0001\u0000"+
		"%$\u0001\u0000\u0000\u0000&)\u0001\u0000\u0000\u0000\'%\u0001\u0000\u0000"+
		"\u0000\'(\u0001\u0000\u0000\u0000(\u0001\u0001\u0000\u0000\u0000)\'\u0001"+
		"\u0000\u0000\u0000*+\u0005\u001d\u0000\u0000+4\u0005\u0001\u0000\u0000"+
		",4\u0003\u0004\u0002\u0000-4\u0003\u0010\b\u0000.4\u0003\u0016\u000b\u0000"+
		"/4\u0003\u0006\u0003\u000004\u0003\u0018\f\u000014\u0003 \u0010\u0000"+
		"24\u0003\b\u0004\u00003*\u0001\u0000\u0000\u00003,\u0001\u0000\u0000\u0000"+
		"3-\u0001\u0000\u0000\u00003.\u0001\u0000\u0000\u00003/\u0001\u0000\u0000"+
		"\u000030\u0001\u0000\u0000\u000031\u0001\u0000\u0000\u000032\u0001\u0000"+
		"\u0000\u00004\u0003\u0001\u0000\u0000\u000056\u0005\u0002\u0000\u0000"+
		"6:\u0005\u0003\u0000\u00007;\u0003\u0018\f\u00008;\u0003 \u0010\u0000"+
		"9;\u0003\u0014\n\u0000:7\u0001\u0000\u0000\u0000:8\u0001\u0000\u0000\u0000"+
		":9\u0001\u0000\u0000\u0000;<\u0001\u0000\u0000\u0000<=\u0005\u0004\u0000"+
		"\u0000=>\u0005\u0001\u0000\u0000>\u0005\u0001\u0000\u0000\u0000?@\u0005"+
		"\u0005\u0000\u0000@E\u0003\u0002\u0001\u0000AB\u0003\n\u0005\u0000BC\u0005"+
		"\u0001\u0000\u0000CE\u0001\u0000\u0000\u0000D?\u0001\u0000\u0000\u0000"+
		"DA\u0001\u0000\u0000\u0000E\u0007\u0001\u0000\u0000\u0000FG\u0005\u0006"+
		"\u0000\u0000GH\u0003\u0002\u0001\u0000HI\u0005\u0001\u0000\u0000I\t\u0001"+
		"\u0000\u0000\u0000JN\u0005\u0007\u0000\u0000KM\u0003\f\u0006\u0000LK\u0001"+
		"\u0000\u0000\u0000MP\u0001\u0000\u0000\u0000NL\u0001\u0000\u0000\u0000"+
		"NO\u0001\u0000\u0000\u0000OQ\u0001\u0000\u0000\u0000PN\u0001\u0000\u0000"+
		"\u0000QR\u0005\b\u0000\u0000R\u000b\u0001\u0000\u0000\u0000ST\u0005\t"+
		"\u0000\u0000TU\u0003\u000e\u0007\u0000UY\u0005\n\u0000\u0000VX\u0003\f"+
		"\u0006\u0000WV\u0001\u0000\u0000\u0000X[\u0001\u0000\u0000\u0000YW\u0001"+
		"\u0000\u0000\u0000YZ\u0001\u0000\u0000\u0000Zg\u0001\u0000\u0000\u0000"+
		"[Y\u0001\u0000\u0000\u0000\\^\t\u0000\u0000\u0000]\\\u0001\u0000\u0000"+
		"\u0000^a\u0001\u0000\u0000\u0000_`\u0001\u0000\u0000\u0000_]\u0001\u0000"+
		"\u0000\u0000`b\u0001\u0000\u0000\u0000a_\u0001\u0000\u0000\u0000bc\u0005"+
		"\t\u0000\u0000cd\u0003\u000e\u0007\u0000de\u0005\u000b\u0000\u0000eg\u0001"+
		"\u0000\u0000\u0000fS\u0001\u0000\u0000\u0000f_\u0001\u0000\u0000\u0000"+
		"g\r\u0001\u0000\u0000\u0000hi\u0007\u0000\u0000\u0000i\u000f\u0001\u0000"+
		"\u0000\u0000jk\u0003\u0012\t\u0000kl\u0005\u0010\u0000\u0000lm\u0005\u001d"+
		"\u0000\u0000mn\u0005\u0011\u0000\u0000no\u0003\"\u0011\u0000op\u0005\u0012"+
		"\u0000\u0000pq\u0003\u0014\n\u0000qr\u0005\u0001\u0000\u0000r\u0011\u0001"+
		"\u0000\u0000\u0000st\u0007\u0001\u0000\u0000t\u0013\u0001\u0000\u0000"+
		"\u0000uv\u0007\u0002\u0000\u0000v\u0015\u0001\u0000\u0000\u0000wx\u0005"+
		"\u0016\u0000\u0000xy\u0005\u001d\u0000\u0000yz\u0005\u0003\u0000\u0000"+
		"z{\u0003\u001a\r\u0000{\u007f\u0005\u0017\u0000\u0000|~\u0003\u0002\u0001"+
		"\u0000}|\u0001\u0000\u0000\u0000~\u0081\u0001\u0000\u0000\u0000\u007f"+
		"}\u0001\u0000\u0000\u0000\u007f\u0080\u0001\u0000\u0000\u0000\u0080\u0082"+
		"\u0001\u0000\u0000\u0000\u0081\u007f\u0001\u0000\u0000\u0000\u0082\u0083"+
		"\u0005\u0018\u0000\u0000\u0083\u0017\u0001\u0000\u0000\u0000\u0084\u0085"+
		"\u0005\u001d\u0000\u0000\u0085\u0086\u0005\u0003\u0000\u0000\u0086\u0087"+
		"\u0003\u001c\u000e\u0000\u0087\u0088\u0005\u0004\u0000\u0000\u0088\u0019"+
		"\u0001\u0000\u0000\u0000\u0089\u008e\u0003\u001e\u000f\u0000\u008a\u008b"+
		"\u0005\u0019\u0000\u0000\u008b\u008d\u0003\u001e\u000f\u0000\u008c\u008a"+
		"\u0001\u0000\u0000\u0000\u008d\u0090\u0001\u0000\u0000\u0000\u008e\u008c"+
		"\u0001\u0000\u0000\u0000\u008e\u008f\u0001\u0000\u0000\u0000\u008f\u0092"+
		"\u0001\u0000\u0000\u0000\u0090\u008e\u0001\u0000\u0000\u0000\u0091\u0089"+
		"\u0001\u0000\u0000\u0000\u0091\u0092\u0001\u0000\u0000\u0000\u0092\u001b"+
		"\u0001\u0000\u0000\u0000\u0093\u0098\u0005\u001d\u0000\u0000\u0094\u0095"+
		"\u0005\u0019\u0000\u0000\u0095\u0097\u0005\u001d\u0000\u0000\u0096\u0094"+
		"\u0001\u0000\u0000\u0000\u0097\u009a\u0001\u0000\u0000\u0000\u0098\u0096"+
		"\u0001\u0000\u0000\u0000\u0098\u0099\u0001\u0000\u0000\u0000\u0099\u009c"+
		"\u0001\u0000\u0000\u0000\u009a\u0098\u0001\u0000\u0000\u0000\u009b\u0093"+
		"\u0001\u0000\u0000\u0000\u009b\u009c\u0001\u0000\u0000\u0000\u009c\u001d"+
		"\u0001\u0000\u0000\u0000\u009d\u009e\u0005\u001d\u0000\u0000\u009e\u009f"+
		"\u0005\u0011\u0000\u0000\u009f\u00a0\u0003\"\u0011\u0000\u00a0\u001f\u0001"+
		"\u0000\u0000\u0000\u00a1\u00a2\u0003\u0014\n\u0000\u00a2\u00a3\u0005\u0010"+
		"\u0000\u0000\u00a3\u00a4\u0005\"\u0000\u0000\u00a4\u00a5\u0005\u0010\u0000"+
		"\u0000\u00a5\u00a6\u0003\u0014\n\u0000\u00a6!\u0001\u0000\u0000\u0000"+
		"\u00a7\u00a8\u0007\u0003\u0000\u0000\u00a8#\u0001\u0000\u0000\u0000\r"+
		"\'3:DNY_f\u007f\u008e\u0091\u0098\u009b";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}