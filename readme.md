# Jact, the new React

Gemaakt door: Jonas Van der Reysen

## Instructies om te builden & runnen

1. Parser builden

```bash
cd jact-parser
npm run build
```

2. Modules installeren bij de loader

```bash
cd ..
cd jact-loader
npm install
```

3. Modules installeren bij de demo applicatie

```bash
cd ..
cd demo_app
npm install
```

4. Demo app runnen

```bash
npm run build
```
Open hierna het index.html bestand van in de /dist folder in de browser. Je ziet in de console ook het resultaat staan van de code hieronder.

## Instructies om te testen

```bash
cd jact-parser
npm run test
```

## Voorbeeld broncode

hello.jct

```js
doenekeeriet calculateAge(birthYear:nummerke) {
    lotzien(birthYear);
}

tzitvast name:tekstje = "jan";
tzitvast birthYear:nummerke = 1980;
tzitvast isAdmin:jaofnee = ja;

calculateAge(birthYear);

lotzien(name);
lotzien(isAdmin);

exporteer doenekeeriet Hello() {
    kbentkwijt [
        <div>
            <h1>Hello there!</h1>
            <h2>Welcome to our website</h2>
        </div>
    ];
};
```

## Voorbeeld uitvoer

```js
function calculateAge(birthYear) {
  console.log(birthYear);
}

const name = "jan";
const birthYear = 1980;
const isAdmin = true;

calculateAge(birthYear);

console.log(name);
console.log(isAdmin);

function Hello() {
  document.getElementById("root").innerHTML += jactRenderer.createElement(
    "div",
    jactRenderer.createElement("h1", "Hello there!") +
      jactRenderer.createElement("h2", "Welcome to our website")
  );
}

Hello();
```

## ENBF Grammatica

```ebnf
JactGrammar = { Statement } ;

Statement = ( Identifier ';' )
          | PrintStatement
          | VariableDeclaration
          | FunctionDeclaration
          | ReturnStatement
          | FunctionCall
          | CalculationStatement
          | ExportStatement ;

PrintStatement = 'lotzien(' ( FunctionCall | CalculationStatement | Expression ) ');' ;

ReturnStatement = 'kbentkwijt' Statement | JactCode ';' ;

ExportStatement = 'exporteer' Statement ';' ;

JactCode = '[' { JactElement } ']' ;

JactElement = '<' JactElementName '>' ( JactElement | ElementContent )* '</' JactElementName '>' ;

JactElementName = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span' ;

ElementContent = ( Identifier | ' ' | '!' | '.' | '?' )+ ;

VariableDeclaration = VariableMemoryTypeDeclaration ' ' Identifier ':' BuiltInType ' = ' Expression ';' ;

VariableMemoryTypeDeclaration = 'tzitvast' | 'tisvrij' | 'tisoud' ;

Expression = IntegerLiteral | FloatLiteral | BoolLiteral | StringLiteral | Identifier ;

FunctionDeclaration = 'doenekeeriet' Identifier '(' ParameterList ') {' { Statement* } '}' ;

FunctionCall = Identifier '(' UntypedParameterList ');' ;

ParameterList = [ Parameter { ',' Parameter } ] ;

UntypedParameterList = [ PassedParameter { ',' PassedParameter } ] ;

PassedParameter = Expression | Identifier ;

Parameter = Identifier ':' BuiltInType ;

CalculationStatement = Expression OPERATOR Expression ';' ;

// Primitive types
Identifier = [a-zA-Z]+ ;
IntegerLiteral = [0-9]+ ;
FloatLiteral = [0-9]+ '.' [0-9]+ ;
BoolLiteral = 'ja' | 'nee' ;
StringLiteral = '"' .*? '"' ;

BuiltInType = 'nummerke' | 'jaofnee' | 'tekstje' ;

// Operators
OPERATOR = '+' | '-' | '*' | '/' | '%' | '==' | '!=' | '<' | '>' | '<=' | '>=' | '&&' | '||' | '!' | '++' | '--' ;

// Skip whitespace and newlines
WS = [ \t\r\n]+ -> skip ;

```
