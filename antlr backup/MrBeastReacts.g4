grammar MrBeastReacts; // Updated grammar name to match the file name

program: statementList;

functionDeclaration: 'function' ID '(' parameterList ') {' statementList '}';

parameterList: parameter (',' parameter)* | ;
parameter: type ID;

type: 'int' | 'string' | 'bool';

statementList: statement*;

statement: assignmentStatement | printStatement | ifStatement | whileStatement | functionCallStatement | returnStatement | jsxStatement;

assignmentStatement: ID '=' expression ';';

printStatement: 'console.log' '(' expression (',' expression)* ')' ';';

ifStatement: 'if' '(' expression ')' '{' statementList '}' ('else' '{' statementList '}')?;

whileStatement: 'while' '(' expression ')' '{' statementList '}';

functionCallStatement: ID '(' expressionList ')' ';';

returnStatement: 'return' expression ';';

jsxStatement: 'export' 'function' '(' ')' '{' jsxElement '}';

jsxElement: '<' jsxTagName '>' jsxChildren '</' jsxTagName '>';

jsxTagName: ID;

jsxChildren: jsxElement | STRING;

expressionList: expression (',' expression)* | ;

expression: '(' expression ')' | expression ('*' | '/' | '+' | '-' | '==' | '!=' | '<' | '>' | '<=' | '>=') expression | ID | INT | STRING | BOOL | functionCallStatement;

INT: [0-9]+;
STRING: '"' .*? '"';
BOOL: 'true' | 'false';

ID: [a-zA-Z]+;