const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', (start, end) => {
    setTimeout(() => console.log(`started from ${start} to ${end}`),2000)
    
  });

module.exports = {eventEmitter}
  
