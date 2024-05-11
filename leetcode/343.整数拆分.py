#
# @lc app=leetcode.cn id=343 lang=python3
#
# [343] 整数拆分
#
# https://leetcode.cn/problems/integer-break/description/
#
# algorithms
# Medium (63.23%)
# Likes:    1373
# Dislikes: 0
# Total Accepted:    330.3K
# Total Submissions: 521.7K
# Testcase Example:  '2'
#
# 给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。
#
# 返回 你可以获得的最大乘积 。
#
#
#
# 示例 1:
#
#
# 输入: n = 2
# 输出: 1
# 解释: 2 = 1 + 1, 1 × 1 = 1。
#
# 示例 2:
#
#
# 输入: n = 10
# 输出: 36
# 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
#
#
#
# 提示:
#
#
# 2 <= n <= 58
#
#
#


# @lc code=start
class Solution:
    def integerBreak(self, n: int) -> int:
        dp = [0] * (n + 1)
        for i in range(len(dp)):
            for j in range(i):
                dp[i] = max((i - j) * dp[j], dp[i], (i - j) * j)
        return dp[-1]


# @lc code=end
