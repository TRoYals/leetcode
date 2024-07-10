/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 *
 * https://leetcode.cn/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (65.76%)
 * Likes:    1580
 * Dislikes: 0
 * Total Accepted:    566.9K
 * Total Submissions: 861.3K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,1,2]
 * 输出：
 * [[1,1,2],
 * ⁠[1,2,1],
 * ⁠[2,1,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 8
 * -10 <= nums[i] <= 10
 * 
 * 
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
   let collections = [];
   let backtracking = function(nums:number[],curr:number[]){
    if(nums.length===0){
        collections.push([...curr]);
        return;
    }
    let currLevel  = [];
    for(let i = 0;i<nums.length;i++){
        let temp = nums[i]
        if(currLevel.includes(temp)){
            continue
        }
        currLevel.push(temp);
        nums.splice(i,1);
        curr.push(temp);
        backtracking(nums,curr);
        nums.splice(i,0,temp);
        curr.pop();
    }
   } 
   backtracking(nums,[])
   return collections;
};
// @lc code=end

