// promise输入 012345
// const tasks = []
// const output = (i) => new Promise((resolve) => {
//   setTimeout(() => {
//     console.log(new Date, i);
//     resolve()
//   }, 1000 * i);
// })

// for (var i = 0; i < 5; i++) {
//   tasks.push(output(i))
// }

// Promise.all(tasks).then(() => {
//   setTimeout(() => {
//     console.log(new Date, i);

//   }, 1000);
// })
// for (let i = 0; i < 5; i++) {
//   // const element = 5
//   console.log(i)
// }

// es7输出012345
// const sleep = (e) => new Promise((resolve) => {
//   setTimeout(resolve, e)
// })
const sleep = (timeountMS) => new Promise((resolve) => {
  setTimeout(resolve, timeountMS)
});


(async () => {
  for (var i = 0; i < 5; i++) {
    if (i > 0) {
      await sleep(1000)
    }
    console.log(new Date, i);
  }

  await sleep(1000)
  console.log(new Date, i);
})()
// async function sleep(ms) { 
//   await new Promise((resolve) => { 
//     setTimeout(resolve, ms); 
//   }); 
// } 

// async function PrintNumber(ms) {
//   for (var i = 0; i < 5; i++) {
//     if (i > 0) {
//       await sleep(ms)
//     }
//     await sleep(ms)
//     console.log(new Date, i);
//   }
// }

// PrintNumber(1000)