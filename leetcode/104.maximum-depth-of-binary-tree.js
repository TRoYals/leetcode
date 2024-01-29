/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 *
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (74.80%)
 * Likes:    12379
 * Dislikes: 210
 * Total Accepted:    2.8M
 * Total Submissions: 3.8M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given the root of a binary tree, return its maximum depth.
 *
 * A binary tree's maximum depth is the number of nodes along the longest path
 * from the root node down to the farthest leaf node.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 3
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,null,2]
 * Output: 2
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 10^4].
 * -100 <= Node.val <= 100
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//  后序
//var maxDepth = function (root) {
//   var max_length = function (node) {
//     if (node == null) return 0;
//     let leftDepth = max_length(node.left);
//     let rightDepth = max_length(node.right);
//     let depth = 1 + Math.max(leftDepth, rightDepth);
//     return depth;
//   };
//   return max_length(root);
// };
// 前序
// var maxDepth = function (root) {
//   if (root == null) return 0;
//   let result = 0;
//   let getDepth = function (node, length) {
//     result = length > result ? length : result;
//     if (node.left == null && node.right == null) {
//       return;
//     }
//     if (node.left) {
//       length++;
//       getDepth(node.left, length);
//       length--;
//     }
//     if (node.right) {
//       length++;
//       getDepth(node.right, length);
//       length--;
//     }
//     return;
//   };
//   getDepth(root, 1);
//   return result;
// };
//层序遍历
var maxDepth = function (root) {
  if (root == null) return 0;
  let depth = 0;
  let queue = [root];
  while (queue.length != 0) {
    let count = queue.length;
    for (let i = 0; i < count; i++) {
      let node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    depth++;
  }
  return depth;
};
// @lc code=end
