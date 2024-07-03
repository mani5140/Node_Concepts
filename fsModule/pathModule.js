// const path = require('node:path');

// const notes = 'C:/Users/user/Downloads/pic2.jpg';

// console.log(path.dirname(notes))
// console.log(path.basename(notes))
// console.log(path.extname(notes))


// const fs = require('node:fs/promises');
// // Or const fs = require('fs').promises before v14.
// async function example() {
//   let filehandle;
//   try {
//     filehandle = await fs.open('C:/Users/user/Downloads/sample1.json', 'r');
//     console.log(filehandle.fd);
//     console.log(await filehandle.readFile({ encoding: 'utf8' }));
//   } finally {
//     if (filehandle) await filehandle.close();
//   }
// }
// example();



// const fs = require('node:fs/promises');

// async function example() {
//   try {
//     const data = await fs.readFile('C:/Users/user/Downloads/sample1.json', { encoding: 'utf8' });
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// example();


const fs = require('node:fs');

try {
  const data = fs.readFileSync('C:/Users/user/Downloads/sample1.json', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}


