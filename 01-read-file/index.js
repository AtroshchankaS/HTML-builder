const fs = require ('fs');
const path = require('path');

const createPaht = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(createPaht);
readStream.on('data', (chanc) => {
    console.log(chanc.toString());
})