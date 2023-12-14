import { makeJs } from '../src/ts'

test('parseSourceCode should work', (): void => {
    const obj = makeJs(sourceCode)
    console.log(obj)
})

const sourceCode = `doenekeeriet calculateAge(birthYear:numbb) {
    kbentkwijt 2023 - birthYear;
}

tzitvast name:tektsje = "jan";
tzitvast birthYear:nummerke = 1980;
tzitvast isAdmin:jaofnee = ja;

lotzien(name, calculateAge(birthYear), isAdmin);
`
