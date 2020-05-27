// import { clearInterval } from "timers";

// 重复执行
Promise.retry = (fn, count = 10) => {
  return new Promise(async (resolve, reject) => {

    while (count) {
      console.log(count);

      try {
        let res = await fn()
        resolve(res)
        return
      } catch (e) {
        if (!count) reject(e)
        count--
      }

    }
  })
}

getFlag = function () {
  let rad = Math.random()
  setTimeout(() => {
    console.log(rad);
    
    return rad > 0.9 ? Promise.resolve(1) : Promise.reject(-1);
  }, 3000);
};
Promise.retry(getFlag)
  .then((result) => {
    console.log("success", result);

  }).catch((err) => {
    console.log("err", err);

  });