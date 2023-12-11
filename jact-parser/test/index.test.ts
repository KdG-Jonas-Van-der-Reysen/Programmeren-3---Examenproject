import { makeJs } from '../src/ts'

test('parseSourceCode should work', (): void => {
    const obj = makeJs(sourceCode)
    console.log(obj)
})

const sourceCode = `
public class Hello {
    private final String someText;
}
`
