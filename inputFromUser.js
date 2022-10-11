var readLine = require('readline-sync');

var data = 0;

data = readLine.question('Enter number...');
console.log('Data is :  '+ data);

console.log('Result: '+ data ** data );