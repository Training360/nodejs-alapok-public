const http = require('http')
const { createReadStream } = require('fs')

const port = 8081

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  createReadStream('./database/movies.json').pipe(res)
}).listen(port)

console.log(`Server srunning at http://127.0.0.1:${port}`)
