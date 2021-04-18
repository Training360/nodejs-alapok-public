const Calculator = require('./Calculator')
const calculator = new Calculator()

calculator.on('start', () =>
  console.log('Start callback called'))

calculator.on('end', (sum) =>
  console.log('End callback called. Sum:', sum))

calculator.sum(10, 20)
