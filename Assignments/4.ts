var fs = require('fs');

fs.readFile('asyncWrite.txt', 'utf8', (error, data) => {
    if (error) {
      throw error;
    } else {
      console.log('ASYNC Read done: ' + data.toString());
    }
  });