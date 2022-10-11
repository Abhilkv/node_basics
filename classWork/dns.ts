var dns = require('dns');

dns.lookup('www.google.con.in', (err, address, family) => {
    console.log('Address : ' + address);
    console.log('Family : ' + family);
});

dns.resolve4('www.swigy.com', (err, address) => {
    if(err) {
        console.log('error occured');
        throw err;
    }
    console.log(`Address : ${JSON.stringify(address)}`);
})
