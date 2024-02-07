/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 *
 * https://leetcode.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (58.64%)
 * Likes:    8321
 * Dislikes: 139
 * Total Accepted:    880.2K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,1,2]'
 *
 * Given a collection of numbers, nums, that might contain duplicates, return
 * all possible unique permutations in any order.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,1,2]
 * Output:
 * [[1,1,2],
 * ⁠[1,2,1],
 * ⁠[2,1,1]]
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 8
 * -10 <= nums[i] <= 10
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let results = [];
  let permuteUniqueImpl = function (temp, curNums) {
    if (curNums.length == 0) {
      results.push([...temp]);
      return;
    }
    let preNums = [];
    for (let i = 0; i < curNums.length; i++) {
      if (preNums.indexOf(curNums[i]) != -1) {
        continue;
      }
      temp.push(curNums[i]);
      preNums.push(curNums[i]);
      let remainCurNums = [
        ...curNums.slice(0, i),
        ...curNums.slice(i + 1, curNums.length),
      ];
      permuteUniqueImpl(temp, remainCurNums);
      temp.pop();
    }
  };
  permuteUniqueImpl([], nums);
  return results;
};
// @lc code=end
