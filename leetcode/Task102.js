//[102. 二叉树的层序遍历 - 力扣（LeetCode）](https://leetcode.cn/problems/binary-tree-level-order-traversal/)

//define a tree node
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

//array to a tree
function arrayToTree(arr) {
  if (arr.length == 0) {
    return null;
  }
  let root = new TreeNode(arr[0]);
  let queue = [root];
  let index = 1;
  while (queue.length > 0) {
    let node = queue.shift();
    if (index < arr.length) {
      node.left = new TreeNode(arr[index]);
      queue.push(node.left);
      index++;
    }
    if (index < arr.length) {
      node.right = new TreeNode(arr[index]);
      queue.push(node.right);
      index++;
    }
  }
  return root;
}

var levelOrder = function (root) {
  let res = [],
    queue = [];
  queue.push(root);
  if (root === null) {
    return res;
  }
  while (queue.length) {
    let length = queue.length;
    let curLevel = [];
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      curLevel.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(curLevel);
  }
  return res;
};

console.log(levelOrder(arrayToTree([3, 9, 20, null, null, 15, 7])));

//数组倒序输出
var levelOrderBottom = function (root) {
    let res = [],
        queue = [];
    queue.push(root);
    if (root === null) {
        return res;
    }
    while (queue.length) {
        let length = queue.length;
        let curLevel = [];
        for (let i = 0; i < length; i++) {
        let node = queue.shift();
        curLevel.push(node.val);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
        }
        res.unshift(curLevel);
    }
    return res;
    };
    
