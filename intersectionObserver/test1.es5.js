"use strict";

var _immutable = require("immutable");

// import { Map } from 'immutable';
// let a = Map({
//   select: 'users',
//   filter: Map({ name: 'Cam' })
// })
// let b = a.set('select', 'people')
// console.log(a === b);
// console.log(a.get('filter') === b.get('filter'));
var obj = (0, _immutable.Map)({
  "name": "react study",
  "course": (0, _immutable.Map)({
    name: "react+reudx"
  })
});
var obj1 = obj.set("name", "drrell");
console.log(obj.get("course"));
console.log(obj1.get("course"));
console.log(obj.get("course") === obj1.get("course"));
console.log(obj === obj1); // class test{
// }