const os = require('os');

console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('CPUs:', os.cpus().length);
console.log('Free Memory:', os.freemem());
console.log('Total Memory:', os.totalmem());
console.log('Home Directory:', os.homedir());
console.log('Hostname:', os.hostname());
console.log('OS Type:', os.type());
console.log('OS Release:', os.release());
console.log('Uptime:', os.uptime(), 'seconds');
