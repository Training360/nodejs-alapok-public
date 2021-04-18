class EventEmitter {
  constructor () {
    this.events = []
  }

  on (eventType, listener) {
    this.events[eventType] = this.events[eventType] || []
    this.events[eventType] = [...this.events[eventType], listener]
  }

  emit (eventType) {
    if (this.events[eventType]) {
      this.events[eventType].forEach(listener => listener())
    }
  }
}

module.exports = EventEmitter
