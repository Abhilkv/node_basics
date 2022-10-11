var os = require('os');

console.log('CPU architecture: '+ os.arch());
console.log('CPU Info: '+ JSON.stringify(os.cpus()));
console.log('Free memory:  '+ os.freemem());
console.log("Platform: " + os.platform());
console.log("HostName: " + os.hostname());
console.log("version: " + os.version());
console.log("hom directory: " + os.homedir());