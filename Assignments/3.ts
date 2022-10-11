var events = require('events');
var eventObj = new events.EventEmitter();

const listenerOne = () => {
    console.log('listener one');
}
eventObj.addListener('myevent', listenerOne );


const listenerTwo = () => {
    console.log('listener Two');
}
eventObj.addListener('myevent', listenerTwo);


eventObj.emit('myevent');

// event listeners
console.log("Number of listeners listening to customEvent is : " + eventObj.listenerCount('myevent'));
console.log("List of listeners :" + eventObj.listeners('myevent'))

eventObj.removeListener('myevent', listenerOne);
console.log('After removing listener')

// removing one listener
console.log("Number of listeners listening to customEvent is : " + eventObj.listenerCount('myevent'));
console.log("List of listeners :" + eventObj.listeners('myevent'))