var fs = require('fs');
var pl = require('stream');

fs.createReadStream('output.txt').pipe(fs.createWriteStream('outPut2.txt'))

pl.pipeline(fs.createReadStream('output.txt'), fs.createWriteStream('output3.txt'), (err) => {
    if (err) {
        console.log('writing to output3 failed')
    } else {
        console.log('success');
    }
})