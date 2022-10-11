var events = require('events');
var eventobj = new events.EventEmitter();

eventobj.on('customEvent', (event) => { console.log(`Event name is: ${eventobj.eventNames()}`)})

eventobj.emit('customEvent');