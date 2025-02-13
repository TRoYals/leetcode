/*
 * @lc app=leetcode.cn id=416 lang=typescript
 *
 * [416] 分割等和子集
 *
 * https://leetcode.cn/problems/partition-equal-subset-sum/description/
 *
 * algorithms
 * Medium (52.62%)
 * Likes:    2122
 * Dislikes: 0
 * Total Accepted:    587.6K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,5,11,5]'
 *
 * 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,5,11,5]
 * 输出：true
 * 解释：数组可以分割成 [1, 5, 5] 和 [11] 。
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,2,3,5]
 * 输出：false
 * 解释：数组不能分割成两个元素和相等的子集。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * 
 * 
 */
let nums = [2,2,3,5];
canPartition(nums);

// @lc code=start
function canPartition(nums: number[]): boolean {
    let sum = nums.reduce((a,b)=>a+b,0);
    if(sum%2!==0){
        return false;
    }
    let target = sum/2;
    let memo = 
};
// @lc code=end

