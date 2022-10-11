var events = require('events');
var eventObj = new events.EventEmitter();

eventObj.on('customEvent', () => { console.log('Listerner one')});
eventObj.on('customEvent', () => { console.log('Listerner Two')});

eventObj.emit('customEvent');
