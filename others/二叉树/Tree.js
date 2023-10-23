var levelOrder = function (root) {
  let stack = [root];
  let res = [];
  let stack2 = [];
  while (stack.length) {
    for (let i of stack) {
      res.push(i.val);
      if (i.left) {
        stack2.push(stack.left);
      }
      if (i.left) {
        stack2.push(stack.right);
      }
    }
    stack = stack2;
    stack2 = [];
  }
  return res;
};
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

//