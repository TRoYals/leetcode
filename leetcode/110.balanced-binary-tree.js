/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 *
 * https://leetcode.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (51.31%)
 * Likes:    10318
 * Dislikes: 625
 * Total Accepted:    1.4M
 * Total Submissions: 2.7M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, determine if it is height-balanced.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2,2,3,3,null,null,4,4]
 * Output: false
 *
 *
 * Example 3:
 *
 *
 * Input: root = []
 * Output: true
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 5000].
 * -10^4 <= Node.val <= 10^4
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (root == null) return true;
  let check = true;
  let nodeCheck = function (node, depth) {
    if (node == null) return 0;
    let leftDepth = nodeCheck(node.left, depth);
    let rightDepth = nodeCheck(node.right, depth);
    depth = Math.max(leftDepth, rightDepth) + 1;
    if (Math.abs(leftDepth - rightDepth) > 1) {
      check = false;
    }
    return depth;
  };
  nodeCheck(root, 0);
  return check;
};
// @lc code=end
