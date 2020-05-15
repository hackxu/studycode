// 判断对象的数据类型
const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target)
const isArray = isType("Array")
console.log(isArray([]));

// 循环实现数组 map 方法

const selfMap = function (fn, context) {
  let arr = Array.prototype.slice.call(this)
  let mappedArr = Array()
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue
    mappedArr[i] = fn.call(context, arr[i], i, this)
  }
  return mappedArr
}

Array.prototype.selfMap = selfMap
console.log(Array.prototype);

[1, 2, 3].selfMap(number => number * 2)

// 使用 reduce 实现数组 map 方法
const selfMap2 = function (fn, context) {
  let arr = Arr.prototype.slice.call(this)
  return arr.reduce((pre, cur, index) => {
    return [...pre, fn.call(context, cur, index, this)]
  })

}

// 循环实现数组filter方法
const selfFilter = function (fn, context) {
  let arr = Array.prototype.slice.call(this)
  let filteredArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue
    fn.call(context, arr[i], i, this) && filteredArr.push(arr[i])
  }
}
// 函数柯里化
function curry(fn) {
  if (fn.length <= 1) return fn
  const generator = (...args) => {
    console.log('args', ...args);
    console.log('fn', fn);

    if (fn.length === args.length) {
      console.log("args+", args);

      return fn(...args)
    } else {
      return (...args2) => {
        console.log("args2", ...args2);

        return generator(...args, ...args2)
      }
    }
  }
  return generator
}
let add = (a, b, c, d) => a + b + c + d
const curriedAdd = curry(add)
console.log(curriedAdd(5)(6)(7)(8));

// 函数柯里化占位符
// const curry = (fn, placeholder = '_') => {
//   curry.placeholder = placeholder
//   if (fn, length <= 1) return fn
//   let argsList = []
//   const generator = (...args) => {
//     let currentPlaceholderIndex = -1
//     args.forEach(arg => {
//       let placeholderIndex = argsList.findIndex(
//         item => item === curry.placeholder
//       )
//       if (placeholderIndex < 0) {
//         currentPlaceholderIndex = args.push(arg) - 1
//       } else if (placeholderIndex !== currentPlaceholderIndex) {
//         argsList[placeholderIndex] = arg
//       } else {
//         argsList.push(arg)
//       }
//     });
//     let realArgList = argsList.filter(arg => arg !== curry.placeholder)
//     if (realArgList.length === fn.length) {
//       return fn(...argsList)
//     } else if (realArgList.length)
//   }
// }

// 函数防抖
const debounce = (func, time = 17, options = { leading: true, context: null }) => {
  let timer;
  const _debounce = function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    if (options.leading && !timer) {
      timer = setTimeout(null, time)
      func.apply(options.context, args)
    } else {
      timer = setTimeout(() => {
        func.apply(options.context, args)
      }, time);
    }
  }
  _debounce.cancel = function () {
    clearTimeout(timer)
    timer = null
  }
  return _debounce
}

// 图片懒加载 getBoundClientRect 的实现方式，
let imgList = [...document.querySelectorAll('img')]
let num = imgList.length

let lazyLoad = (function () {
  let count = 0;
  return function () {
    let deleteIndexList = [];
    imgList.forEach((img, index) => {
      let rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        img.src = img.dataset.src
        deleteIndexList.push(index)
        count++
        if (count === num) {
          document.removeEventListener('scroll', lazyLoad)
        }
      }
    });
    imgList = imgList.filter((_, index) => !deleteIndexList.includes(index))
  }
})()

// 图片懒加载 intersectionOberver
let imgList = [...document.querySelectorAll('img')]

let lazyLoad = function () {
  let observer = new IntersectionObserver(entries => {
    console.log(entries);
    
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.src = entry.target.dataset.src
        observer.unobserve(entry.target)
      }
    })
  })
  imgList.forEach(img => {
    observer.observe(img)
  });
}