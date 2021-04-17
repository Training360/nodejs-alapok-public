const { resolve, join } = require('path')

console.log(resolve())
console.log(join())
console.log(__dirname)

console.log(resolve('./szamarmese.txt'))
console.log(join(__dirname, './szamarmese.txt'))
