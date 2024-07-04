const http = require('http');
const fs = require('fs');
const { extractFilename } = require('./utils/extractFileName')

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/upload/base64') {
    let body = [];
    let fileName = "";

    req.on('data', chunk => {
      body.push(chunk);
    });

    req.on('end', () => {
      try {    
        fileName = extractFilename(body.toString());
        console.log('Extracted filename:', fileName);
      } catch (error) {
        console.error('Error extracting filename:', error.message);
      }

      const buffer = Buffer.concat(body);

      fs.writeFile(`${__dirname}/public/${fileName}`, buffer.toString('base64'), (err) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error saving file');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('File uploaded successfully');
      });
    });

  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method not allowed');
  }

});

server.listen(8000, () => {
  console.log('Server is running on port 8000');
});