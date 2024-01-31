/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 *
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/
 *
 * algorithms
 * Easy (71.23%)
 * Likes:    10662
 * Dislikes: 535
 * Total Accepted:    1.1M
 * Total Submissions: 1.6M
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * Given an integer array nums where the elements are sorted in ascending
 * order, convert it to a height-balanced binary search tree.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [-10,-3,0,5,9]
 * Output: [0,-3,9,-10,null,5]
 * Explanation: [0,-10,5,null,-3,null,9] is also accepted:
 *
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,3]
 * Output: [3,1]
 * Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums is sorted in a strictly increasing order.
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  let sortedArrayToBSTImpl = function (nums) {
    if (nums.length == 0) return null;
    let median = Math.floor(nums.length / 2); //0,1
    let leftNums = nums.slice(0, median);
    let rightNums = [];
    if (median + 1 < nums.length) {
      rightNums = nums.slice(median + 1, nums.length);
    }
    let node = new TreeNode(nums[median]);
    node.left = sortedArrayToBSTImpl(leftNums);
    node.right = sortedArrayToBSTImpl(rightNums);
    return node;
  };
  return sortedArrayToBSTImpl(nums);
};
// @lc code=end
