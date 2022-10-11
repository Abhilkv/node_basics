var fs = require('fs');

// create file
fs.writeFile('sample.txt', "sample text data", 'utf8', (err) => {
    if (err) {
        console.log('File creation failed');
    } else {
        console.log('File creation done')
    }
});

// delete file
fs.unlink('sample.txt', (err) => {
    if (err) {
        console.log('File deletion failed');
    } else {
        console.log('File deletion done')
    }
})