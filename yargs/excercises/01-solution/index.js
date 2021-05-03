const yargs = require('yargs')
const { id, producer, title } = require('./option')
const { moviesFilePath, moviesPropName } = require('./config')
const MoviesAPI = require('./movies.api')
const MoviesService = require('./movies.service')

const moviesAPI = MoviesAPI(moviesFilePath, moviesPropName)
const { createMovie, removeMovie, editMovie, findMovieById, getAllMovies } = MoviesService(moviesAPI)

yargs
  .version('1.0.0')
  .usage('Usage: $0 <command> [options]')
  .command({
    command: 'get',
    describe: 'Get all movies',
    handler: async () => console.log(await getAllMovies())
  })
  .command({
    command: 'find',
    describe: 'Find a movie by ID',
    builder: { id },
    handler: async (argv) => console.log(await findMovieById(argv.id))
  })
  .command({
    command: 'create',
    describe: 'Create a new Movie',
    builder: { producer, title },
    handler: async (argv) => console.log(await createMovie(argv))
  })
  .command({
    command: 'edit',
    describe: 'Edit a Movie',
    builder: {
      id,
      producer: { ...producer, demandOption: false },
      title: { ...title, demandOption: false }
    },
    handler: async (argv) => console.log(await editMovie(argv))
  })
  .command({
    command: 'remove',
    describe: 'Remove a movie',
    builder: { id },
    handler: async (argv) => console.log(await removeMovie(argv.id))
  })
  .locale('en')
  .strict()
  .help()
  .parse()
