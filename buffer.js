
// const fs = require('fs')

// fs.readFile('C:/Users/user/Downloads/sample1.json',(err,data) => {
//     if(err){
//         throw err
//     } else{
//         console.log(data.toString())
//     }
// })


const net = require('net');
const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log('Received:', data.toString());
  });
});
server.listen(8080);

