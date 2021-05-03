const { createReadStream } = require('fs')
const { join } = require('path')

const htmlResponse = (res, file) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  createReadStream(join(__dirname, `../views/${file}.html`)).pipe(res)
}

module.exports = htmlResponse
