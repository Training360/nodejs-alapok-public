const generateItems = require('../src/generateItems')

test('generateItems call callback count of items times', () => {
  const mockCallback = jest.fn()
  const arr = [1, 2]
  generateItems(arr, mockCallback)
  expect(mockCallback).toHaveBeenCalledTimes(2)
//   expect(mockCallback.mock.results[0].value).toBe(2)
//   expect(mockCallback.mock.results[1].value).toBe(4)
})
