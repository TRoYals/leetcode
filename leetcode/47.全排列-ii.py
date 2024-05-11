#
# @lc app=leetcode.cn id=47 lang=python3
#
# [47] 全排列 II
#
# https://leetcode.cn/problems/permutations-ii/description/
#
# algorithms
# Medium (65.70%)
# Likes:    1563
# Dislikes: 0
# Total Accepted:    551K
# Total Submissions: 838.4K
# Testcase Example:  '[1,1,2]'
#
# 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
#
#
#
# 示例 1：
#
#
# 输入：nums = [1,1,2]
# 输出：
# [[1,1,2],
# ⁠[1,2,1],
# ⁠[2,1,1]]
#
#
# 示例 2：
#
#
# 输入：nums = [1,2,3]
# 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
#
#
#
#
# 提示：
#
#
# 1 <= nums.length <= 8
# -10 <= nums[i] <= 10
#
#
#


# @lc code=start
class Solution:
    def __init__(self):
        self.return_arr = []

    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        self.permuteUnique_imple(nums, [])
        return self.return_arr

    def permuteUnique_imple(self, nums, curr):
        if len(nums) == 0:
            self.return_arr.append([*curr])
            return
        loop = []
        for i in range(len(nums)):
            if nums[i] not in loop:
                loop.append(nums[i])
                new_nums = nums[:i] + nums[i + 1 :]
                curr.append(nums[i])
                self.permuteUnique_imple(new_nums, curr)
                curr.pop()


# @lc code=end
