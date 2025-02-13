/*
 * @lc app=leetcode.cn id=494 lang=typescript
 *
 * [494] 目标和
 *
 * https://leetcode.cn/problems/target-sum/description/
 *
 * algorithms
 * Medium (48.29%)
 * Likes:    1915
 * Dislikes: 0
 * Total Accepted:    443K
 * Total Submissions: 917.4K
 * Testcase Example:  '[1,1,1,1,1]\n3'
 *
 * 给你一个非负整数数组 nums 和一个整数 target 。
 * 
 * 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：
 * 
 * 
 * 例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
 * 
 * 
 * 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,1,1,1,1], target = 3
 * 输出：5
 * 解释：一共有 5 种方法让最终目标和为 3 。
 * -1 + 1 + 1 + 1 + 1 = 3
 * +1 - 1 + 1 + 1 + 1 = 3
 * +1 + 1 - 1 + 1 + 1 = 3
 * +1 + 1 + 1 - 1 + 1 = 3
 * +1 + 1 + 1 + 1 - 1 = 3
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1], target = 1
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 20
 * 0 <= nums[i] <= 1000
 * 0 <= sum(nums[i]) <= 1000
 * -1000 <= target <= 1000
 * 
 * 
 */

// @lc code=start
// function findTargetSumWays(nums: number[], target: number): number {
//     let count = 0;
//     let backTracking= (curSum:number,index:number)=>{
//         if(index===nums.length){
//             if(curSum===target){
//                 count+=1;
//             }
//             return;
//         }
//         backTracking(curSum+nums[index],index+1);
//         backTracking(curSum-nums[index],index+1);
//     }
//     backTracking(0,0);
//     return count;
// };
// function findTargetSumWays(nums: number[], target: number): number {
//     let count = 0;
//     let backTracking= (curSum:number,index:number)=>{
//         if(index===nums.length){
//             if(curSum===target){
//                 count+=1;
//             }
//             return;
//         }
//         backTracking(curSum+nums[index],index+1);
//         backTracking(curSum-nums[index],index+1);
//     }
//     backTracking(0,0);
//     return count;
// };
function findTargetSumWays(nums: number[], target: number): number {
    let sum = nums.reduce((a,b)=>a+b,0);
    if(sum<target || (sum-target)%2!=0){
        return 0;
    }
    let neg = (sum - target)/2;
    


}
// @lc code=end

