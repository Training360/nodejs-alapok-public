const http = require('http')
const port = 8080

http.createServer((req, res) => {
  res.write('Hellooooo! Holy Node!')
  res.end()
}).listen(port)

console.log(`Server is running at http://127.0.0.1:${port}`)
