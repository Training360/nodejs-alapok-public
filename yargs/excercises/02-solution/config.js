const path = require('path')

const config = {
  productsFilePath: path.join(__dirname, './database/products.json'),
  productsPropName: 'products'
}

module.exports = Object.freeze(config)
