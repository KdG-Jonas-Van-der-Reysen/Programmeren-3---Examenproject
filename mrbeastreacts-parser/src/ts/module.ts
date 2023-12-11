// Import generated ANTLR files
import { CustomVisitor } from './customVisitor'
import mrbeastreactsLexer from './generated/mrbeastreactsLexer'
import mrbeastreactsParser from './generated/mrbeastreactsParser'
import mrbeastreactsVisitor from './generated/mrbeastreactsVisitor'
import * as antlr4 from 'antlr4'

export function forty(): number {
    return 40
}

export function makeJs(inputCode: string): unknown {
    // Create a lexer and parser
    const lexer = new mrbeastreactsLexer(new antlr4.CharStream(inputCode))
    const tokens = new antlr4.CommonTokenStream(lexer)
    console.log(tokens)
    const parser = new mrbeastreactsParser(tokens)

    // Parse the input using the generated visitor
    const visitor = new CustomVisitor()
    const result = visitor.visitProgram(parser.program())
    console.log('result of visitor: ', result)
    return result
}
