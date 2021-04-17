const { createReadStream } = require('fs')

const readableStream = createReadStream('./szamarmese.txt', {
  encoding: 'utf8',
  highWaterMark: 11
})

readableStream.on('data', (chuck) => {
  // console.log(chuck)
  process.stdout.write(chuck)
})
