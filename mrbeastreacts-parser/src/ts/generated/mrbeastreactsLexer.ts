// Generated from mrbeastreacts.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class mrbeastreactsLexer extends Lexer {
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "INT", "STRING", "BOOL", "ID",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, mrbeastreactsLexer._ATN, mrbeastreactsLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "mrbeastreacts.g4"; }

	public get literalNames(): (string | null)[] { return mrbeastreactsLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return mrbeastreactsLexer.symbolicNames; }
	public get ruleNames(): string[] { return mrbeastreactsLexer.ruleNames; }

	public get serializedATN(): number[] { return mrbeastreactsLexer._serializedATN; }

	public get channelNames(): string[] { return mrbeastreactsLexer.channelNames; }

	public get modeNames(): string[] { return mrbeastreactsLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,33,207,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,
	31,7,31,2,32,7,32,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,
	2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,
	7,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
	10,1,10,1,10,1,10,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,14,
	1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
	17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,20,1,21,
	1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,25,1,25,1,25,1,26,1,26,1,26,1,27,1,
	27,1,27,1,28,1,28,1,28,1,29,4,29,179,8,29,11,29,12,29,180,1,30,1,30,5,30,
	185,8,30,10,30,12,30,188,9,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,1,
	31,1,31,1,31,3,31,201,8,31,1,32,4,32,204,8,32,11,32,12,32,205,0,0,33,1,
	1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,
	15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,
	27,55,28,57,29,59,30,61,31,63,32,65,33,1,0,3,1,0,48,57,3,0,48,57,65,90,
	97,122,2,0,65,90,97,122,210,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,
	0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,
	1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,
	0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,
	1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,
	0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,
	1,0,0,0,0,65,1,0,0,0,1,67,1,0,0,0,3,76,1,0,0,0,5,78,1,0,0,0,7,82,1,0,0,
	0,9,84,1,0,0,0,11,86,1,0,0,0,13,90,1,0,0,0,15,97,1,0,0,0,17,102,1,0,0,0,
	19,104,1,0,0,0,21,106,1,0,0,0,23,118,1,0,0,0,25,120,1,0,0,0,27,123,1,0,
	0,0,29,125,1,0,0,0,31,130,1,0,0,0,33,136,1,0,0,0,35,143,1,0,0,0,37,150,
	1,0,0,0,39,152,1,0,0,0,41,154,1,0,0,0,43,157,1,0,0,0,45,159,1,0,0,0,47,
	161,1,0,0,0,49,163,1,0,0,0,51,165,1,0,0,0,53,168,1,0,0,0,55,171,1,0,0,0,
	57,174,1,0,0,0,59,178,1,0,0,0,61,182,1,0,0,0,63,200,1,0,0,0,65,203,1,0,
	0,0,67,68,5,102,0,0,68,69,5,117,0,0,69,70,5,110,0,0,70,71,5,99,0,0,71,72,
	5,116,0,0,72,73,5,105,0,0,73,74,5,111,0,0,74,75,5,110,0,0,75,2,1,0,0,0,
	76,77,5,40,0,0,77,4,1,0,0,0,78,79,5,41,0,0,79,80,5,32,0,0,80,81,5,123,0,
	0,81,6,1,0,0,0,82,83,5,125,0,0,83,8,1,0,0,0,84,85,5,44,0,0,85,10,1,0,0,
	0,86,87,5,105,0,0,87,88,5,110,0,0,88,89,5,116,0,0,89,12,1,0,0,0,90,91,5,
	115,0,0,91,92,5,116,0,0,92,93,5,114,0,0,93,94,5,105,0,0,94,95,5,110,0,0,
	95,96,5,103,0,0,96,14,1,0,0,0,97,98,5,98,0,0,98,99,5,111,0,0,99,100,5,111,
	0,0,100,101,5,108,0,0,101,16,1,0,0,0,102,103,5,61,0,0,103,18,1,0,0,0,104,
	105,5,59,0,0,105,20,1,0,0,0,106,107,5,99,0,0,107,108,5,111,0,0,108,109,
	5,110,0,0,109,110,5,115,0,0,110,111,5,111,0,0,111,112,5,108,0,0,112,113,
	5,101,0,0,113,114,5,46,0,0,114,115,5,108,0,0,115,116,5,111,0,0,116,117,
	5,103,0,0,117,22,1,0,0,0,118,119,5,41,0,0,119,24,1,0,0,0,120,121,5,105,
	0,0,121,122,5,102,0,0,122,26,1,0,0,0,123,124,5,123,0,0,124,28,1,0,0,0,125,
	126,5,101,0,0,126,127,5,108,0,0,127,128,5,115,0,0,128,129,5,101,0,0,129,
	30,1,0,0,0,130,131,5,119,0,0,131,132,5,104,0,0,132,133,5,105,0,0,133,134,
	5,108,0,0,134,135,5,101,0,0,135,32,1,0,0,0,136,137,5,114,0,0,137,138,5,
	101,0,0,138,139,5,116,0,0,139,140,5,117,0,0,140,141,5,114,0,0,141,142,5,
	110,0,0,142,34,1,0,0,0,143,144,5,101,0,0,144,145,5,120,0,0,145,146,5,112,
	0,0,146,147,5,111,0,0,147,148,5,114,0,0,148,149,5,116,0,0,149,36,1,0,0,
	0,150,151,5,60,0,0,151,38,1,0,0,0,152,153,5,62,0,0,153,40,1,0,0,0,154,155,
	5,60,0,0,155,156,5,47,0,0,156,42,1,0,0,0,157,158,5,42,0,0,158,44,1,0,0,
	0,159,160,5,47,0,0,160,46,1,0,0,0,161,162,5,43,0,0,162,48,1,0,0,0,163,164,
	5,45,0,0,164,50,1,0,0,0,165,166,5,61,0,0,166,167,5,61,0,0,167,52,1,0,0,
	0,168,169,5,33,0,0,169,170,5,61,0,0,170,54,1,0,0,0,171,172,5,60,0,0,172,
	173,5,61,0,0,173,56,1,0,0,0,174,175,5,62,0,0,175,176,5,61,0,0,176,58,1,
	0,0,0,177,179,7,0,0,0,178,177,1,0,0,0,179,180,1,0,0,0,180,178,1,0,0,0,180,
	181,1,0,0,0,181,60,1,0,0,0,182,186,5,34,0,0,183,185,7,1,0,0,184,183,1,0,
	0,0,185,188,1,0,0,0,186,184,1,0,0,0,186,187,1,0,0,0,187,189,1,0,0,0,188,
	186,1,0,0,0,189,190,5,34,0,0,190,62,1,0,0,0,191,192,5,116,0,0,192,193,5,
	114,0,0,193,194,5,117,0,0,194,201,5,101,0,0,195,196,5,102,0,0,196,197,5,
	97,0,0,197,198,5,108,0,0,198,199,5,115,0,0,199,201,5,101,0,0,200,191,1,
	0,0,0,200,195,1,0,0,0,201,64,1,0,0,0,202,204,7,2,0,0,203,202,1,0,0,0,204,
	205,1,0,0,0,205,203,1,0,0,0,205,206,1,0,0,0,206,66,1,0,0,0,5,0,180,186,
	200,205,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!mrbeastreactsLexer.__ATN) {
			mrbeastreactsLexer.__ATN = new ATNDeserializer().deserialize(mrbeastreactsLexer._serializedATN);
		}

		return mrbeastreactsLexer.__ATN;
	}


	static DecisionsToDFA = mrbeastreactsLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}