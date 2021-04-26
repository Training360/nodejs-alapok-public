const htmlResponse = require('../utils/htmlResponse')

const index = res => htmlResponse(res, 'index')

const about = res => htmlResponse(res, 'about')

const contact = res => htmlResponse(res, 'contact')

const error404 = res => htmlResponse(res, '404', 404)

module.exports = Object.freeze({
  index,
  about,
  contact,
  error404
})
