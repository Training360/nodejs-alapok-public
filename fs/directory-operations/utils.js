const { access, mkdir, writeFile, readdir, rmdir, rename } = require('fs').promises

const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1)

const createStarterTemplate = () => {
  access('views')
    .catch(() => mkdir('views'))
    .then(() => writeFile('./views/index.html', 'INDEX'))
    .then(() => writeFile('./views/about.html', 'ABOUT'))
    .then(() => readdir('views'))
    .then(console.log)
    .then(() => rmdir('tmp'))
    .then(() => {
      const folder = 'controllers'
      rename(folder, capitalizeFirstLetter(folder))
    })
    .catch((err) => console.log('\x1b[31m', err.message))
}

module.exports = createStarterTemplate
