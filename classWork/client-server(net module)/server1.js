var net = require('net');

var server = net.createServer((connections) => {
    console.log('Server initiated ...');

    connections.write('Message from Server')
    
    connections.on('data', (info) => {
        console.log('Information from Client: ' + info );
    });

    connections.on('end', () => {
        console.log('Disconnected');
    })
})

server.listen(8081, () => {
    console.log('Server is listening to posrt 8081');
})