const movies = [
  { title: 'Flipper', emoji: '🐬' },
  { title: 'Game Of Thrones', emoji: '🥶' },
  { title: 'Tenacious D', emoji: '🎸' },
  { title: 'Harry Potter', emoji: '⚡' },
  { title: 'Hunger Games', emoji: '🐦' },
  { title: 'Conan the Barbarian', emoji: '⚔️' },
  { title: 'Tremors', emoji: '🐛' },
  { title: 'E.T. the Extra-Terrestrial', emoji: '👾' }
]

const findMoviesByTitle = title =>
  movies.filter(movie => movie.title.includes(title))

module.exports = findMoviesByTitle
