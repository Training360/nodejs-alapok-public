const fs = require('fs')

const readFileSyncLog = (path, options = {}) => {
  console.log(fs.readFileSync(path, options))
}

const readFileLog = (path, options = {}) => {
  fs.readFile(path, options,
    (err, data) => {
      if (err) throw err
      console.log(data)
    })
}

module.exports = Object.freeze({
  readFileSyncLog,
  readFileLog
})
