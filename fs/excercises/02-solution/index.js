const { createReadStream } = require('fs')
const {
  cloneFile,
  archiveFile,
  deleteFiles
} = require('./utils')
const file = 'test.txt'

const readableStream = createReadStream(file, {
  encoding: 'utf8',
  highWaterMark: 1024
})
  .on('error', (err) => { throw err })
  .on('end', async () => await deleteFiles(file))

cloneFile(readableStream)
archiveFile(readableStream)
