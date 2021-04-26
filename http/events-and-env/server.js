const http = require('http')
const SiteRouter = require('./router/site.router')

const port = process.env.PORT || 8080

http.createServer(({ url }, res) => {
  SiteRouter[url]
    ? SiteRouter[url](res)
    : SiteRouter['/404'](res)
})
  .on('error', err => console.log(`Server error: ${err.message}`))
  .on('listening', () => console.log(`Run: http://127.0.0.1:${port}`))
  .listen(port)
