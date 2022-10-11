var fs = require('fs');
var readLine = require('readline-sync');

var search = readLine.question('Type the word to search...');


function occurrences(string, subString, allowOverlapping) {
    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}

fs.readFile('sample.txt', (error, data) => {
    if(error) {
        throw error;
    } else {
        const stringData = data.toString();
        const count = occurrences(stringData, search, 'false');
        console.log('total count is : ' + count)
    }
})