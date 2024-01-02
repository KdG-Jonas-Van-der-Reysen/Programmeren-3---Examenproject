import makeJs from '../src/ts/module'
// Import generated ANTLR files
import JactLexer from '../src/ts/generated/JactLexer'
import JactParser from '../src/ts/generated/JactParser'
import * as antlr4 from 'antlr4'

// Unit test showing the context tree
test('Context should be correct', (): void => {
    // const chars = new antlr.InputStream(input)
    const chars = new antlr4.CharStream('lotzien("hello")')
    const lexer = new JactLexer(chars)
    const tokens = new antlr4.CommonTokenStream(lexer)
    const parser = new JactParser(tokens)
    const context = parser.program()

    // Type of context should be "programContext", then it has a children object, the first one should be "statementcontext"
    expect(context.constructor.name).toBe('ProgramContext')
    expect(context.children && context.children[0].constructor.name).toBe('StatementContext')
})

// Syntax error tests
test('Incorrect code should throw an error', (): void => {
    expect((): void => {
        makeJs('tzitvast name>tekstje = "jan"')
    }).toThrow()
})

test('Incorrect code should throw an error - 2', (): void => {
    expect((): void => {
        makeJs('lotzien(\'hello");')
    }).toThrow()
})

test('Incorrect code should throw an error - 3', (): void => {
    expect((): void => {
        makeJs('tisonbekend name:tekstje = "jan"')
    }).toThrow()
})

// End-to-end test
test('Code should return the right js code', (): void => {
    const obj: string = makeJs('tzitvast name:tekstje = "jan";')
    expect(obj).toBe('const name = "jan";')
})
