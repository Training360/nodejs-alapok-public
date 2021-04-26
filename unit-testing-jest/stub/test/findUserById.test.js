const findUserById = require('../src/findUserById')

test('findUserById should return a user object', () => {
  const users = [{ id: 1 }]
  const id = 1
  expect(findUserById(users, id)).toEqual(users[0])
})
