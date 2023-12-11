grammar Jact;

program: (printStatement | statement | variableDeclaration | functionDeclaration)*;

statement: ID ';';
printStatement: 'print' '(' expression ')' ';';

variableDeclaration:
	variableMemoryTypeDeclaration ' ' ID ':' builtInType ' = ' expression ';';

variableMemoryTypeDeclaration: 'const' | 'let' | 'var';
expression: INT | FLOAT | BOOL | STRING | ID | functionDeclaration;
functionDeclaration: 'function' ID '(' parameterList ') {' statement* '}';
parameterList: (parameter (',' parameter)*)?;
parameter: ID ':' builtInType;

// Primitive types
ID: [a-zA-Z]+;
INT: [0-9]+;
FLOAT: [0-9]+ '.' [0-9]+;
BOOL: 'true' | 'false';
STRING: '"' .*? '"';
VOID: 'void';

builtInType: 'int' | 'float' | 'bool' | 'string' | 'void';