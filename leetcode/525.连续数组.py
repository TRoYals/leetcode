#
# @lc app=leetcode.cn id=525 lang=python3
#
# [525] 连续数组
#
# https://leetcode.cn/problems/contiguous-array/description/
#
# algorithms
# Medium (54.55%)
# Likes:    734
# Dislikes: 0
# Total Accepted:    77.7K
# Total Submissions: 142.4K
# Testcase Example:  '[0,1]'
#
# 给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。
# 
# 
# 
# 示例 1:
# 
# 
# 输入: nums = [0,1]
# 输出: 2
# 说明: [0, 1] 是具有相同数量 0 和 1 的最长连续子数组。
# 
# 示例 2:
# 
# 
# 输入: nums = [0,1,0]
# 输出: 2
# 说明: [0, 1] (或 [1, 0]) 是具有相同数量0和1的最长连续子数组。
# 
# 
# 
# 提示：
# 
# 
# 1 
# nums[i] 不是 0 就是 1
# 
# 
#

# @lc code=start
class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
# @lc code=end

