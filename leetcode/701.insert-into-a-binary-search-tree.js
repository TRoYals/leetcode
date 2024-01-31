/*
 * @lc app=leetcode id=701 lang=javascript
 *
 * [701] Insert into a Binary Search Tree
 *
 * https://leetcode.com/problems/insert-into-a-binary-search-tree/description/
 *
 * algorithms
 * Medium (73.87%)
 * Likes:    5629
 * Dislikes: 164
 * Total Accepted:    489.8K
 * Total Submissions: 663.2K
 * Testcase Example:  '[4,2,7,1,3]\n5'
 *
 * You are given the root node of a binary search tree (BST) and a value to
 * insert into the tree. Return the root node of the BST after the insertion.
 * It is guaranteed that the new value does not exist in the original BST.
 *
 * Notice that there may exist multiple valid ways for the insertion, as long
 * as the tree remains a BST after insertion. You can return any of them.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [4,2,7,1,3], val = 5
 * Output: [4,2,7,1,3,5]
 * Explanation: Another accepted tree is:
 *
 *
 *
 * Example 2:
 *
 *
 * Input: root = [40,20,60,10,30,50,70], val = 25
 * Output: [40,20,60,10,30,50,70,null,null,25]
 *
 *
 * Example 3:
 *
 *
 * Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
 * Output: [4,2,7,1,3,5]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree will be in the range [0, 10^4].
 * -10^8 <= Node.val <= 10^8
 * All the values Node.val are unique.
 * -10^8 <= val <= 10^8
 * It's guaranteed that val does not exist in the original BST.
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  let node = null;
  let insertNode = new TreeNode(val);
  let insertBST = function (root, val) {
    if (root == null) {
      if (node) {
        if (node.val < val) {
          node.right = insertNode;
        } else if (node.val > val) {
          node.left = insertNode;
        }
      }
      return;
    }
    node = root;
    if (root.val > val) {
      insertBST(root.left, val);
    }
    if (root.val < val) {
      insertBST(root.right, val);
    }
  };
  if (root == null) return insertNode;
  insertBST(root, val);
  return root;
};
// @lc code=end
