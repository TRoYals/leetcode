/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 *
 * https://leetcode.com/problems/permutations/description/
 *
 * algorithms
 * Medium (77.84%)
 * Likes:    18508
 * Dislikes: 307
 * Total Accepted:    1.9M
 * Total Submissions: 2.5M
 * Testcase Example:  '[1,2,3]'
 *
 * Given an array nums of distinct integers, return all the possible
 * permutations. You can return the answer in any order.
 *
 *
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * Example 2:
 * Input: nums = [0,1]
 * Output: [[0,1],[1,0]]
 * Example 3:
 * Input: nums = [1]
 * Output: [[1]]
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * All the integers of nums are unique.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let results = [];
  let permuteImpl = function (temp, curNums) {
    if (curNums.length == 0) {
      results.push([...temp]);
      return;
    }
    let length = curNums.length;
    for (let i = 0; i < length; i++) {
      temp.push(curNums[i]);
      let remainCurNums = curNums
        .slice(0, i)
        .concat(curNums.slice(i + 1, length));
      permuteImpl(temp, remainCurNums);
      temp.pop();
    }
  };
  permuteImpl([], nums);
  return results;
};

// @lc code=end
