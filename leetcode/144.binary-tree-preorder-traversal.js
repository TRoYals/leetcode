/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Easy (68.64%)
 * Likes:    7698
 * Dislikes: 196
 * Total Accepted:    1.5M
 * Total Submissions: 2.2M
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given the root of a binary tree, return the preorder traversal of its nodes'
 * values.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,null,2,3]
 * Output: [1,2,3]
 *
 *
 * Example 2:
 *
 *
 * Input: root = []
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: root = [1]
 * Output: [1]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 *
 *
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */

// var preorderTraversal = function (root) {
//   let returnNum = [];
//   preTraversal(root, returnNum);
//   return returnNum;
// };

// var preTraversal = function (root, num) {
//   if (root === null) return;
//   num.push(root.val);
//   if (root.left) {
//     preTraversal(root.left, num);
//   }
//   if (root.right) {
//     preTraversal(root.right, num);
//   }
// };
var preorderTraversal = function (root) {
  let stack = [];
  let returnArr = [];
  stack.push(root);
  while (stack.length != 0) {
    let child = stack.pop();
    if (child) {
      returnArr.push(child.val);
      if (child.right) {
        stack.push(child.right);
      }
      if (child.left) {
        stack.push(child.left);
      }
    }
  }
  return returnArr;
};
// @lc code=end
