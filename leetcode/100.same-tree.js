/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
 *
 * https://leetcode.com/problems/same-tree/description/
 *
 * algorithms
 * Easy (60.25%)
 * Likes:    10833
 * Dislikes: 218
 * Total Accepted:    1.9M
 * Total Submissions: 3.1M
 * Testcase Example:  '[1,2,3]\n[1,2,3]'
 *
 * Given the roots of two binary trees p and q, write a function to check if
 * they are the same or not.
 *
 * Two binary trees are considered the same if they are structurally identical,
 * and the nodes have the same value.
 *
 *
 * Example 1:
 *
 *
 * Input: p = [1,2,3], q = [1,2,3]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: p = [1,2], q = [1,null,2]
 * Output: false
 *
 *
 * Example 3:
 *
 *
 * Input: p = [1,2,1], q = [1,1,2]
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in both trees is in the range [0, 100].
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function (p, q) {
//   let queue = [p, q];
//   while (queue.length != 0) {
//     let left = queue.shift();
//     let right = queue.shift();
//     if (left === null && right === null) continue;
//     if (left === null || right === null || left.val !== right.val) return false;

//     queue.push(left.left);
//     queue.push(right.left);
//     queue.push(left.right);
//     queue.push(right.right);
//   }
//   return true;
// };

var isSameTree = function (left, right) {
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

// @lc code=end
