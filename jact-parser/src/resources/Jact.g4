grammar Jact;

program: statement*;

statement: (ID ';') | printStatement | variableDeclaration | functionDeclaration | returnStatement | functionCall | calculationStatement | exportStatement;
printStatement: 'lotzien' '(' (functionCall  | calculationStatement | expression) ')' ';';
returnStatement: 'kbentkwijt ' statement | jactCode ';';
exportStatement: 'exporteer ' statement ';';
jactCode: '[' jactElement* ']';
jactElement: '<'jactElementName'>'(jactElement | .+? )*'</'jactElementName'>';
jactElementName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span';

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