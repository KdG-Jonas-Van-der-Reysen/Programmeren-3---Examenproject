// Generated from Jact.g4 by ANTLR 4.13.1
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
export default class JactLexer extends Lexer {
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
	public static readonly VOID = 24;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "'print'", "'('", 
                                                            "')'", "' '", 
                                                            "':'", "' = '", 
                                                            "'const'", "'let'", 
                                                            "'var'", "'function'", 
                                                            "') {'", "'}'", 
                                                            "','", "'int'", 
                                                            "'float'", "'bool'", 
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
                                                             null, "ID", 
                                                             "INT", "FLOAT", 
                                                             "BOOL", "STRING", 
                                                             "VOID" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "ID", "INT", "FLOAT", "BOOL", "STRING", "VOID",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, JactLexer._ATN, JactLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Jact.g4"; }

	public get literalNames(): (string | null)[] { return JactLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return JactLexer.symbolicNames; }
	public get ruleNames(): string[] { return JactLexer.ruleNames; }

	public get serializedATN(): number[] { return JactLexer._serializedATN; }

	public get channelNames(): string[] { return JactLexer.channelNames; }

	public get modeNames(): string[] { return JactLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,24,168,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,
	1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,
	10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,13,
	1,13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,
	16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,4,18,124,8,18,11,18,12,
	18,125,1,19,4,19,129,8,19,11,19,12,19,130,1,20,4,20,134,8,20,11,20,12,20,
	135,1,20,1,20,4,20,140,8,20,11,20,12,20,141,1,21,1,21,1,21,1,21,1,21,1,
	21,1,21,1,21,1,21,3,21,153,8,21,1,22,1,22,5,22,157,8,22,10,22,12,22,160,
	9,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,158,0,24,1,1,3,2,5,3,7,4,9,5,
	11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,
	18,37,19,39,20,41,21,43,22,45,23,47,24,1,0,2,2,0,65,90,97,122,1,0,48,57,
	173,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,
	0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,
	0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,
	0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,
	0,45,1,0,0,0,0,47,1,0,0,0,1,49,1,0,0,0,3,51,1,0,0,0,5,57,1,0,0,0,7,59,1,
	0,0,0,9,61,1,0,0,0,11,63,1,0,0,0,13,65,1,0,0,0,15,69,1,0,0,0,17,75,1,0,
	0,0,19,79,1,0,0,0,21,83,1,0,0,0,23,92,1,0,0,0,25,96,1,0,0,0,27,98,1,0,0,
	0,29,100,1,0,0,0,31,104,1,0,0,0,33,110,1,0,0,0,35,115,1,0,0,0,37,123,1,
	0,0,0,39,128,1,0,0,0,41,133,1,0,0,0,43,152,1,0,0,0,45,154,1,0,0,0,47,163,
	1,0,0,0,49,50,5,59,0,0,50,2,1,0,0,0,51,52,5,112,0,0,52,53,5,114,0,0,53,
	54,5,105,0,0,54,55,5,110,0,0,55,56,5,116,0,0,56,4,1,0,0,0,57,58,5,40,0,
	0,58,6,1,0,0,0,59,60,5,41,0,0,60,8,1,0,0,0,61,62,5,32,0,0,62,10,1,0,0,0,
	63,64,5,58,0,0,64,12,1,0,0,0,65,66,5,32,0,0,66,67,5,61,0,0,67,68,5,32,0,
	0,68,14,1,0,0,0,69,70,5,99,0,0,70,71,5,111,0,0,71,72,5,110,0,0,72,73,5,
	115,0,0,73,74,5,116,0,0,74,16,1,0,0,0,75,76,5,108,0,0,76,77,5,101,0,0,77,
	78,5,116,0,0,78,18,1,0,0,0,79,80,5,118,0,0,80,81,5,97,0,0,81,82,5,114,0,
	0,82,20,1,0,0,0,83,84,5,102,0,0,84,85,5,117,0,0,85,86,5,110,0,0,86,87,5,
	99,0,0,87,88,5,116,0,0,88,89,5,105,0,0,89,90,5,111,0,0,90,91,5,110,0,0,
	91,22,1,0,0,0,92,93,5,41,0,0,93,94,5,32,0,0,94,95,5,123,0,0,95,24,1,0,0,
	0,96,97,5,125,0,0,97,26,1,0,0,0,98,99,5,44,0,0,99,28,1,0,0,0,100,101,5,
	105,0,0,101,102,5,110,0,0,102,103,5,116,0,0,103,30,1,0,0,0,104,105,5,102,
	0,0,105,106,5,108,0,0,106,107,5,111,0,0,107,108,5,97,0,0,108,109,5,116,
	0,0,109,32,1,0,0,0,110,111,5,98,0,0,111,112,5,111,0,0,112,113,5,111,0,0,
	113,114,5,108,0,0,114,34,1,0,0,0,115,116,5,115,0,0,116,117,5,116,0,0,117,
	118,5,114,0,0,118,119,5,105,0,0,119,120,5,110,0,0,120,121,5,103,0,0,121,
	36,1,0,0,0,122,124,7,0,0,0,123,122,1,0,0,0,124,125,1,0,0,0,125,123,1,0,
	0,0,125,126,1,0,0,0,126,38,1,0,0,0,127,129,7,1,0,0,128,127,1,0,0,0,129,
	130,1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,40,1,0,0,0,132,134,7,1,
	0,0,133,132,1,0,0,0,134,135,1,0,0,0,135,133,1,0,0,0,135,136,1,0,0,0,136,
	137,1,0,0,0,137,139,5,46,0,0,138,140,7,1,0,0,139,138,1,0,0,0,140,141,1,
	0,0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,42,1,0,0,0,143,144,5,116,0,0,
	144,145,5,114,0,0,145,146,5,117,0,0,146,153,5,101,0,0,147,148,5,102,0,0,
	148,149,5,97,0,0,149,150,5,108,0,0,150,151,5,115,0,0,151,153,5,101,0,0,
	152,143,1,0,0,0,152,147,1,0,0,0,153,44,1,0,0,0,154,158,5,34,0,0,155,157,
	9,0,0,0,156,155,1,0,0,0,157,160,1,0,0,0,158,159,1,0,0,0,158,156,1,0,0,0,
	159,161,1,0,0,0,160,158,1,0,0,0,161,162,5,34,0,0,162,46,1,0,0,0,163,164,
	5,118,0,0,164,165,5,111,0,0,165,166,5,105,0,0,166,167,5,100,0,0,167,48,
	1,0,0,0,7,0,125,130,135,141,152,158,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JactLexer.__ATN) {
			JactLexer.__ATN = new ATNDeserializer().deserialize(JactLexer._serializedATN);
		}

		return JactLexer.__ATN;
	}


	static DecisionsToDFA = JactLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}