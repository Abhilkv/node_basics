var fs = require('fs');

var data = "Sample data which is used to write into the file for assignments";

var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data);

writeStream.end();
writeStream.on('finish', () => { console.log('finished writing ...')})
writeStream.on('error', () => { console.log('Error on  writing ...')})
