const { readFile } = require('fs').promises

const readFileWrapper = async (file, options) => {
  const result = await readFile(file, options)
  console.log(result)
}

module.exports = readFileWrapper
