const generateUserList = (users) =>
  users.map(user => ({
    fullName: `${user.firstName} ${user.lastName}`,
    isAdult: user.age >= 18
  })
  )

const getUserNames = (users) =>
  users.map(user => `${user.firstName} ${user.lastName}`).join()

module.exports = Object.freeze({
  generateUserList,
  getUserNames
})
