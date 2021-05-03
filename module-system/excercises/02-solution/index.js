const lib = require('./lib')

const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 16
  }
]

console.log(lib.generateUserList(users))
console.log(lib.getUserNames(users))

// try to override
lib.getUserNames = 10
console.log(lib.getUserNames)
