const findUserById = (users, id) =>
  users.find(user => user.id === id) || null

module.exports = findUserById
