/*
 * @lc app=leetcode id=491 lang=javascript
 *
 * [491] Non-decreasing Subsequences
 *
 * https://leetcode.com/problems/non-decreasing-subsequences/description/
 *
 * algorithms
 * Medium (60.55%)
 * Likes:    3574
 * Dislikes: 227
 * Total Accepted:    162.7K
 * Total Submissions: 268.7K
 * Testcase Example:  '[4,6,7,7]'
 *
 * Given an integer array nums, return all the different possible
 * non-decreasing subsequences of the given array with at least two elements.
 * You may return the answer in any order.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [4,6,7,7]
 * Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [4,4,3,2,1]
 * Output: [[4,4]]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 15
 * -100 <= nums[i] <= 100
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let results = [];
  let findSubsequencesImpl = function (index, temp) {
    if (index >= nums.length) {
      return;
    }
    let curVal = [];
    for (let i = index; i < nums.length; i++) {
      temp.push(nums[i]);
      if (temp.length >= 2 && temp[temp.length - 1] < temp[temp.length - 2]) {
        temp.pop();
        continue;
      }
      if (curVal.indexOf(nums[i]) != -1) {
        temp.pop();
        continue;
      }
      if (temp.length >= 2) results.push([...temp]);
      curVal.push(nums[i]);
      findSubsequencesImpl(i + 1, temp);
      temp.pop();
    }
  };
  findSubsequencesImpl(0, []);
  return results;
};
// @lc code=end
