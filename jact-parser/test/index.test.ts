import { makeJs } from '../src/ts'

test('parseSourceCode should work', (): void => {
    const obj = makeJs(sourceCode)
    console.log(obj)
})

const sourceCode = `const name:string = "jan";
const birthYear:number = 1980;
const isAdmin:boolean = true;

print(name);
`
