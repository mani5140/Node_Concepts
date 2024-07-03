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
