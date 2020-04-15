class Store {
  get state() {
    return this._vm._data.$$state
  }
}

// function resetStoreVm(store,state,hot) {
//   store._vm = new Vue({
//     data:{
//      $$state:state 
//     }
//   })
// }
function resetStoreVM(store,state,hot) {
  
}
// functon resetStoreVm(store,state,hot){
//   setTimeout(() => {
    
//   }, delayInms);
// }
function resetStoreVm(store, state, hot) {
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed
  })
}

// function log(url) {
//   console.log(url);
//   console.log("不应该有摄像头,有的话那就恶心了啊");
// }
// function initUse(Vue) {
//   Vue.use = function (plugin) {
//     // var installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
//   }
//   if (installedPlugins.indexOf(plugin) > -1) {
//     return this
//   }
//   var args = toArray(arguments, 1)
//   args.unshift(this)
//   if (typeof plugin.install === "function") {
//     plugin.install.apply(plugin, args)
//   } else if (typeof plugin === "function") {
//     plugin.apply(null, args)
//   }
//   installedPlugins.push(plugin)
//   return this
// }
function initUse(Vue) {
  // Vue.use

}
function initUse(Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
  }
  if (installedPlugins.indexOf(plugin) > -1) {
    return this
  }
  // Vue.use =function (plugin) {
  //   var installedPlugins =  (this._installedPlugins || (this._installedPlugins = []));

  // }

  var args = toArray(arguments, 1)
  args.unshift(this)
  if (typeof plugin.install === "function") {
    plugin.install.apply(plugin, args)
  } else if (typeof plugin === "function") {
    plugin.apply(null, args)
  }
  installedPlugins.push(plugin)
  return this
}



setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(function () {
    console.log('promise1');
  })
}, 0);
setTimeout(() => {
  console.log("timer1");

}, 0);

setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(function () {
    console.log("promise1");
  })
}, 0)

setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(function () {
    console.log("promise1");

  })

}, 0);
// setTimeout(() => {
//   console.log;

// }, 300);

setTimeout(() => {
  console.log("timer2");
  Promise.resolve().then(function () {
    console.log('promise2');
  })
}, 0);

// 判断小数是否相等
function equal(number1, number2) {
  return Math.abs(number1 - number2) < Math.pow(2, -52)
}
console.log(equal);

