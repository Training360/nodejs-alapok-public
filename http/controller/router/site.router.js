const SiteController = require('../controller/site.controller')

const SiteRouter = {
  '/': res => SiteController.index(res),
  '/about': res => SiteController.about(res),
  '/contact': res => SiteController.contact(res),
  '/404': res => SiteController.error404(res)
}

module.exports = Object.freeze(SiteRouter)
