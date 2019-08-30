"use strict";

var _immutable = require("immutable");

var a = (0, _immutable.Map)({
  select: 'users',
  filter: (0, _immutable.Map)({
    name: 'Cam'
  })
});
var b = a.set('select', 'people');
console.log(a === b);
console.log(a.get('filter') === b.get('filter'));