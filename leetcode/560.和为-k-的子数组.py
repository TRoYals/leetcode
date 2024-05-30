#
# @lc app=leetcode.cn id=560 lang=python3
#
# [560] 和为 K 的子数组
#
# https://leetcode.cn/problems/subarray-sum-equals-k/description/
#
# algorithms
# Medium (44.07%)
# Likes:    2346
# Dislikes: 0
# Total Accepted:    460.8K
# Total Submissions: 1M
# Testcase Example:  '[1,1,1]\n2'
#
# 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
#
# 子数组是数组中元素的连续非空序列。
#
#
#
# 示例 1：
#
#
# 输入：nums = [1,1,1], k = 2
# 输出：2
#
#
# 示例 2：
#
#
# 输入：nums = [1,2,3], k = 3
# 输出：2
#
#
#
#
# 提示：
#
#
# 1 <= nums.length <= 2 * 10^4
# -1000 <= nums[i] <= 1000
# -10^7 <= k <= 10^7
#
#
#


# @lc code=start
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        presum = [0] * (len(nums) + 1)
        for i in range(len(nums)):
            presum[i + 1] = presum[i] + nums[i]
        l = 0
        count = 0
        dir = {}
        for i in range(len(presum)):
            if presum[i] - k in dir:
                count += dir[presum[i] - k]
            if presum[i] in dir:
                dir[presum[i]] += 1
            else:
                dir[presum[i]] = 1
        return count


# @lc code=end
