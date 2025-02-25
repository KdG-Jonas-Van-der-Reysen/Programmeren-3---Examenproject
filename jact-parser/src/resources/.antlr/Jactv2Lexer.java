// Generated from c://1_LOKALE_PROJECTEN//SCHOOL//2023-2024//Programmeren 3//jonas.vanderreysen//jact-parser//src//resources//jact.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class Jactv2Lexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, ID=17, 
		INT=18, FLOAT=19, BOOL=20, STRING=21, VOID=22;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "ID", "INT", 
			"FLOAT", "BOOL", "STRING", "VOID"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "';'", "' '", "':'", "' = '", "'const'", "'let'", "'var'", "'function'", 
			"'('", "') {'", "'}'", "','", "'int'", "'float'", "'bool'", "'string'", 
			null, null, null, null, null, "'void'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, "ID", "INT", "FLOAT", "BOOL", "STRING", 
			"VOID"
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


	public Jactv2Lexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "jact.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0016\u009c\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001"+
		"\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u0010\u0004\u0010p\b\u0010\u000b\u0010\f\u0010q\u0001"+
		"\u0011\u0004\u0011u\b\u0011\u000b\u0011\f\u0011v\u0001\u0012\u0004\u0012"+
		"z\b\u0012\u000b\u0012\f\u0012{\u0001\u0012\u0001\u0012\u0004\u0012\u0080"+
		"\b\u0012\u000b\u0012\f\u0012\u0081\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0003\u0013\u008d\b\u0013\u0001\u0014\u0001\u0014\u0005\u0014\u0091\b"+
		"\u0014\n\u0014\f\u0014\u0094\t\u0014\u0001\u0014\u0001\u0014\u0001\u0015"+
		"\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0092\u0000\u0016"+
		"\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r"+
		"\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e"+
		"\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0015+\u0016\u0001"+
		"\u0000\u0002\u0002\u0000AZaz\u0001\u000009\u00a1\u0000\u0001\u0001\u0000"+
		"\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000"+
		"\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000"+
		"\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000"+
		"\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000"+
		"\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000"+
		"\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000"+
		"\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000"+
		"\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000"+
		"#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'\u0001"+
		"\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000\u0000+\u0001\u0000\u0000"+
		"\u0000\u0001-\u0001\u0000\u0000\u0000\u0003/\u0001\u0000\u0000\u0000\u0005"+
		"1\u0001\u0000\u0000\u0000\u00073\u0001\u0000\u0000\u0000\t7\u0001\u0000"+
		"\u0000\u0000\u000b=\u0001\u0000\u0000\u0000\rA\u0001\u0000\u0000\u0000"+
		"\u000fE\u0001\u0000\u0000\u0000\u0011N\u0001\u0000\u0000\u0000\u0013P"+
		"\u0001\u0000\u0000\u0000\u0015T\u0001\u0000\u0000\u0000\u0017V\u0001\u0000"+
		"\u0000\u0000\u0019X\u0001\u0000\u0000\u0000\u001b\\\u0001\u0000\u0000"+
		"\u0000\u001db\u0001\u0000\u0000\u0000\u001fg\u0001\u0000\u0000\u0000!"+
		"o\u0001\u0000\u0000\u0000#t\u0001\u0000\u0000\u0000%y\u0001\u0000\u0000"+
		"\u0000\'\u008c\u0001\u0000\u0000\u0000)\u008e\u0001\u0000\u0000\u0000"+
		"+\u0097\u0001\u0000\u0000\u0000-.\u0005;\u0000\u0000.\u0002\u0001\u0000"+
		"\u0000\u0000/0\u0005 \u0000\u00000\u0004\u0001\u0000\u0000\u000012\u0005"+
		":\u0000\u00002\u0006\u0001\u0000\u0000\u000034\u0005 \u0000\u000045\u0005"+
		"=\u0000\u000056\u0005 \u0000\u00006\b\u0001\u0000\u0000\u000078\u0005"+
		"c\u0000\u000089\u0005o\u0000\u00009:\u0005n\u0000\u0000:;\u0005s\u0000"+
		"\u0000;<\u0005t\u0000\u0000<\n\u0001\u0000\u0000\u0000=>\u0005l\u0000"+
		"\u0000>?\u0005e\u0000\u0000?@\u0005t\u0000\u0000@\f\u0001\u0000\u0000"+
		"\u0000AB\u0005v\u0000\u0000BC\u0005a\u0000\u0000CD\u0005r\u0000\u0000"+
		"D\u000e\u0001\u0000\u0000\u0000EF\u0005f\u0000\u0000FG\u0005u\u0000\u0000"+
		"GH\u0005n\u0000\u0000HI\u0005c\u0000\u0000IJ\u0005t\u0000\u0000JK\u0005"+
		"i\u0000\u0000KL\u0005o\u0000\u0000LM\u0005n\u0000\u0000M\u0010\u0001\u0000"+
		"\u0000\u0000NO\u0005(\u0000\u0000O\u0012\u0001\u0000\u0000\u0000PQ\u0005"+
		")\u0000\u0000QR\u0005 \u0000\u0000RS\u0005{\u0000\u0000S\u0014\u0001\u0000"+
		"\u0000\u0000TU\u0005}\u0000\u0000U\u0016\u0001\u0000\u0000\u0000VW\u0005"+
		",\u0000\u0000W\u0018\u0001\u0000\u0000\u0000XY\u0005i\u0000\u0000YZ\u0005"+
		"n\u0000\u0000Z[\u0005t\u0000\u0000[\u001a\u0001\u0000\u0000\u0000\\]\u0005"+
		"f\u0000\u0000]^\u0005l\u0000\u0000^_\u0005o\u0000\u0000_`\u0005a\u0000"+
		"\u0000`a\u0005t\u0000\u0000a\u001c\u0001\u0000\u0000\u0000bc\u0005b\u0000"+
		"\u0000cd\u0005o\u0000\u0000de\u0005o\u0000\u0000ef\u0005l\u0000\u0000"+
		"f\u001e\u0001\u0000\u0000\u0000gh\u0005s\u0000\u0000hi\u0005t\u0000\u0000"+
		"ij\u0005r\u0000\u0000jk\u0005i\u0000\u0000kl\u0005n\u0000\u0000lm\u0005"+
		"g\u0000\u0000m \u0001\u0000\u0000\u0000np\u0007\u0000\u0000\u0000on\u0001"+
		"\u0000\u0000\u0000pq\u0001\u0000\u0000\u0000qo\u0001\u0000\u0000\u0000"+
		"qr\u0001\u0000\u0000\u0000r\"\u0001\u0000\u0000\u0000su\u0007\u0001\u0000"+
		"\u0000ts\u0001\u0000\u0000\u0000uv\u0001\u0000\u0000\u0000vt\u0001\u0000"+
		"\u0000\u0000vw\u0001\u0000\u0000\u0000w$\u0001\u0000\u0000\u0000xz\u0007"+
		"\u0001\u0000\u0000yx\u0001\u0000\u0000\u0000z{\u0001\u0000\u0000\u0000"+
		"{y\u0001\u0000\u0000\u0000{|\u0001\u0000\u0000\u0000|}\u0001\u0000\u0000"+
		"\u0000}\u007f\u0005.\u0000\u0000~\u0080\u0007\u0001\u0000\u0000\u007f"+
		"~\u0001\u0000\u0000\u0000\u0080\u0081\u0001\u0000\u0000\u0000\u0081\u007f"+
		"\u0001\u0000\u0000\u0000\u0081\u0082\u0001\u0000\u0000\u0000\u0082&\u0001"+
		"\u0000\u0000\u0000\u0083\u0084\u0005t\u0000\u0000\u0084\u0085\u0005r\u0000"+
		"\u0000\u0085\u0086\u0005u\u0000\u0000\u0086\u008d\u0005e\u0000\u0000\u0087"+
		"\u0088\u0005f\u0000\u0000\u0088\u0089\u0005a\u0000\u0000\u0089\u008a\u0005"+
		"l\u0000\u0000\u008a\u008b\u0005s\u0000\u0000\u008b\u008d\u0005e\u0000"+
		"\u0000\u008c\u0083\u0001\u0000\u0000\u0000\u008c\u0087\u0001\u0000\u0000"+
		"\u0000\u008d(\u0001\u0000\u0000\u0000\u008e\u0092\u0005\"\u0000\u0000"+
		"\u008f\u0091\t\u0000\u0000\u0000\u0090\u008f\u0001\u0000\u0000\u0000\u0091"+
		"\u0094\u0001\u0000\u0000\u0000\u0092\u0093\u0001\u0000\u0000\u0000\u0092"+
		"\u0090\u0001\u0000\u0000\u0000\u0093\u0095\u0001\u0000\u0000\u0000\u0094"+
		"\u0092\u0001\u0000\u0000\u0000\u0095\u0096\u0005\"\u0000\u0000\u0096*"+
		"\u0001\u0000\u0000\u0000\u0097\u0098\u0005v\u0000\u0000\u0098\u0099\u0005"+
		"o\u0000\u0000\u0099\u009a\u0005i\u0000\u0000\u009a\u009b\u0005d\u0000"+
		"\u0000\u009b,\u0001\u0000\u0000\u0000\u0007\u0000qv{\u0081\u008c\u0092"+
		"\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}