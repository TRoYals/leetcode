#
# @lc app=leetcode.cn id=357 lang=python3
#
# [357] 统计各位数字都不同的数字个数
#
# https://leetcode.cn/problems/count-numbers-with-unique-digits/description/
#
# algorithms
# Medium (60.68%)
# Likes:    349
# Dislikes: 0
# Total Accepted:    73.2K
# Total Submissions: 120.5K
# Testcase Example:  '2'
#
# 给你一个整数 n ，统计并返回各位数字都不同的数字 x 的个数，其中 0 <= x < 10^n^ 。
#
#
#
#
# 示例 1：
#
#
# 输入：n = 2
# 输出：91
# 解释：答案应为除去 11、22、33、44、55、66、77、88、99 外，在 0 ≤ x < 100 范围内的所有数字。
#
#
# 示例 2：
#
#
# 输入：n = 0
# 输出：1
#
#
#
#
#
#
# 提示：
#
#
# 0 <= n <= 8
#
#
#


# @lc code=start
class Solution:
    def __init__(self):
        self.return_num = 0

    def countNumbersWithUniqueDigits(self, n: int) -> int:
        self.countNumbers_impl([], n)
        return self.return_num

    def countNumbers_impl(self, curr, remain):
        if remain == 0:
            self.return_num += 1
            return
        for i in range(10):
            if i in curr:
                continue
            else:
                if not (len(curr) == 0 and i == 0):
                    curr.append(i)
                remain = remain - 1
                self.countNumbers_impl(curr, remain)
                remain = remain + 1
                if len(curr) != 0:
                    curr.pop()


# @lc code=end
