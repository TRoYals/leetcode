#
# @lc app=leetcode.cn id=306 lang=python3
#
# [306] 累加数
#
# https://leetcode.cn/problems/additive-number/description/
#
# algorithms
# Medium (37.63%)
# Likes:    445
# Dislikes: 0
# Total Accepted:    53.5K
# Total Submissions: 142.3K
# Testcase Example:  '"112358"'
#
# 累加数 是一个字符串，组成它的数字可以形成累加序列。
#
# 一个有效的 累加序列 必须 至少 包含 3 个数。除了最开始的两个数以外，序列中的每个后续数字必须是它之前两个数字之和。
#
# 给你一个只包含数字 '0'-'9' 的字符串，编写一个算法来判断给定输入是否是 累加数 。如果是，返回 true ；否则，返回 false 。
#
# 说明：累加序列里的数，除数字 0 之外，不会 以 0 开头，所以不会出现 1, 2, 03 或者 1, 02, 3 的情况。
#
#
#
# 示例 1：
#
#
# 输入："112358"
# 输出：true
# 解释：累加序列为: 1, 1, 2, 3, 5, 8 。1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
#
#
# 示例 2：
#
#
# 输入："199100199"
# 输出：true
# 解释：累加序列为: 1, 99, 100, 199。1 + 99 = 100, 99 + 100 = 199
#
#
#
# 提示：
#
#
# 1 <= num.length <= 35
# num 仅由数字（0 - 9）组成
#
#
#
#
# 进阶：你计划如何处理由过大的整数输入导致的溢出?
#
#


# @lc code=start
class Solution:
    def __init__(self):
        self.return_if = False

    def isAdditiveNumber(self, num: str) -> bool:
        self.isAdditiveNumber_impl([], num)
        return self.return_if

    def isAdditiveNumber_impl(self, curr, number):
        print(curr)
        print(number)
        if len(curr) >= 3:
            if len(number) > 1 and number[0] == "0":
                return
            if curr[-3] + curr[-2] != curr[-1]:
                return
            if len(number) == 0:
                self.return_if = True
        else:
            if len(number) == 0:
                return
        for i in range(len(number)):
            if len(number[: i + 1]) > 1 and number[0] == "0":
                continue
            curr_number = int(number[: i + 1])
            remain_number = number[i + 1 :]
            curr.append(curr_number)
            self.isAdditiveNumber_impl(curr, remain_number)
            curr.pop()


# @lc code=end
