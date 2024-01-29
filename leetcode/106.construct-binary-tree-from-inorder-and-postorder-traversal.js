/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
 *
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (61.80%)
 * Likes:    7795
 * Dislikes: 125
 * Total Accepted:    601.8K
 * Total Submissions: 969K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * Given two integer arrays inorder and postorder where inorder is the inorder
 * traversal of a binary tree and postorder is the postorder traversal of the
 * same tree, construct and return the binary tree.
 *
 *
 * Example 1:
 *
 *
 * Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
 * Output: [3,9,20,null,null,15,7]
 *
 *
 * Example 2:
 *
 *
 * Input: inorder = [-1], postorder = [-1]
 * Output: [-1]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= inorder.length <= 3000
 * postorder.length == inorder.length
 * -3000 <= inorder[i], postorder[i] <= 3000
 * inorder and postorder consist of unique values.
 * Each value of postorder also appears in inorder.
 * inorder is guaranteed to be the inorder traversal of the tree.
 * postorder is guaranteed to be the postorder traversal of the tree.
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

var buildTree = function (inorder, postorder) {
  let sliceTree = function (inorder, postorder) {
    if (!postorder.length) return null;
    let rootVal = postorder.pop();
    let root = new TreeNode(rootVal);
    let inorder_left = [];
    let inorder_right = [];
    let postorder_left = [];
    let postorder_right = [];

    for (let i = 0; i < inorder.length; i++) {
      if (inorder[i] == rootVal) {
        inorder_left = inorder.slice(0, i);
        inorder_right = inorder.slice(i + 1, inorder.length);
        postorder_left = postorder.slice(0, i);
        postorder_right = postorder.slice(i, postorder.length);
        break;
      }
    }
    root.left = sliceTree(inorder_left, postorder_left);
    root.right = sliceTree(inorder_right, postorder_right);
    return root;
  };
  let node = sliceTree(inorder, postorder);
  return node;
};
// @lc code=end
