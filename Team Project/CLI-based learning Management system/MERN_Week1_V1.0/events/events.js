// Handles event-driven behavior
const EventEmitter = require('events');

// Create a single EventEmitter instance
const emitter = new EventEmitter();

module.exports = emitter;
