/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
 *
 * https://leetcode.com/problems/subtree-of-another-tree/description/
 *
 * algorithms
 * Easy (47.31%)
 * Likes:    7944
 * Dislikes: 466
 * Total Accepted:    776.6K
 * Total Submissions: 1.6M
 * Testcase Example:  '[3,4,5,1,2]\n[4,1,2]'
 *
 * Given the roots of two binary trees root and subRoot, return true if there
 * is a subtree of root with the same structure and node values of subRoot and
 * false otherwise.
 *
 * A subtree of a binary tree tree is a tree that consists of a node in tree
 * and all of this node's descendants. The tree tree could also be considered
 * as a subtree of itself.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,4,5,1,2], subRoot = [4,1,2]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the root tree is in the range [1, 2000].
 * The number of nodes in the subRoot tree is in the range [1, 1000].
 * -10^4 <= root.val <= 10^4
 * -10^4 <= subRoot.val <= 10^4
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  let isSameTree = function (left, right) {
    let queue = [left, right];
    while (queue.length != 0) {
      let left = queue.shift();
      let right = queue.shift();
      if (left == null && right == null) {
        continue;
      } else if (left == null || right == null) {
        return false;
      } else if (left.val != right.val) {
        return false;
      }
      queue.push(left.left);
      queue.push(right.left);
      queue.push(left.right);
      queue.push(right.right);
    }
    return true;
  };
  let queue = [root];
  while (queue.length != 0) {
    let node = queue.shift();
    if (node) {
      queue.push(node.left);
      queue.push(node.right);
    }
    if (isSameTree(node, subRoot)) {
      return true;
    }
  }
  return false;
};
// @lc code=end
