// 定义三种状态
const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"
function MyPromise(fn) {
  let self = this; // 缓存当前promise实例
  self.value = null; //成功时的值
  self.error = null; //失败时的原因
  self.status = PENDING
  self.onFulfilledCallbacks = []; //成功的回调函数
  self.onRejectedCallbacks = []; //失败的回调函数

  function resolve(value) {
    if (value instanceof MyPromise) {
      return value.then(resolve, reject)
    }
    // 如果状态是pending才去修改状态为fulfilled并执行成功逻辑
    if (self.status === PENDING) {
      setTimeout(() => {
        self.value = value;
        console.log(self.prototype);
        //resolve时执行成功回调
        self.onFulfilledCallbacks.forEach((callback) => callback(self.value));
      }, 0);
    }
  }

  function reject(error) {
    // 如果状态是pending才去修改状态为rejected并执行成功逻辑
    if (self.status === PENDING) {
      setTimeout(() => {
        self.error = error;
        //reject时执行失败回调 
        self.onRejectedCallbacks.forEach((callback) => callback(self.error)
        )
      }, 0);
    }
  }
  try {
    fn(resolve, reject);
  } catch (e) {
    reject(e)
  }
}
MyPromise.prototype.then = function (onFulfilled, onRejected) {

  const self = this;
  let bridgePromise;
  // 防止使用者不穿成功或失败回调函数,所以成功失败回调都给了默认回调函数
  onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value
  onRejected = typeof onRejected === "function" ? onRejected : error => { throw error };
  if (self.status === FULFILLED) {
    return bridgePromise = new MyPromise((resolve, reject) => {
      setTimeout(() => {
        try {
          let x = onFulfilled(self.value)
          resolvePromise(bridgePromise, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      }, 0);
    })
  }
  if (self.status === REJECTED) {
    return bridgePromise = new MyPromise((resolve, reject) => {
      setTimeout(() => {
        try {
          let x = onRejected(self.error)
          resolvePromise(bridgePromise, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      }, 0);
    })
  }
  if (self.status === PENDING) {
    return bridgePromise = new MyPromise((resolve, reject) => {
      self.onFulfilledCallbacks.push((value) => {
        try {
          let x = onFulfilled(value)
          resolvePromise(bridgePromise, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      });
      self.onRejectedCallbacks.push((error) => {
        try {
          let x = onRejected(error)
          resolvePromise(bridgePromise, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })
    })
  }
  // if (self.status === PENDING) {
  //   //在这里给promise实例注册成功和失败回调
  //   this.onFulfilledCallbacks.push(onFulfilled);
  //   this.onRejectedCallbacks.push(onRejected);
  // } else if (this.status === FULFILLED) {
  //   // 如果状态是fulfilled, 直接执行成功回调, 并将成功值传入
  //   onFulfilled(this.value)
  // } else {
  //   // 如果状态时rejected,直接执行失败回调,并将失败原因 传入
  //   onRejected(this.error)
  // }
}
// catch方法其实是个语法糖,就是只传onRejected不穿onFulfilled的then方法
MyPromise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected)
}

// 用来计息回调函数的返回值x, x可能是普通值也可能是个promise对象
function resolvePromise(bridgePromise, x, resolve, reject) {
  // 2.3.1规范,避免循环引用
  if (bridgePromise === x) {
    return reject(new TypeError('Circular reference'));
  }
  let called = false;
  // 如果x是一个promise
  if (x instanceof MyPromise) {
    // 如果这个promise是pending状态,就在它的then方法里继续执行resolvePromise解析它的结果,直到返回值不是一个pending状态的promise为止
    if (x.status === PENDING) {
      x.then(y => {
        resolvePromise(bridgePromise, y, resolve, reject)
      }, error => {
        reject(error)
      })
    } else {
      x.then(resolve, reject)
    }
    //2.3.3规范,如果x为对象或者函数
    // 如果x是一个普通值,就让bridgePromise的状态fulfilled,并把这个值传递下去
  } else if (x != null && ((typeof x === 'object') || (typeof x === 'function'))) {
    try {
      // 是否是thenable对象(具有then方法的对象/函数)
      // 2.3.3.1将then赋为x.then
      let then = x.then;
      if (typeof then === 'function') {
        // 2.3.3.3如果then是一个函数,以x为this调用then函数,且第一个参数是resolvePromise,第二个参数是rejectPromise
        then.call(x, y => {
          if (called) return;
          called = true;
          resolvePromise(bridgePromise, y, resolve, reject)
        }, error => {
          if (called) return;
          called = true;
          reject(error)
        })
      } else {
        // 2.3.3.4 如果then不是一个函数,则以x为值fulfill promise
        resolve(x)
      }
    } catch (e) {
      // 2.3.3.2 如果在取x.then值时抛出了异常,则以这个异常作为原因将promise拒绝
      if (called) return;
      called = true;
      reject(e)
    }
  } else {
    resolve(x)
  }
}
// let promise = new MyPromise((resolve, reject) => {
//   resolve("同步任务执行")
// })
// 执行测试用例需要用到的代码
MyPromise.deferred = function () {
  let defer = {}
  defer.promise = new MyPromise((resolve, reject) => {
    defer.resolve = resolve;
    defer.reject = reject;
  })
  return defer
}

try {
  module.exports = MyPromise
} catch (e) {

}