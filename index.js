const fs = require('fs');
const pug = require('pug');
const data = require('./data.json');

const compiledFunction = pug.compileFile('./index.pug');

const html = compiledFunction({data: data});

const stream = fs.createWriteStream('./index.html');

stream.once('open', (fd) => stream.end(html));