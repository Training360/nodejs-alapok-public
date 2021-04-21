const sum = (a, b) => {
  if (Number.isFinite(a) && Number.isFinite(b)) {
    return a + b
  }
  throw new Error('One or more paramters are not a finite numbers')
}

module.exports = sum
