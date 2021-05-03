const { readFile } = require('fs').promises

const ProductsAPI = (path, prop) => ({
  async get () {
    const dataString = await readFile(path)
    const data = JSON.parse(dataString)[prop]
    return data
  }
})

module.exports = Object.freeze(ProductsAPI)
