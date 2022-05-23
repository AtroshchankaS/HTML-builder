/*В связи с наличем багов в гитбаш версий 35.1-35.4 данный таск лучше проверять в других консолях (powershell)*/

const fs = require('fs');
const path = require('path');
const {stdin, stdout, exit} = process;

const cws = fs.createWriteStream(path.join(__dirname, 'text.txt'), 'utf8');

stdout.write('Введите пожалуйста текст\n');
stdin.on('data', chunk => {
  (chunk.toString().trim() !== 'exit') ? cws.write(chunk) : exit();
});

process.on('exit', () => stdout.write('До новых встреч.'));
process.on('SIGINT', exit);


