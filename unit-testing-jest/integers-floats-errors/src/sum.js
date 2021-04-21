const sum = (a, b) =>
  Number.isFinite(a) || Number.isFinite(b)
    ? a + b
    : new Error('One or more paramter are not a finite number')

module.exports = sum
