import { capitalizePrint, isRawHTML } from '../../src/js/functions'

describe('capitalizePrint()', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalizePrint('test')).toBe('Test')
  })
})

describe('isRawHTML()', () => {
  it('string `My Header` return `false`', () => {
    expect(isRawHTML('My Header')).toBe(false)
  })

  it('`<h1>My HTML Header</h1>` return `true`', () => {
    expect(isRawHTML('<h1>My HTML Header</h1>')).toBe(true)
  })

  it('`<h1>HTML syntax error` return `false`', () => {
    expect(isRawHTML('<h1>HTML syntax error')).toBe(false)
  })
})
