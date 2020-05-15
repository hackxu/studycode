function add(a, b) {
  return a + b
}
function sub(a, b) {
  return a - b
}
function s() {
  
}

var a1 = add.apply(sub, [4, 2])
var a3 = add.apply(s,[4,2])
var a2 = sub.apply(add, [4, 2])
console.log(a3);
console.log(a2);
