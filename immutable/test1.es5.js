import { Map } from 'immutable';
let a = Map({
  select: 'users',
  filter: Map({
    name: 'Cam'
  })
});
let b = a.set('select', 'people');
console.log(a === b);
console.log(a.get('filter') === b.get('filter'));