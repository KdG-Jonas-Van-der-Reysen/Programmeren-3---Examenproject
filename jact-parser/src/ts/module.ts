// Import generated ANTLR files
import JactLexer from './generated/JactLexer'
import JactParser from './generated/JactParser'
import JactVisitor from './generated/JactVisitor'
import CustomJactVisitor from './CustomJactVisitor'
import * as antlr4 from 'antlr4'

export function forty(): number {
    return 40
}

export function makeJs(inputCode: string): unknown {
    // const chars = new antlr.InputStream(input)
    const chars = new antlr4.CharStream(inputCode)
    const lexer = new JactLexer(chars)
    const tokens = new antlr4.CommonTokenStream(lexer)
    const parser = new JactParser(tokens)
    const context = parser.classDeclaration()
    const visitor = new CustomJactVisitor()
    const obj = visitor.visit(context)

    console.log(context.toStringTree(parser.ruleNames, parser))
    console.log(obj)
    return obj

}
