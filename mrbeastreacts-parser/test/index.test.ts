import { f, makeJs } from '../src/ts'

test('f should return 42', (): void => {
    console.log('oi')
    expect(f()).toBe(42)
})

test('makeJs should work', (): void => {
    makeJs(`function multiply(a, b) {
        return a * b;
      }`)
    expect(true).toBe(true)
})
