const convertToUpperCase = (str) =>
  new Promise((resolve, reject) =>
    typeof str === 'string'
      ? resolve(str.toUpperCase())
      : reject(new TypeError())
  )

module.exports = convertToUpperCase
