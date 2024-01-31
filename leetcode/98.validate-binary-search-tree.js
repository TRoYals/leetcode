/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 *
 * https://leetcode.com/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (32.65%)
 * Likes:    16337
 * Dislikes: 1334
 * Total Accepted:    2.2M
 * Total Submissions: 6.8M
 * Testcase Example:  '[2,1,3]'
 *
 * Given the root of a binary tree, determine if it is a valid binary search
 * tree (BST).
 *
 * A valid BST is defined as follows:
 *
 *
 * The left subtree of a node contains only nodes with keys less than the
 * node's key.
 * The right subtree of a node contains only nodes with keys greater than the
 * node's key.
 * Both the left and right subtrees must also be binary search trees.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [2,1,3]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: root = [5,1,4,null,null,3,6]
 * Output: false
 * Explanation: The root node's value is 5 but its right child's value is
 * 4.
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
 * @return {boolean}
 */
// // 整个思路错了
// var isValidBST = function (root) {
//   let isValid = function (root) {
//     let isValidLeft = true;
//     let isValidRight = true;
//     if (root.left == null && root.right == null) return true;
//     if (root.left) {
//       if (root.left.val < root.val) {
//         if (root.left.right == null || root.left.right.val < root.val) {
//           isValidLeft = isValid(root.left);
//         } else return false;
//       } else return false;
//     }
//     if (root.right) {
//       if (root.right.val > root.val) {
//         if (root.right.left == null || root.right.left.val > root.val) {
//           isValidRight = isValid(root.right);
//         } else return false;
//       } else return false;
//     }
//     return isValidLeft && isValidRight;
//   };
//   return isValid(root);
// };

var isValidBST = function (root) {
  let isValid = function (root, lower, upper) {
    if (root == null) return true;
    let isValidLeft = true;
    let isValidRight = true;
    let temp = 0;

    if (root.val < upper) {
      temp = root.val;
      isValidLeft = isValid(root.left, lower, temp);
    } else return false;

    if (root.val > lower) {
      temp = root.val;
      isValidRight = isValid(root.right, temp, upper);
    } else return false;

    return isValidLeft && isValidRight;
  };
  return isValid(root, (-2) ** 33, 2 ** 33);
};

// @lc code=end
