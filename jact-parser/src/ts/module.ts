// Import generated ANTLR files
import JactLexer from './generated/JactLexer'
import JactParser from './generated/JactParser'
import CustomJactVisitor from './CustomJactVisitor'
import * as antlr4 from 'antlr4'


export default function makeJs(inputCode: string): string {
    // const chars = new antlr.InputStream(input)
    const chars = new antlr4.CharStream(inputCode)
    const lexer = new JactLexer(chars)
    const tokens = new antlr4.CommonTokenStream(lexer)
    const parser = new JactParser(tokens)
    const context = parser.program()
    const visitor = new CustomJactVisitor()
    const obj: any = visitor.visit(context)

    console.log('-------------------' )
    return obj.join('')

}
