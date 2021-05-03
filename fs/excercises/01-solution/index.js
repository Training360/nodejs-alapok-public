const { createFolders, createFiles } = require('./utils')

const folders = ['controllers', 'routers', 'views']

const files = [
  './controllers/site.controller.js',
  './routers/site.router.js',
  './views/index.html',
  './app.js'
]

createFolders(folders)
  .then(() => createFiles(files))
