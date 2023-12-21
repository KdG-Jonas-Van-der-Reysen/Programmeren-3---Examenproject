import { makeJs } from '../src/ts'

test('parseSourceCode should work', (): void => {
    const obj = makeJs(sourceCode)
    console.log(obj)
})

const sourceCode = `doenekeeriet calculateAge(birthYear:nummerke) {
    kbentkwijt 2023 - birthYear;
}

tzitvast name:tekstje = "jan";
tzitvast birthYear:nummerke = 1980;
tzitvast isAdmin:jaofnee = ja;
lotzien(calculateAge(birthYear));

lotzien(name);
lotzien(calculateAge(birthYear));
`
