var event = require('events');
var eventObj = new event.EventEmitter();

var listnerOne = function listnerOne() {
    console.log('Listening by one');
};

var listnerTwo = () => {
    console.log('Listening by two');
};

eventObj.on('customEvent', listnerOne);

eventObj.addListener('customEvent-two', listnerTwo);

//print listeners name
console.log("Number of listeners listening to customEvent is : " + eventObj.listenerCount('customEvent'));
console.log("List of listeners :" + eventObj.listeners('customEvent'))

eventObj.emit('customEvent-two');
eventObj.emit('customEvent');
