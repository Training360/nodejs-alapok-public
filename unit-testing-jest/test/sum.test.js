const sum = require('../src/sum')

test('sum 1 + 2 should be 3', () => {
  const actual = sum(1, 2)
  const expected = 3
  expect(actual).toBe(expected)
})
