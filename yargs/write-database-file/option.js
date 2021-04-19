const Option = ({ alias, describe, type = 'string', demandOption = true } = {}) => ({
  alias, describe, type, demandOption
})

const id = Option({
  alias: 'i',
  describe: 'Movie ID',
  type: 'number'
})

const producer = Option({
  alias: 'p',
  describe: 'Film producer'
})

const title = Option({
  alias: 't',
  describe: 'Movide title'
})

module.exports = Object.freeze({
  id,
  producer,
  title
})
