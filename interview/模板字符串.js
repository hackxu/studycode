// let str = "{{name}}很name厉害，才{{age}}岁"

// var re = new RegExp("{{name}}", 'g')
// console.log(str.match(re));

// let obj = {name: '二月', age: 15}
// function test(str, obj){
//     let _s = str.replace(/\{\{(\w+)\}\}/g, '$1')
//     let result
//     for(let k in obj) {
//       _s = _s.replace(new RegExp(k, 'g'), obj[k])
//     }
//   return _s
// }
// const s = test(str, obj)
// console.log(s);
// var arr = [1, 2, 3]
// var arr2 = arr
// arr2[2] = 6
// var arr3 = [...arr,...arr2,4, 5, 6]
// // arr2 = [...arr3, 7, 8, 9]
// console.log(arr3);
// // 引用数据类型的复制，引用数据类型按引用传值
// var obj1 = {
//   a: 1,
//   b: 2
// }
// var obj2 = obj1;
// obj2.a = 3;
// console.log(obj1.a); 
// console.log(obj2.a); 

var b = 10;
(function b() {
  var b = 20
  console.log(this.b);
})()