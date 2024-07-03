// const fs = require('fs');

// // writable stream
// const writableStream = fs.createWriteStream('C:/Users/user/Downloads/sample1.json');
// writableStream.write('juafisdughauifggyf ');
// writableStream.write('World!');
// writableStream.end();

// // readable stream
// const readableStream = fs.createReadStream('C:/Users/user/Downloads/sample1.json', { encoding: 'utf8' });
// readableStream.on('data', (chunk) => {
//   console.log('Received chunk:', chunk);
// });

// readableStream.on('end', () => {
//   console.log('No more data.');
// });


// const fs = require('fs');
// const server = require('http').createServer();

// server.on('request', (req, res) => {
//   fs.readFile('C:/Users/user/Downloads/sample1.json', (err, data) => {
//     if (err) throw err;
  
//     res.end(data);
//   });
// });

// server.listen(8000);

const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  const src = fs.createReadStream('C:/Users/user/Downloads/sample1.json');
  src.pipe(res);
});

server.listen(8000);