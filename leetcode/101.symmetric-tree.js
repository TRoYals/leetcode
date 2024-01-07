/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 *
 * https://leetcode.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (55.70%)
 * Likes:    14744
 * Dislikes: 358
 * Total Accepted:    1.9M
 * Total Submissions: 3.3M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * Given the root of a binary tree, check whether it is a mirror of itself
 * (i.e., symmetric around its center).
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,2,3,4,4,3]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2,2,null,3,null,3]
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 1000].
 * -100 <= Node.val <= 100
 *
 *
 *
 * Follow up: Could you solve it both recursively and iteratively?
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
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }

  let isArrSyme = function (arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
      if (arr[start] == null && arr[end] == null) {
      } else if (arr[start] == null || arr[end] == null) {
        return false;
      } else if (arr[start].val !== arr[end].val) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  };
  let queue = [root];
  while (queue.length != 0) {
    let length = queue.length;
    let level = [];
    for (var i = 0; i < length; i++) {
      let node = queue.shift();
      level.push(node);
      if (node) {
        queue.push(node.left);
        queue.push(node.right);
      }
    }
    if (!isArrSyme(level)) {
      return false;
    }
  }
  return true;
};
// @lc code=end
