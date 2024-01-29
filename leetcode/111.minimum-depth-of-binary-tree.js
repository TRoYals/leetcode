/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
 *
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (47.28%)
 * Likes:    7104
 * Dislikes: 1284
 * Total Accepted:    1.1M
 * Total Submissions: 2.4M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, find its minimum depth.
 *
 * The minimum depth is the number of nodes along the shortest path from the
 * root node down to the nearest leaf node.
 *
 * Note: A leaf is a node with no children.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: root = [2,null,3,null,4,null,5,null,6]
 * Output: 5
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 10^5].
 * -1000 <= Node.val <= 1000
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
var minDepth = function (root) {
  let getDepth = function (node, depth) {
    if (node == null) return 0;
    let leftDepth = getDepth(node.left, depth);
    let rightDepth = getDepth(node.right, depth);
    //注意最短深度的误区!
    if (node.left == null && node.right != null) {
      return rightDepth + 1;
    }
    if (node.right == null && node.left != null) {
      return leftDepth + 1;
    }
    depth = Math.min(leftDepth, rightDepth) + 1;
    return depth;
  };
  return getDepth(root, 0);
};
// @lc code=end
