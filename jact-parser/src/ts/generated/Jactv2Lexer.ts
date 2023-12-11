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
export default class Jactv2Lexer extends Lexer {
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
	public static readonly ID = 17;
	public static readonly INT = 18;
	public static readonly FLOAT = 19;
	public static readonly BOOL = 20;
	public static readonly STRING = 21;
	public static readonly VOID = 22;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "' '", "':'", 
                                                            "' = '", "'const'", 
                                                            "'let'", "'var'", 
                                                            "'function'", 
                                                            "'('", "') {'", 
                                                            "'}'", "','", 
                                                            "'int'", "'float'", 
                                                            "'bool'", "'string'", 
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
                                                             null, "ID", 
                                                             "INT", "FLOAT", 
                                                             "BOOL", "STRING", 
                                                             "VOID" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "ID", "INT", 
		"FLOAT", "BOOL", "STRING", "VOID",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, Jactv2Lexer._ATN, Jactv2Lexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Jact.g4"; }

	public get literalNames(): (string | null)[] { return Jactv2Lexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return Jactv2Lexer.symbolicNames; }
	public get ruleNames(): string[] { return Jactv2Lexer.ruleNames; }

	public get serializedATN(): number[] { return Jactv2Lexer._serializedATN; }

	public get channelNames(): string[] { return Jactv2Lexer.channelNames; }

	public get modeNames(): string[] { return Jactv2Lexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,22,156,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,1,0,1,0,1,1,1,1,1,
	2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,
	6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,1,10,
	1,10,1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,
	14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,16,4,16,112,8,16,
	11,16,12,16,113,1,17,4,17,117,8,17,11,17,12,17,118,1,18,4,18,122,8,18,11,
	18,12,18,123,1,18,1,18,4,18,128,8,18,11,18,12,18,129,1,19,1,19,1,19,1,19,
	1,19,1,19,1,19,1,19,1,19,3,19,141,8,19,1,20,1,20,5,20,145,8,20,10,20,12,
	20,148,9,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,146,0,22,1,1,3,2,5,3,7,
	4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,
	17,35,18,37,19,39,20,41,21,43,22,1,0,2,2,0,65,90,97,122,1,0,48,57,161,0,
	1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,
	0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,
	0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,
	0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,1,45,1,
	0,0,0,3,47,1,0,0,0,5,49,1,0,0,0,7,51,1,0,0,0,9,55,1,0,0,0,11,61,1,0,0,0,
	13,65,1,0,0,0,15,69,1,0,0,0,17,78,1,0,0,0,19,80,1,0,0,0,21,84,1,0,0,0,23,
	86,1,0,0,0,25,88,1,0,0,0,27,92,1,0,0,0,29,98,1,0,0,0,31,103,1,0,0,0,33,
	111,1,0,0,0,35,116,1,0,0,0,37,121,1,0,0,0,39,140,1,0,0,0,41,142,1,0,0,0,
	43,151,1,0,0,0,45,46,5,59,0,0,46,2,1,0,0,0,47,48,5,32,0,0,48,4,1,0,0,0,
	49,50,5,58,0,0,50,6,1,0,0,0,51,52,5,32,0,0,52,53,5,61,0,0,53,54,5,32,0,
	0,54,8,1,0,0,0,55,56,5,99,0,0,56,57,5,111,0,0,57,58,5,110,0,0,58,59,5,115,
	0,0,59,60,5,116,0,0,60,10,1,0,0,0,61,62,5,108,0,0,62,63,5,101,0,0,63,64,
	5,116,0,0,64,12,1,0,0,0,65,66,5,118,0,0,66,67,5,97,0,0,67,68,5,114,0,0,
	68,14,1,0,0,0,69,70,5,102,0,0,70,71,5,117,0,0,71,72,5,110,0,0,72,73,5,99,
	0,0,73,74,5,116,0,0,74,75,5,105,0,0,75,76,5,111,0,0,76,77,5,110,0,0,77,
	16,1,0,0,0,78,79,5,40,0,0,79,18,1,0,0,0,80,81,5,41,0,0,81,82,5,32,0,0,82,
	83,5,123,0,0,83,20,1,0,0,0,84,85,5,125,0,0,85,22,1,0,0,0,86,87,5,44,0,0,
	87,24,1,0,0,0,88,89,5,105,0,0,89,90,5,110,0,0,90,91,5,116,0,0,91,26,1,0,
	0,0,92,93,5,102,0,0,93,94,5,108,0,0,94,95,5,111,0,0,95,96,5,97,0,0,96,97,
	5,116,0,0,97,28,1,0,0,0,98,99,5,98,0,0,99,100,5,111,0,0,100,101,5,111,0,
	0,101,102,5,108,0,0,102,30,1,0,0,0,103,104,5,115,0,0,104,105,5,116,0,0,
	105,106,5,114,0,0,106,107,5,105,0,0,107,108,5,110,0,0,108,109,5,103,0,0,
	109,32,1,0,0,0,110,112,7,0,0,0,111,110,1,0,0,0,112,113,1,0,0,0,113,111,
	1,0,0,0,113,114,1,0,0,0,114,34,1,0,0,0,115,117,7,1,0,0,116,115,1,0,0,0,
	117,118,1,0,0,0,118,116,1,0,0,0,118,119,1,0,0,0,119,36,1,0,0,0,120,122,
	7,1,0,0,121,120,1,0,0,0,122,123,1,0,0,0,123,121,1,0,0,0,123,124,1,0,0,0,
	124,125,1,0,0,0,125,127,5,46,0,0,126,128,7,1,0,0,127,126,1,0,0,0,128,129,
	1,0,0,0,129,127,1,0,0,0,129,130,1,0,0,0,130,38,1,0,0,0,131,132,5,116,0,
	0,132,133,5,114,0,0,133,134,5,117,0,0,134,141,5,101,0,0,135,136,5,102,0,
	0,136,137,5,97,0,0,137,138,5,108,0,0,138,139,5,115,0,0,139,141,5,101,0,
	0,140,131,1,0,0,0,140,135,1,0,0,0,141,40,1,0,0,0,142,146,5,34,0,0,143,145,
	9,0,0,0,144,143,1,0,0,0,145,148,1,0,0,0,146,147,1,0,0,0,146,144,1,0,0,0,
	147,149,1,0,0,0,148,146,1,0,0,0,149,150,5,34,0,0,150,42,1,0,0,0,151,152,
	5,118,0,0,152,153,5,111,0,0,153,154,5,105,0,0,154,155,5,100,0,0,155,44,
	1,0,0,0,7,0,113,118,123,129,140,146,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Jactv2Lexer.__ATN) {
			Jactv2Lexer.__ATN = new ATNDeserializer().deserialize(Jactv2Lexer._serializedATN);
		}

		return Jactv2Lexer.__ATN;
	}


	static DecisionsToDFA = Jactv2Lexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}