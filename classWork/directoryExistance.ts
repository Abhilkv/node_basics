const fs = require('fs');

const dir = './fileOperations'

// check if directory exists
fs.access(dir, err => {
  console.log(`Directory ${err ? 'does not exist' : 'exists'}`)
})

// check if directory exists
if (fs.existsSync(dir)) {
    console.log('Directory exists!')
  } else {
    console.log('Directory not found.')
  }