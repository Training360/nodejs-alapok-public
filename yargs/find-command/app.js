const yargs = require('yargs')
const movies = require('./database/movies')

yargs
  .version('1.0.0')
  .usage('Usage: <command> [options]')
  .command({
    command: 'get',
    describe: 'Get all movies',
    handler: () => console.log(movies)
  })
  .command({
    command: 'find',
    describe: 'Find a movie by id',
    builder: {
      id: {
        alias: 'i',
        describe: 'Movie ID',
        type: 'number',
        demandOption: true
      }
    },
    handler: ({ id }) => console.log(movies.find(movie => movie.id === id))
  })
  .locale('en')
  .strict()
  .help()
  .parse() // process.argv
