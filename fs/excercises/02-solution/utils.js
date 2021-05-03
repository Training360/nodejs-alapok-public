const { createWriteStream } = require('fs')
const { unlink } = require('fs').promises
const { createGzip } = require('zlib')

const cloneFile = (stream, file) =>
  stream.pipe(createWriteStream(`${file}.bak`))

const archiveFile = (stream) =>
  stream.pipe(createGzip())

const deleteFiles = async (file) => {
  await unlink(file)
  await unlink(`${file}.bak`)
}

module.exports = {
  cloneFile,
  archiveFile,
  deleteFiles
}
