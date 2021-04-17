const { createReadStream, createWriteStream } = require('fs')
const { createGzip } = require('zlib')

const readableStream = createReadStream('./szamarmese.txt', {
  encoding: 'utf8',
  highWaterMark: 11
})

const writeableStream = createWriteStream('./szamarmeseCopy.txt')
const createCompressedFile = createWriteStream('./szamarmese.txt.gz')

readableStream.pipe(writeableStream)

readableStream
  .pipe(createGzip())
  .pipe(createCompressedFile)
