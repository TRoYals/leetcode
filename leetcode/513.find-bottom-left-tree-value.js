/*
 * @lc app=leetcode id=513 lang=javascript
 *
 * [513] Find Bottom Left Tree Value
 *
 * https://leetcode.com/problems/find-bottom-left-tree-value/description/
 *
 * algorithms
 * Medium (67.72%)
 * Likes:    3194
 * Dislikes: 257
 * Total Accepted:    238.9K
 * Total Submissions: 352.8K
 * Testcase Example:  '[2,1,3]'
 *
 * Given the root of a binary tree, return the leftmost value in the last row
 * of the tree.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [2,1,3]
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2,3,4,null,5,6,null,null,7]
 * Output: 7
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 10^4].
 * -2^31 <= Node.val <= 2^31 - 1
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
var findBottomLeftValue = function (root) {
  if (root == null) return 0;
  let queue = [root];
  let leftNode = root;
  while (queue.length) {
    let length = queue.length;
    let flag = 0;
    while (length--) {
      let node = queue.shift();
      if (node.left && flag == 0) {
        flag = 1;
        leftNode = node.left;
      }
      if (node.right && flag == 0) {
        flag = 1;
        leftNode = node.right;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return leftNode.val;
};
// @lc code=end
