var fs = require('fs');

fs.readFile('sample.txt', (error, data) => {
    if (error) {
        throw error;
    } else {
        const lines = data.toString().split('\n');
        let words =0;
        let charecters =0;
        for (let i of lines) {
            const lineWords = i.split(' ');
            words += lineWords.length;
            for (let j of lineWords) {
                const chars = j.split('');
                charecters += chars.length;
            }
        }
        console.log(`lines : `+ lines.length);
        console.log(`words : `+ words);
        console.log(`Charecters : `+ charecters);
    }
})