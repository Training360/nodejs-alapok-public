const { createReadStream, createWriteStream } = require('fs')

const readableStream = createReadStream('./szamarmese.txt', {
  encoding: 'utf8',
  highWaterMark: 11
})

const writeableStream = createWriteStream('./szamarmeseCopy.txt')

readableStream.pipe(writeableStream)
