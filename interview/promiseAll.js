let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("1");
    resolve("1")
  }, 1000);
})
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("2");
    resolve("2")
  }, 2000);
})
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("3");
    resolve("3")
  }, 3000);
})

let p = Promise.all([p1, p2, p3])

p.then((data) => {
  console.log("data",data);

}, function (err) {
  console.log(err);

})