var readLine = require('readline-sync');
var fs = require('fs');

const folderName = readLine.question('Enter name of folder...');
fs.mkdirSync(folderName);

fs.rmdirSync(folderName);