var triangle = { a: 1, b: 2, c: 3 };
function ColoredTriangle() {
  this.color = 'red'
}
ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle()
console.log(obj.a);
console.log(triangle);
// console.log(ColoredTriangle);
for (var prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  } 
}
