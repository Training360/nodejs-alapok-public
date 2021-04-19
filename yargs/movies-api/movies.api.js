const { readFileSync, writeFileSync } = require('fs')

const MoviesApi = (path, prop) => ({
  get () {
    const dataString = readFileSync(path)
    return JSON.parse(dataString)[prop]
  },

  save (data) {
    writeFileSync(path, JSON.stringify({ [prop]: data }))
  }
})

module.exports = MoviesApi
