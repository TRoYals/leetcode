/*
 * @lc app=leetcode id=450 lang=javascript
 *
 * [450] Delete Node in a BST
 *
 * https://leetcode.com/problems/delete-node-in-a-bst/description/
 *
 * algorithms
 * Medium (51.00%)
 * Likes:    8745
 * Dislikes: 244
 * Total Accepted:    453.9K
 * Total Submissions: 890K
 * Testcase Example:  '[5,3,6,2,4,null,7]\n3'
 *
 * Given a root node reference of a BST and a key, delete the node with the
 * given key in the BST. Return the root node reference (possibly updated) of
 * the BST.
 *
 * Basically, the deletion can be divided into two stages:
 *
 *
 * Search for a node to remove.
 * If the node is found, delete the node.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [5,3,6,2,4,null,7], key = 3
 * Output: [5,4,6,2,null,null,7]
 * Explanation: Given key to delete is 3. So we find the node with value 3 and
 * delete it.
 * One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
 * Please notice that another valid answer is [5,2,6,null,4,null,7] and it's
 * also accepted.
 *
 *
 *
 * Example 2:
 *
 *
 * Input: root = [5,3,6,2,4,null,7], key = 0
 * Output: [5,3,6,2,4,null,7]
 * Explanation: The tree does not contain a node with value = 0.
 *
 *
 * Example 3:
 *
 *
 * Input: root = [], key = 0
 * Output: []
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 10^4].
 * -10^5 <= Node.val <= 10^5
 * Each node has a unique value.
 * root is a valid binary search tree.
 * -10^5 <= key <= 10^5
 *
 *
 *
 * Follow up: Could you solve it with time complexity O(height of tree)?
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
 * @param {number} key
 * @return {TreeNode}
 */
//虽然做出来了, 但没有用到BST的性质! 是个通用的方法
var deleteNode = function (root, key) {
  let findRightNode = function (root) {
    root = root.right;
    while (root) {
      if (root.left == null) {
        return root;
      } else {
        root = root.left;
      }
    }
  };
  let deleteNodeImpl = function (root, key) {
    if (root == null) return null;
    let left = deleteNodeImpl(root.left, key);
    let right = deleteNodeImpl(root.right, key);
    if (root.val == key) {
      if (root.left == null && root.right == null) return null;
      if (root.left == null && root.right != null) return root.right;
      if (root.left != null && root.right == null) return root.left;
      if (root.left != null && root.right != null) {
        let insertNode = findRightNode(root);
        insertNode.left = root.left;
        return root.right;
      }
    }
    root.left = left;
    root.right = right;
    return root;
  };
  root = deleteNodeImpl(root, key);
  return root;
};
// @lc code=end
