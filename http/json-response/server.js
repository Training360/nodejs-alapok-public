const http = require('http')
const movies = require('./database/movies')

const port = 8080

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  res.end(JSON.stringify(movies))
}).listen(port)

console.log(`Server srunning at http://127.0.0.1:${port}`)
