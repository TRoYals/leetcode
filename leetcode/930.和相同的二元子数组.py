#
# @lc app=leetcode.cn id=930 lang=python3
#
# [930] 和相同的二元子数组
#
# https://leetcode.cn/problems/binary-subarrays-with-sum/description/
#
# algorithms
# Medium (55.67%)
# Likes:    305
# Dislikes: 0
# Total Accepted:    50K
# Total Submissions: 89.7K
# Testcase Example:  '[1,0,1,0,1]\n2'
#
# 给你一个二元数组 nums ，和一个整数 goal ，请你统计并返回有多少个和为 goal 的 非空 子数组。
#
# 子数组 是数组的一段连续部分。
#
#
#
# 示例 1：
#
#
# 输入：nums = [1,0,1,0,1], goal = 2
# 输出：4
# 解释：
# 有 4 个满足题目要求的子数组：[1,0,1]、[1,0,1,0]、[0,1,0,1]、[1,0,1]
#
#
# 示例 2：
#
#
# 输入：nums = [0,0,0,0,0], goal = 0
# 输出：15
#
#
#
#
# 提示：
#
#
# 1
# nums[i] 不是 0 就是 1
# 0
#
#
#


# @lc code=start
class Solution:
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
        def at_most(nums, goal):
            if goal < 0:
                return 0
            res = 0
            count = 0
            left = 0
            for right in range(len(nums)):
                count += nums[right]
                while count > goal:
                    count -= nums[left]
                    left += 1
                res += right - left + 1
            return res

        return at_most(nums, goal) - at_most(nums, goal - 1)


# @lc code=end
