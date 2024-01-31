/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
 *
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
 *
 * algorithms
 * Medium (61.29%)
 * Likes:    15906
 * Dislikes: 384
 * Total Accepted:    1.5M
 * Total Submissions: 2.5M
 * Testcase Example:  '[3,5,1,6,2,0,8,null,null,7,4]\n5\n1'
 *
 * Given a binary tree, find the lowest common ancestor (LCA) of two given
 * nodes in the tree.
 *
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor
 * is defined between two nodes p and q as the lowest node in T that has both p
 * and q as descendants (where we allow a node to be a descendant of
 * itself).”
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * Output: 3
 * Explanation: The LCA of nodes 5 and 1 is 3.
 *
 *
 * Example 2:
 *
 *
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 * Output: 5
 * Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant
 * of itself according to the LCA definition.
 *
 *
 * Example 3:
 *
 *
 * Input: root = [1,2], p = 1, q = 2
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [2, 10^5].
 * -10^9 <= Node.val <= 10^9
 * All Node.val are unique.
 * p != q
 * p and q will exist in the tree.
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// //这个方法不好!
// var lowestCommonAncestor = function (root, p, q) {
//   let stack = [root];
//   let path = [[root]];
//   let final_path = [];
//   while (stack.length) {
//     let node = stack.pop();
//     let curPath = path.pop();
//     if (node.left) {
//       stack.push(node.left);
//       path.push([...curPath, node.left]);
//     }
//     if (node.right) {
//       stack.push(node.right);
//       path.push([...curPath, node.right]);
//     }
//     if (node == p || node == q) {
//       final_path.push([...curPath, node]);
//     }
//   }
//   let min_length =
//     final_path[0].length < final_path[1].length
//       ? final_path[0].length
//       : final_path[1].length;
//   for (let i = 0; i < min_length; i++) {
//     if (final_path[0][i] != final_path[1][i]) {
//       return final_path[0][i - 1];
//     }
//   }
// };
var lowestCommonAncestor = function (root, p, q) {
  if (root == null || root == p || root == q) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left != null && right == null) {
    return left;
  } else if (left == null && right != null) {
    return right;
  } else if (left && right) {
    return root;
  } else return null;
};

// @lc code=end
