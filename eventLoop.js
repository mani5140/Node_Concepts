// A process.nextTick callback is added to process.nextTick queue.
// A Promise.then() callback is added to promises microtask queue.
// A setTimeout, setImmediate callback is added to macrotask queue.

// Event loop executes tasks in process.nextTick queue first,
// and then executes promises microtask queue, and then executes macrotask queue.


const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');

const start = () => {
  console.log('start');
  setImmediate(baz);
  new Promise((resolve, reject) => {
    resolve('bar');
  }).then(resolve => {
    console.log(resolve);
    process.nextTick(zoo);
  });
  process.nextTick(foo);
};

start();



// console.log('Hello => number 1');

// setImmediate(() => {
//   console.log('Running before the timeout => number 3');
// });

// setTimeout(() => {
//   console.log('The timeout running last => number 4');
// }, 0);

// process.nextTick(() => {
//     console.log('Running at next tick => number 2'),4000
// });