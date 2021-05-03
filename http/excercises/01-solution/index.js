const http = require('http')
const SiteRouter = require('./router/site.router')
const port = process.env.PORT || 8080
const logger = require('./utils/logger')

http
  .createServer(({ url, method }, res) => {
    SiteRouter[url]
      ? SiteRouter[url](res)
      : SiteRouter['404']()
    logger(url, method)
  }
  )
  .on('error', (err) => console.log(`Server error: ${err.message}`))
  .on('listening', () => console.log(`Server is running at http://127.0.0.1:${port}`))
  .listen(port)
