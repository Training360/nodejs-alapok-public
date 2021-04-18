const EventEmitter = require('events')

const eventEmitter = new EventEmitter()
eventEmitter.on('speak', () => console.log('Zombie says "Grrrrr"'))
eventEmitter.on('speak', () => console.log('Hungry zombie says "Harr harr"'))
eventEmitter.on('walk', () => console.log('Deads are walking'))

eventEmitter.emit('speak')
eventEmitter.emit('walk')
eventEmitter.emit('eat')
