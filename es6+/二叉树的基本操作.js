function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right
}

Node.prototype = {
  show: function () {
    console.log(this.data);

  }
}

function Tree() {
  this.root = null
}

Tree.prototype = {
  insert: function (data) {
    var node = new Node(data, null, null);
    if (!this.root) {
      this.root = node;
      return;
    }
    var current = this.root;
    var parent = null;
    while (current) {
      parent = current;
      if (data < parent.data) {
        current = current.left;
        if (!current) {
          parent.left = node
          return
        }
      } else {
        current = current.right;
        if (!current) {
          parent.right = node;
          return;
        }
      }
    }
  },
  preOrder: function () {
    if (node) {
      node.show()
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  },
  middleOrder: function (node) {
    if (node) {
      this.middleOrder(node.left)
      node.show()
      this.middleOrder(node.right)
    }
  },
  laterOrder: function (node) {
    if (node) {
      this.laterOrder(node.left)
      this.laterOrder(node.right)
      node.show()
    }
  },
  getMin: function () {
    var current = this.root;
    while (current) {
      if (!current.left) {
        return current
      }
      current = current.left
    }
  },
  getMax: function () {
    var current = this.root;
    while (current) {
      if (!current.right) {
        return current
      }
      current = current.right
    }
  },
  getDeep: function (node, deep) {
    deep = deep || 0;
    if (node == null) {
      return deep
    }
    deep++
    var dleft = this.getDeep(node.left, deep)
    var dright = this.getDeep(node.right, deep)
    return Math.max(dleft, dright)
  }
}
var inorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let current = root;
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current)
      current = current.left
    }
    current = stack.pop();
    result.push(current.val)
    current = current.right
  }
  return result
}
var t = new Tree()
var arr = [1, 2, 3]
arr.map(function (item, index) {
  t.insert(item)
})
console.log(t);
console.log(inorderTraversal(t));
let str= "气量(10<sup>8</sup>m<sup>3</sup>)"
console.log(str.split("<sup>"));
let pre = [1,2,4,7,3,5,6,8]
let vin = [4,7,2,1,5,3,8,6]
console.log(reConstructBinaryTree(pre,vin));

function reConstructBinaryTree(pre, vin) {
  if(pre.length === 0){
      return null;
  }
  if(pre.length === 1){
      return new Tree(pre[0]);
  }
  const value = pre[0];
  const index = vin.indexOf(value);
  const vinLeft = vin.slice(0,index);
  const vinRight = vin.slice(index+1);
  const preLeft = pre.slice(1,index+1);
  const preRight = pre.slice(index+1);
  const node = new Tree(value);
  node.left = reConstructBinaryTree(preLeft, vinLeft);
  node.right = reConstructBinaryTree(preRight, vinRight);
  return node;
}