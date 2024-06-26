#
# @lc app=leetcode.cn id=40 lang=python3
#
# [40] 组合总和 II
#
# https://leetcode.cn/problems/combination-sum-ii/description/
#
# algorithms
# Medium (59.46%)
# Likes:    1541
# Dislikes: 0
# Total Accepted:    524.5K
# Total Submissions: 882.3K
# Testcase Example:  '[10,1,2,7,6,1,5]\n8'
#
# 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
#
# candidates 中的每个数字在每个组合中只能使用 一次 。
#
# 注意：解集不能包含重复的组合。
#
#
#
# 示例 1:
#
#
# 输入: candidates = [10,1,2,7,6,1,5], target = 8,
# 输出:
# [
# [1,1,6],
# [1,2,5],
# [1,7],
# [2,6]
# ]
#
# 示例 2:
#
#
# 输入: candidates = [2,5,2,1,2], target = 5,
# 输出:
# [
# [1,2,2],
# [5]
# ]
#
#
#
# 提示:
#
#
# 1 <= candidates.length <= 100
# 1 <= candidates[i] <= 50
# 1 <= target <= 30
#
#
#


# @lc code=start
class Solution:
    def __init__(self):
        self.return_arr = []

    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
        self.combinationSum2_impl(candidates, target, [])
        return self.return_arr

    def combinationSum2_impl(self, nums, target, curr):
        if target == 0:
            self.return_arr.append([*curr])
            return
        if target < 0 or len(nums) == 0:
            return
        loop = []
        for i in range(len(nums)):
            if nums[i] not in loop:
                loop.append(nums[i])
                new_nums = nums[i + 1 :]
                target -= nums[i]
                curr.append(nums[i])
                self.combinationSum2_impl(new_nums, target, curr)
                target += nums[i]
                curr.pop()
# @lc code=end
