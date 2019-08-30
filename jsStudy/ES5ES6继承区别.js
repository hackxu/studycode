// new Promise(resolve => {
//   resolve(1);
//   Promise.resolve().then(() => console.log(2));
//   console.log(4)
// }).then(t => console.log(t));
// console.log(3);


const promise = new Promise((resolve, reject) => {
  console.log(1)
  resolve()
  console.log(2)
})

promise.then(() => {
  console.log(3)
})

console.log(4)