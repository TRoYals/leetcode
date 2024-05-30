/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 *
 * https://leetcode.cn/problems/longest-consecutive-sequence/description/
 *
 * algorithms
 * Medium (51.71%)
 * Likes:    2094
 * Dislikes: 0
 * Total Accepted:    648.9K
 * Total Submissions: 1.3M
 * Testcase Example:  '[100,4,200,1,3,2]'
 *
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 *
 * 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [100,4,200,1,3,2]
 * 输出：4
 * 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,3,7,2,5,8,4,6,0,1]
 * 输出：9
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * -10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let maxCount = 0;
  let set = new Set(nums);
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i] - 1)) {
      continue;
    } else {
      let start = nums[i];
      let count = 1;
      while (set.has(start + 1)) {
        count++;
        start++;
      }
      maxCount = maxCount > count ? maxCount : count;
    }
  }
  return maxCount;
};
// @lc code=end
