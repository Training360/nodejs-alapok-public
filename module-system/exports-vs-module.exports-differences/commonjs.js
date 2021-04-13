/* eslint-disable prefer-const */
let MODULE_EXPORTS = {}
const REQUIRE = () => MODULE_EXPORTS

const even = arr => arr.filter(item => item % 2 === 0)

MODULE_EXPORTS.even = even

console.log('module.exports', MODULE_EXPORTS)
console.log('require', REQUIRE())

let EXPORTS = MODULE_EXPORTS

console.log('exports', EXPORTS)

const pi = 3.14

EXPORTS.pi = pi

console.log('------------------------')
console.log('module.exports', MODULE_EXPORTS)
console.log('require', REQUIRE())
console.log('exports', EXPORTS)
