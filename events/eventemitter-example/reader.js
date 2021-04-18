const { readFile } = require('fs').promises

const reader = (eventEmitter) => {
  const readContent = async (file) => {
    console.log('Reading process started!\nFile:', file)
    try {
      const data = await readFile(file, 'utf8')
      console.log('Reading process done successfully')
      eventEmitter.emit('print', data)
    } catch (error) {
      eventEmitter.emit('error', error)
    }
  }

  const printContent = (content) => {
    console.log('Content: \n', content)
    eventEmitter.emit('close')
  }

  const errorHandler = (err) => {
    console.log('An error occured', err.message)
  }

  const close = () => {
    console.log('Printing process done. App closed.')
  }

  return {
    readContent,
    printContent,
    errorHandler,
    close
  }
}

module.exports = reader
