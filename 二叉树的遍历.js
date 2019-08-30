// 中序遍历
// 递归实现
var inorderTraversal = function (root, array = []) {
  if (root) {
    inorderTraversal(root.left, array);
    array.push(root.val)
    inorderTraversal(root.right, array)
  }
  return array
}

// 迭代实现
// 取跟节点为目标节点，开始遍历
// 1.左孩子入栈 -> 直至左孩子为空的节点
// 2.节点出栈 -> 访问该节点
// 3.以右孩子为目标节点，再依次执行1、2、3
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

// 前序遍历
// 递归实现
var preorderTraversal = function (root, array = []) {
  if (root) {
    array.push(root.val)
    preorderTraversal(root.left, array)
    preorderTraversal(root.right, array)
  }
  return array
}

// 迭代实现
// 取跟节点为目标节点，开始遍历
// 1.访问目标节点
// 2.左孩子入栈 -> 直至左孩子为空的节点
// 3.节点出栈，以右孩子为目标节点，再依次执行1、2、3
var preorderTraversal = function (root) {
  const result = [];
  const stack = []
  let current = root;
  while (current || stack.length > 0) {
    while (current) {
      result.push(current.val)
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    current = current.right
  }
  return result
}

// 后序遍历
// 递归实现
var postorderTraversal = function (root, array = []) {
  if (root) {
    postorderTraversal(root.left, array)
    postorderTraversal(root.right, array)
    array.push(root.val)
  }
  return array
}

// 迭代实现
// 取跟节点为目标节点，开始遍历
// 1.左孩子入栈 -> 直至左孩子为空的节点
// 2.栈顶节点的右节点为空或右节点被访问过 -> 节点出栈并访问他，将节点标记为已访问
// 3.栈顶节点的右节点不为空且未被访问，以右孩子为目标节点，再依次执行1、2、3
var postorderTraversal = function (root) {
  const result = []
  const stack = []
  let last = null; // 标记上一个访问的节点
  let current = root;
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current)
      current = current.left
    }
    current = stack[stack.length - 1]
    if (!current.right || current.right == last) {
      current = stack.pop()
      result.push(current.val)
      last = current
      current = null // 继续弹栈
    } else {
      current = current.right
    }
  }
  return result
}