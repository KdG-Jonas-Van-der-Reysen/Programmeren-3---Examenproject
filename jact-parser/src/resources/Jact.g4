grammar Jact;

program: statement*;

statement: (ID ';') | printStatement | variableDeclaration | functionDeclaration | returnStatement | functionCall;
printStatement: 'print' '(' expression ')' ';';
returnStatement: 'return' expression ';';

variableDeclaration:
	variableMemoryTypeDeclaration ' ' ID ':' builtInType ' = ' expression ';';

variableMemoryTypeDeclaration: 'const' | 'let' | 'var';
expression: INT | FLOAT | BOOL | STRING | ID | functionDeclaration;
functionDeclaration: 'function' ID '(' parameterList ') {' statement* '}';
functionCall: ID '(' parameterList ')';
parameterList: (parameter (',' parameter)*)?;
parameter: ID ':' builtInType;

// Primitive types
ID: [a-zA-Z]+;
INT: [0-9]+;
FLOAT: [0-9]+ '.' [0-9]+;
BOOL: 'true' | 'false';
STRING: '"' .*? '"';
VOID: 'void';

builtInType: 'number' | 'boolean' | 'string' | 'void';

// Skip whitespace and newlines
WS: [ \t\r\n]+ -> skip;