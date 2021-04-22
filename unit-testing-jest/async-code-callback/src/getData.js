const getData = callback => {
  setTimeout(() => {
    const data = 'data'
    callback(data)
  }, 1000)
}

module.exports = getData
