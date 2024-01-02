import makeJs from '../src/ts/module'

test('parseSourceCode should work', (): void => {
    const obj: string = makeJs(sourceCode)
    console.log(obj)
})

const sourceCode = `doenekeeriet calculateAge(birthYear:nummerke) {
    lotzien(birthYear);
}

tzitvast name:tekstje = "jan";
tzitvast birthYear:nummerke = 1980;
tzitvast isAdmin:jaofnee = ja;

calculateAge(1980);

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

Hello();`
