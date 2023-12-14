grammar Jact;

program: statement*;

statement: (ID ';') | printStatement | variableDeclaration | functionDeclaration | returnStatement | functionCall;
printStatement: 'lotzien' '(' expression ')' ';';
returnStatement: 'kbentkwijt ' statement ';';
// TODO: calculationStatement
variableDeclaration:
	variableMemoryTypeDeclaration ' ' ID ':' builtInType ' = ' expression ';';

variableMemoryTypeDeclaration: 'tzitvast' | 'tisvrij' | 'tisoud';
expression: INT | FLOAT | BOOL | STRING | ID | functionDeclaration;
functionDeclaration: 'doenekeeriet ' ID '(' parameterList ') {' statement* '}';
functionCall: ID '(' parameterList ')';
parameterList: (parameter (',' parameter)*)?;
parameter: ID ':' builtInType;

// Primitive types
ID: [a-zA-Z]+;
INT: [0-9]+;
FLOAT: [0-9]+ '.' [0-9]+;
BOOL: 'ja' | 'nee';
STRING: '"' .*? '"';

builtInType: 'nummerke' | 'jaofnee' | 'tekstje';

// Skip whitespace and newlines
WS: [ \t\r\n]+ -> skip;