### Voorbeeld broncode

hello.jonassx
```js
function calculateAge(birthYear) {
    return 2023 - birthYear;
}

const name:string = "jan";
const birthYear:number = 1980;
const isAdmin:boolean = true;

console.log(name, calculateAge(birthYear), isAdmin);

export function() {
    return [
        <div>
            <h1>Hello there!</h1>
            <h2>Welcome to our website</h2>
        </div>
    ]
}
```

### Voorbeeld uitvoer

```js
function calculateAge(birthYear) {
    return 2023 - birthYear;
}

const name = "jan";
const birthYear = 1980;
const isAdmin = true;

console.log(name, calculageAge(birthYear), isAdmin);

function Hello() {
    document.body.createElement("div")
        .appendChild(
            document.body.createElement("h1")
            .appendChild(
                document.createTextNode("Hello there!")
            )
        )
        .appendChild(
            document.body.createElement("h2")
            .appendChild(
                document.createTextNode("Welcome to our website")
            )
        )
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
