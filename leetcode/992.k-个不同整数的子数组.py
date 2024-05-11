#
# @lc app=leetcode.cn id=992 lang=python3
#
# [992] K 个不同整数的子数组
#
# https://leetcode.cn/problems/subarrays-with-k-different-integers/description/
#
# algorithms
# Hard (47.85%)
# Likes:    476
# Dislikes: 0
# Total Accepted:    34.2K
# Total Submissions: 71.2K
# Testcase Example:  '[1,2,1,2,3]\n2'
#
# 给定一个正整数数组 nums和一个整数 k，返回 nums 中 「好子数组」 的数目。
# 
# 如果 nums 的某个子数组中不同整数的个数恰好为 k，则称 nums 的这个连续、不一定不同的子数组为 「好子数组 」。
# 
# 
# 例如，[1,2,3,1,2] 中有 3 个不同的整数：1，2，以及 3。
# 
# 
# 子数组 是数组的 连续 部分。
# 
# 
# 
# 示例 1：
# 
# 
# 输入：nums = [1,2,1,2,3], k = 2
# 输出：7
# 解释：恰好由 2 个不同整数组成的子数组：[1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2],
# [1,2,1,2].
# 
# 
# 示例 2：
# 
# 
# 输入：nums = [1,2,1,3,4], k = 3
# 输出：3
# 解释：恰好由 3 个不同整数组成的子数组：[1,2,1,3], [2,1,3], [1,3,4].
# 
# 
# 
# 
# 提示：
# 
# 
# 1 <= nums.length <= 2 * 10^4
# 1 <= nums[i], k <= nums.length
# 
# 
#

# @lc code=start
class Solution:
    def subarraysWithKDistinct(self, nums: List[int], k: int) -> int:
# @lc code=end

