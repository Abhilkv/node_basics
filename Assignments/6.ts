var fs = require('fs');
var readLine = require('readline-sync');

var search = readLine.question('Enter word to search...');

fs.readFile('sample.txt', (error, data) => {
    if (error) {
        throw error;
    } else {
        let stringData = data.toString();
        const result = stringData.includes(search);
        console.log(`${result? 'String found' : 'String not found'}`);
    }
})