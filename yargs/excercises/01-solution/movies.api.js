const { readFile, writeFile } = require('fs').promises

const MoviesAPI = (path, prop) => ({
  async get () {
    const dataString = await readFile(path)
    const data = JSON.parse(dataString)[prop]
    return data
  },

  async save (data) {
    await writeFile(path, JSON.stringify({ [prop]: data }))
  }
})

module.exports = Object.freeze(MoviesAPI)
