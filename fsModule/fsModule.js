const fs = require('node:fs/promises');

async function example() {
  try {
    const stats = await fs.stat('C:/Users/user/Downloads/pic2.jpg');
    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.size)
    console.log(stats)

  } catch (err) {
    console.log(err);
  }
}
example();

// readFile() - callback
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readFileSync() - Synchronous version
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

// readFile() - Promise .then()
// fs.readFile('./test.txt', 'utf8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// readFile() - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile('./test.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// writeFile()

const writeFile = async () => {
  try {
    await fs.writeFile('./test.txt', 'Hello, I am writing to this file');
    console.log('File written to...');
  } catch (error) {
    console.log(error);
  }
};

// appendFile()
const appendFile = async () => {
  try {
    await fs.appendFile('./test.txt', '\nThis is appended text');
    console.log('File appended to...');
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();