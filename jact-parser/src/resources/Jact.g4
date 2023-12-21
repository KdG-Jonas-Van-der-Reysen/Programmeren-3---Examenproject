grammar Jact;

program: statement*;

statement: (ID ';') | printStatement | variableDeclaration | functionDeclaration | returnStatement | functionCall | calculationStatement;
printStatement: 'lotzien' '(' (functionCall  | calculationStatement | expression) ')' ';';
returnStatement: 'kbentkwijt ' statement ';';
// TODO: calculationStatement
variableDeclaration:
	variableMemoryTypeDeclaration ' ' ID ':' builtInType ' = ' expression ';';

variableMemoryTypeDeclaration: 'tzitvast' | 'tisvrij' | 'tisoud';
expression: INT | FLOAT | BOOL | STRING | ID;
functionDeclaration: 'doenekeeriet ' ID '(' parameterList ') {' statement* '}';
functionCall: ID '(' untypedParameterList ')';
parameterList: (parameter (',' parameter)*)?;
untypedParameterList: (ID (',' ID)*)?;
parameter: ID ':' builtInType;
calculationStatement: expression ' ' OPERATOR ' ' expression;

// Primitive types
ID: [a-zA-Z]+;
INT: [0-9]+;
FLOAT: [0-9]+ '.' [0-9]+;
BOOL: 'ja' | 'nee';
STRING: '"' .*? '"';
OPERATOR: '+' | '-' | '*' | '/' | '%' | '==' | '!=' | '<' | '>' | '<=' | '>=' | '&&' | '||' | '!' | '++' | '--';

builtInType: 'nummerke' | 'jaofnee' | 'tekstje';

// Skip whitespace and newlines
WS: [ \t\r\n]+ -> skip;