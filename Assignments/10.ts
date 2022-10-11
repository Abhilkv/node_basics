var fs = require('fs');

fs.mkdirSync('testFolder');
console.log('folderCreated')

fs.writeFile('./testFolder/sample.txt', "sample text data", 'utf8', (err) => {
    if (err) {
        console.log('File creation failed');
    } else {
        console.log('File creation done')
    }
});

fs.unlink('./testFolder/sample.txt', (err) => {
    if (err) {
        console.log('File deletion failed');
    } else {
        console.log('File deletion done')
    }
})

fs.rmdirSync('testFolder');