console.log('Starting App');

setTimeout(() => {
  console.log("inside callback")
}, 2000);

setTimeout(() => {
  console.log("test")
}, 0);

console.log('Finishing App');

console.log('Starting App');

setTimeout(() => {
  console.log("inside callback")
}, 1000);

setTimeout(() => {
  console.log("test")
}, 3000);

console.log('Finishing App');
