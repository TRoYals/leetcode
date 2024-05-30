#
# @lc app=leetcode.cn id=238 lang=python3
#
# [238] 除自身以外数组的乘积
#
# https://leetcode.cn/problems/product-of-array-except-self/description/
#
# algorithms
# Medium (75.44%)
# Likes:    1775
# Dislikes: 0
# Total Accepted:    443.4K
# Total Submissions: 586.9K
# Testcase Example:  '[1,2,3,4]'
#
# 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
#
# 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
#
# 请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
#
#
#
# 示例 1:
#
#
# 输入: nums = [1,2,3,4]
# 输出: [24,12,8,6]
#
#
# 示例 2:
#
#
# 输入: nums = [-1,1,0,-3,3]
# 输出: [0,0,9,0,0]
#
#
#
#
# 提示：
#
#
# 2 <= nums.length <= 10^5
# -30 <= nums[i] <= 30
# 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内
#
#
#
#
# 进阶：你可以在 O(1) 的额外空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组 不被视为 额外空间。）
#
#


# @lc code=start
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        left_presum = [0] * len(nums)
        right_presum = [0] * len(nums)
        for i in range(len(nums)):
            if i == 0:
                left_presum[i] = nums[0]
            else:
                left_presum[i] = nums[i] * left_presum[i - 1]
        for j in range(-1, -len(nums) - 1, -1):
            if j == -1:
                right_presum[j] = nums[j]
            else:
                right_presum[j] = nums[j] * right_presum[j + 1]
        return_list = [0] * len(nums)
        for i in range(len(return_list)):
            return_list[i] = (left_presum[i - 1] if i - 1 >= 0 else 1) * (
                right_presum[i + 1] if i + 1 < len(nums) else 1
            )
        return return_list


# @lc code=end
