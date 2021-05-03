const path = require('path')

const config = {
  moviesFilePath: path.join(__dirname, './database/movies.json'),
  moviesPropName: 'movies'
}

module.exports = Object.freeze(config)
