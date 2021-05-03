const EventEmitter = require('events')

class Logger extends EventEmitter {
  success (message) {
    console.log('\x1b[31m', message)
  }

  error (message) {
    console.log('\x1b[32m', message)
  }
}

module.exports = Logger
