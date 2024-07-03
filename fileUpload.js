const http = require("http");

const server = http.createServer((req, res) => {
  try {
    if (req.method === "POST" && req.url === "/") {
      let body = [];
      req.on('data', chunk => {
        body.push(chunk);
        console.log(chunk);
      });

      req.on('end', () => {
        const buffer = Buffer.concat(body);
        const base64Data = buffer.toString();
        console.log(base64Data);

        res.setHeader("Content-Type", "text/plain");
        res.statusCode = 200;
        res.write("File uploaded successfully !!!");
        res.end();
      });

    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Server Error');
  }
});

server.listen(8000, () => {
  console.log(`Server is running on port: ${8000}`);
});
