const { mkdir, writeFile } = require('fs').promises

const createFolders = (folders) =>
  Promise.all(folders.map(folder => mkdir(folder)))

const createFiles = (files) =>
  Promise.all(files.map(file => writeFile(file, '')))

module.exports = {
  createFolders,
  createFiles
}
