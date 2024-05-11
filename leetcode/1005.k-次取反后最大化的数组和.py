#
# @lc app=leetcode.cn id=1005 lang=python3
#
# [1005] K 次取反后最大化的数组和
#
# https://leetcode.cn/problems/maximize-sum-of-array-after-k-negations/description/
#
# algorithms
# Easy (51.03%)
# Likes:    436
# Dislikes: 0
# Total Accepted:    155.8K
# Total Submissions: 305.2K
# Testcase Example:  '[4,2,3]\n1'
#
# 给你一个整数数组 nums 和一个整数 k ，按以下方法修改该数组：
# 
# 
# 选择某个下标 i 并将 nums[i] 替换为 -nums[i] 。
# 
# 
# 重复这个过程恰好 k 次。可以多次选择同一个下标 i 。
# 
# 以这种方式修改数组后，返回数组 可能的最大和 。
# 
# 
# 
# 示例 1：
# 
# 
# 输入：nums = [4,2,3], k = 1
# 输出：5
# 解释：选择下标 1 ，nums 变为 [4,-2,3] 。
# 
# 
# 示例 2：
# 
# 
# 输入：nums = [3,-1,0,2], k = 3
# 输出：6
# 解释：选择下标 (1, 2, 2) ，nums 变为 [3,1,0,2] 。
# 
# 
# 示例 3：
# 
# 
# 输入：nums = [2,-3,-1,5,-4], k = 2
# 输出：13
# 解释：选择下标 (1, 4) ，nums 变为 [2,3,-1,5,4] 。
# 
# 
# 
# 
# 提示：
# 
# 
# 1 <= nums.length <= 10^4
# -100 <= nums[i] <= 100
# 1 <= k <= 10^4
# 
# 
#

# @lc code=start
# 贪心, 先排序, 把所有负的变成正的, 再循环把最小的元素原地运行
class Solution:
    def largestSumAfterKNegations(self, nums: List[int], k: int) -> int:
        nums.sort()
        count = 0
        pre_val = -101
        repeat = None
        for i in range(len(nums)):
            if count==k:
                break
            if(nums[i]<0):
                nums[i] = -nums[i]
                pre_val = nums[i]
                count+=1
                repeat = i
                continue
            if(nums[i]>=0):
                if(pre_val!=-101 and nums[i]>pre_val):
                    repeat = i-1
                else:
                    repeat = i
                break
        if(repeat!=None):
            for i in range(k-count):
                nums[repeat] = -nums[repeat]
        return sum(nums)
# @lc code=end

