### Voorbeeld broncode

hello.jonassx
```
function calculateAge(birthYear) {
    return 2023 - birthYear;
}

const name:string = "jan";
const birthYear:number = 1980;
const isAdmin:boolean = true;

export function() {
    return [
        <h1>Hello, {name}</h1>
        <h3>You're {calculageAge(birthYear)} years old</h3>
        <h3>Is admin: {isAdmin}</h3>
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

function Hello() {
    document.createElement("h1").innerText = "Hello, " + name;
    document.createElement("h3").innerText = "You're " + calculageAge(birthYear) + " years old";
    document.createElement("h3").innerText = "Is admin: " + isAdmin;
}

Hello();
```
