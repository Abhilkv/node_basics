var net = require('net');

var client = net.connect({port:8081}, (connections) => {
    console.log('Client connected ...');
})

client.on('data', (info) => {
    console.log('Information from Server on cl1: ' + info );
});

client.write('Replay from Clent one')

client.on('end', () => {
    console.log('client Disconnected');
})

client.end(() => {
    console.log('connection ended');
})
