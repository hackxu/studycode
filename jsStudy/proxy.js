let handler = {
  get: function (target, name) {
    return name in target ? target[name] : 37
  }
};
let p = new Proxy({}, handler)

p.a = 1
p.b = undefined

console.log(p.a, p.b);
// 验证
let validator = {
  set: function (obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError("the age is not an interger")
      }
      if (value > 200) {
        throw new RangeError('the age seems invalid')
      }
    }
    obj[prop] = value
  }
}

let person = new Proxy({}, validator)

person.age = 100

// 扩展构造函数



function extend(sup, base) {
  var descriptor = Object.getOwnPropertyDescriptor(
    base.proptotype, "constructor"
  )
  base.proptotype = Object.create(sup.proptotype)
  var handler = {
    construct: function (target, args) {
      var obj = Object.create(base.proptotype)
      this.apply(target, obj, args)
      return obj
    },
    apply: function (target, that, args) {
      sup.apply(that, args)
      base.apply(that, args) 
    }
  }
  var proxy = new Proxy(base, handler)
  descriptor.value = proxy;
  Object.defineProperty(base.proptotype, "constructor", descriptor)
  return proxy
}

// browsers
let products = new Proxy({
  browsers: ["Internet Explorer", 'Netscape']
}, {
  get: function (obj, prop) {
    if (prop === 'latestBrowser') {
      return obj.browsers[obj.browsers.length - 1]
    }
    return obj[prop]
  },
  set: function (obj, prop, value) {
    // 附加属性
    if (prop === 'latestBrowser') {
      obj.browsers.push(value)
      return
    }
    // 如果不是数组则进行转换
    if (typeof value === 'string') {
      value = [value]
    }
    obj[prop] = value
  }
})