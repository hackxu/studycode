let obj = {};
let song = '发如雪';
obj.singer = '周杰伦';

Object.defineProperty(obj, 'music', {
  // 1. value: '七里香',
  configurable: true,     // 2. 可以配置对象，删除属性
  // writable: true,         // 3. 可以修改对象
  enumerable: true,        // 4. 可以枚举
  // ☆ get,set设置时不能设置writable和value，它们代替了二者且是互斥的
  get() {     // 5. 获取obj.music的时候就会调用get方法
    return song;
  },
  set(val) {      // 6. 将修改的值重新赋给song
    song = val;
  }
});

// 下面打印的部分分别是对应代码写入顺序执行
console.log(obj);   // {singer: '周杰伦', music: '七里香'}  // 1

for (let key in obj) {
  console.log(key);

}

// 打造mvvm
function Mvvm(options = {}) {
  this.$option = options;
  let data = this._data = this.$options.data
  observe(data);
}

function Observe(data) {
  for (let key in data) {
    let val = data[key]
    observe(val)
    Object.defineProperty(data, key, {
      configurable: true,
      get() {
        return val
      },
      set(newVal) {
        if (val === newVal) { return }
        val = newVal
        observe(newVal)
      }
    })
  }
}
function observe(data) {
  if (!data || Object.prototype.toString.call(data) !== '[object Object]') return
  return new Observe(data)
}
function Dep() {
  this.subs = []
}
Dep.prototype = {
  addSub(sub) {
    this.subs.push(sub)
  },
  notify() {
    this.subs.forEach(sub => sub.update())
  }
}

function Watcher(fn) {
  this.fn = fn
}
Watcher.prototype.update = function () {
  this.fn()
}

let watcher = new Watcher(() => console.log(111))
let dep = new Dep()
dep.addSub(watcher)
dep.addSub(watcher)
dep.notify()