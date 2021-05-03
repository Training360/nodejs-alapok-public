
const SiteController = require('../controller/site.controller')

const SiteRouter = {
  '/': (res) => SiteController.index(res),
  '/about': (res) => SiteController.about(res),
  '/contact': (res) => SiteController.contact(res),
}

module.exports = Object.freeze(SiteRouter)
