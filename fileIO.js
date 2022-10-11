// Writing to file

var fs = require('fs');

var data = "Sample data which is used to write into the file";

var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data);

writeStream.end();
writeStream.on('finish', () => { console.log('finished writing ...')})
writeStream.on('error', () => { console.log('Error on  writing ...')})


// Reading  from  file
var readStream = fs.createReadStream('output.txt');
console.log('Reading happens');

var data = "";
readStream.on('data', (readData) => {
    data += readData;
});

readStream.on('end', () => { console.log('Reading finished: '+ data)})
readStream.on('error', () => { console.log('error on reading')})

// ASYNC WRITE

const file = 'asyncWrite.txt';
const data2 = 'Hello, World! text';

fs.writeFile(file, data2, 'utf8', error => {
  if (error) {
    throw error;
  } else {
    console.log(`ASYNC wrote done: '${data2}' to ${file}.`);
  }
});

fs.readFile('asyncWrite.txt', 'utf8', (error, data) => {
  if (error) {
    throw error;
  } else {
    console.log('ASYNC Read done: ' + data);
  }
});