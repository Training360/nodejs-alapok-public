const { findById, add, edit, remove } = require('./utils')

const MoviesService = (MoviesAPI) => {
  let moviesPromise = MoviesAPI.get()

  const getAllMovies = async () => await moviesPromise

  const findMovieById = async (id) =>
    findById(await moviesPromise, id)

  const createMovie = async ({ title, producer }) => {
    moviesPromise = add(await moviesPromise, { title, producer })
    await MoviesAPI.save(moviesPromise)
    return await moviesPromise[moviesPromise.length - 1]
  }

  const editMovie = async ({ id, title, producer }) => {
    moviesPromise = edit(await moviesPromise, id, { title, producer })
    await MoviesAPI.save(moviesPromise)
    return findById(moviesPromise, id)
  }

  const removeMovie = async (id) => {
    moviesPromise = remove(await moviesPromise, id)
    await MoviesAPI.save(moviesPromise)
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
