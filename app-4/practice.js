const fs = require('fs');
const path = require('path');

fs.appendFile(path.join(__dirname, 'text.txt'), 'hello', (err) => {if (err) {console.log(err)} else {console.log('success')}});

fs.readFile(__dirname + '/text.txt', 'utf8', (err, data) => {err ? console.log(err) : console.log(data)});

fs.writeFile(__dirname + '/text.txt', 'go home', (err) => {err ? console.log(err) : console.log('success')});

// fs.rename(__dirname + '/text.txt', __dirname + 'text.txt', (err) => {err ? console.log(err) : console.log('success')});

fs.unlink(__dirname + '/text.txt', (err) => {err ? console.log(err) : console.log('success')})