const yargs = require('yargs')
const { productsFilePath, moviesPropName: productsPropName } = require('./config')
const ProductsAPI = require('./products.api')
const ProductsService = require('./products.service')

const productsAPI = ProductsAPI(productsFilePath, productsPropName)
const { sum, avg, lessThan } = ProductsService(productsAPI)

yargs
  .version('1.0.0')
  .usage('Usage: $0 <command> [options]')
  .command({
    command: 'sum',
    describe: 'Sum of the prices of the products in stock',
    handler: async () => console.log(await sum())
  })
  .command({
    command: 'avg',
    describe: 'Avarage products price',
    handler: async () => console.log(await avg())
  })
  .command({
    command: 'lessthan',
    describe: 'List products where count is less than',
    builder: {
      count: {
        alias: 'c',
        describe: 'product count',
        type: 'number',
        demandOption: true
      }
    },
    handler: async (argv) => console.log(await lessThan(argv.count))
  })
  .locale('en')
  .strict()
  .help()
  .parse()
