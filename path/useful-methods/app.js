const path = require('path')

const filePath = '/This/Is/A/File/Path/file.js'

console.log(`Dirname: ${path.dirname(filePath)}`)
console.log(`Last part: ${path.basename(filePath)}`)
console.log(`Extension: ${path.extname(filePath)}`)
console.log(`Filename: ${path.basename(filePath, path.extname(filePath))}`)
console.log(`Is an absolute path: ${path.isAbsolute(filePath)}`)
console.log(path.parse(filePath))

const filePathObject = {
  dir: 'C:/Users/User',
  base: 'file.js'
}

console.log(path.format(filePathObject))
