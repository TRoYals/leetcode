/*
 * @lc app=leetcode.cn id=930 lang=typescript
 *
 * [930] 和相同的二元子数组
 *
 * https://leetcode.cn/problems/binary-subarrays-with-sum/description/
 *
 * algorithms
 * Medium (55.67%)
 * Likes:    305
 * Dislikes: 0
 * Total Accepted:    50K
 * Total Submissions: 89.7K
 * Testcase Example:  '[1,0,1,0,1]\n2'
 *
 * 给你一个二元数组 nums ，和一个整数 goal ，请你统计并返回有多少个和为 goal 的 非空 子数组。
 *
 * 子数组 是数组的一段连续部分。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,0,1,0,1], goal = 2
 * 输出：4
 * 解释：
 * 有 4 个满足题目要求的子数组：[1,0,1]、[1,0,1,0]、[0,1,0,1]、[1,0,1]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,0,0,0,0], goal = 0
 * 输出：15
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * nums[i] 不是 0 就是 1
 * 0
 *
 *
 */

// @lc code=start
function numSubarraysWithSum(nums: number[], goal: number): number {
  let map = new Map();
  let preSum = 0;
  let cnt = 0;
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    preSum += nums[i];

    if (map.has(preSum - goal)) {
      cnt += map.get(preSum - goal);
    }
    map.set(preSum, (map.get(preSum) || 0) + 1);
  }
  return cnt;
}
// @lc code=end
