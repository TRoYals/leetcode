/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 *
 * https://leetcode.com/problems/subsets-ii/description/
 *
 * algorithms
 * Medium (56.91%)
 * Likes:    9395
 * Dislikes: 285
 * Total Accepted:    851.3K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,2,2]'
 *
 * Given an integer array nums that may contain duplicates, return all possible
 * subsets (the power set).
 *
 * The solution set must not contain duplicate subsets. Return the solution in
 * any order.
 *
 *
 * Example 1:
 * Input: nums = [1,2,2]
 * Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
 * Example 2:
 * Input: nums = [0]
 * Output: [[],[0]]
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10
 * -10 <= nums[i] <= 10
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort();
  let results = [];
  let subsetsWithDupImpl = function (index, temp) {
    if (index.length >= nums.length) {
      return;
    }
    let curVal = null;
    for (let i = index; i < nums.length; i++) {
      temp.push(nums[i]);
      if (curVal) {
        if (curVal == nums[i]) {
          temp.pop();
          continue;
        }
      }
      results.push([...temp]);
      curVal = nums[i];
      subsetsWithDupImpl(i + 1, temp);
      temp.pop();
    }
  };
  subsetsWithDupImpl(0, []);
  results.push([]);
  return results;
};
// @lc code=end
