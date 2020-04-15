function TodoStore() {
  let todos = [];

  function add(todo) {
    todos.push(todo)
  }

  function get() {
    return todos.filter(isPriorityTodo).map(toTodoViewModel)
  }

  function isPriorityTodo(todo) {
    return task.type === "RE" && !task.completed;
  }

  function toTodoViewModel(todo) {
    return { id: todo.id, title: todo.title }
  }

  return Object.freeze({
    add, get
  })
}

let add = (function createAddClosure() {
  let arr = [];
  return function (obj) {
    arr.push(obj)
  }
})()

function addALotFoObjects() {
  for (let i = 1; i <= 10000; i++) {
    add(new Todo(i));
  }
}

function clearAllObjects() {
  if (add) {
    add = null
  }
}


function Loader() {
  let modules = Object.create(null)
  let started = false;

  function getNamespaceModule(modulesText) {
    let parent = modules;
    if (modulesText) {
      let parts = modulesText.split(".");
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (typeof parent[part] === "undefined") {
          parent[part] = Object.create(null)
        }
        parent = parent[part]
      }
    }
    return parent
  }

  function addFunction(namespace, fn) {
    if (typeof (fn) !== "function") {
      throw "Only functions can be added"
    }
    let module = getNamespaceModule(namespace);
    let fnName = fn.name;
    module[fnName] = fn
  }
  function addNamespace(namespace) {
    return function (fn) {
      addFunction(namespace, fn)
    }
  }

  function factory() {
    if (typeof (arguments[0]) === "string") {
      return addNamespace(arguments[0])
    } else {
      return addFunction(null, arguments[0])
    }
  }

  function start(startApplication) {
    if (started) {
      throw "App can be started only once"
    }

    startApplication(Object.freeze(modules));
    started = true
  }

  return Object.freeze({
    factory,
    start
  })
}

let app = Loader()