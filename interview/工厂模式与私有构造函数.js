let Todo = (function createTodoFactory() {
  function Todo(spec) {
    Object.assign(this, spec)
  }
  return function (spec) {
    let todo = new Todo(spec);
    return Object.freeze(todo)
  }
})
let todo = Todo({title : "A description"});
