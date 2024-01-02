### Voorbeeld broncode

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

### Voorbeeld uitvoer

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

### ENBF Grammatica

```ebnf
program ::= functionDeclaration variableDeclarations consoleLogStatement exportFunction

functionDeclaration ::= "function" functionName "(" parameters ")" block

parameters ::= identifier

variableDeclarations ::= "const" variableName ":" typeName "=" literal ";"

consoleLogStatement ::= "console.log" "(" variableName "," functionCall "," variableName ");"

exportFunction ::= "export" "function" block

block ::= "{" jsxElement "}"

jsxElement ::= "<" jsxTagName ">" jsxContent "</" jsxTagName ">"

jsxTagName ::= identifier

jsxContent ::= jsxText expression jsxText jsxText

jsxText ::= text

expression ::= literal
           | variableName
           | functionCall
           | binaryExpression

functionCall ::= functionName "(" arguments ")"

arguments ::= expression

binaryExpression ::= expression binaryOperator expression

literal ::= stringLiteral
         | numberLiteral
         | booleanLiteral

typeName ::= "string" | "number" | "boolean"

stringLiteral ::= '"' characters '"'
numberLiteral ::= digit+
booleanLiteral ::= "true" | "false"

characters ::= (character | escapeSequence)*
character ::= any character except '"' and '\'
escapeSequence ::= '\' any character

functionName ::= identifier
variableName ::= identifier

identifier ::= letter (letter | digit)*
letter ::= 'a'..'z' | 'A'..'Z'
digit ::= '0'..'9'

binaryOperator ::= "+" | "-" | "*" | "/" | "%"
```
