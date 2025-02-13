/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 *
 * https://leetcode.cn/problems/permutations/description/
 *
 * algorithms
 * Medium (79.22%)
 * Likes:    2917
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1]
 * 输出：[[1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * nums 中的所有整数 互不相同
 * 
 * 
 */

// @lc code=start
function permute(nums: number[]): number[][] {
    let collections = [];
    let backtracking = function(nums:number[],curr:number[]){
        if(nums.length === 0){
            collections.push([...curr]);
            return 
        }
        for(let i=0;i<nums.length;i++){
            let temp = nums[i]
            curr.push(temp);
            nums.splice(i,1);
            backtracking(nums,curr);
            nums.splice(i,0,temp);
            curr.pop();
        }
    }
    backtracking(nums,[]);
    return collections;
};
// @lc code=end

