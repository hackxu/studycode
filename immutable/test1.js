// import { Map } from 'immutable';

// let a = Map({
//   select: 'users',
//   filter: Map({ name: 'Cam' })
// })

// let b = a.set('select', 'people')

// console.log(a === b);

// console.log(a.get('filter') === b.get('filter'));

import { Map, is } from 'immutable';

let obj = Map({
  "name": "react study",
  "course": Map({ name: "react+reudx" })
})

let obj1 = obj.set("name", "drrell")

console.log(obj.get("course"));
console.log(obj1.get("course"));

console.log(obj.get("course") === obj1.get("course"));
console.log(obj === obj1);

// class test{

// }