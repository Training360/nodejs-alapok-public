const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))

const trucanceAndPrintFile = async (file, length, buffeSize) => {
  const fd = await fs.openAsync(file, 'r+')
  await fs.ftruncateAsync(fd, length)
  const buffer = Buffer.alloc(buffeSize)
  const bytes = await fs.readAsync(fd, buffer, 0, buffer.length, 0)
  if (bytes > 0) console.log(buffer.slice(0, bytes).toString())
  await fs.closeAsync(fd)
}

module.exports = trucanceAndPrintFile
