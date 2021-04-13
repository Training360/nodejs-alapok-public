const { writeFile, appendFile } = require('fs')

const writeFileWrapper = (path, data) => {
  writeFile(path, data, (err) => {
    if (err) throw err
    console.log('file content changed')
  })
}

const appendFileWrapper = (path, data) => {
  appendFile(path, data, (err) => {
    if (err) throw err
    console.log('file content changed')
  })
}

module.exports = {
  writeFileWrapper,
  appendFileWrapper
}
