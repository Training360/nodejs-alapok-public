const getData = require('../src/getData')

test('getData should be "DATA"', (done) => {
  const callback = str => {
    expect(str).toBe('dataa')
    done()
  }
  getData(callback)
})
