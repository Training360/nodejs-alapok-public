const MoviesService = (moviesApi) => {
  let movies = moviesApi.get()

  const getAllMovies = () => movies

  const findMovieById = (id) => movies.find(movie => movie.id === id)

  const generateNewMovieId = () => {
    const sortedMovies = [...movies].sort((a, b) => a.id > b.id)
    return sortedMovies[sortedMovies.length - 1].id + 1
  }

  const createMovie = ({ producer, title }) => {
    const movie = { id: generateNewMovieId(), producer, title }
    movies = [...movies, movie]
    moviesApi.save(movies)
    return movie
  }

  const editMovie = ({ id, producer, title }) => {
    movies = movies.map(movie => movie.id === id ? { id, producer, title } : movie)
    moviesApi.save(movies)
    return findMovieById(id)
  }

  const removeMovie = (id) => {
    movies = movies.filter(movie => movie.id !== id)
    moviesApi.save(movies)
  }

  return {
    getAllMovies,
    findMovieById,
    createMovie,
    editMovie,
    removeMovie
  }
}

module.exports = MoviesService
