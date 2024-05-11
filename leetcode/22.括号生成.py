#
# @lc app=leetcode.cn id=22 lang=python3
#
# [22] 括号生成
#
# https://leetcode.cn/problems/generate-parentheses/description/
#
# algorithms
# Medium (77.66%)
# Likes:    3568
# Dislikes: 0
# Total Accepted:    837.1K
# Total Submissions: 1.1M
# Testcase Example:  '3'
#
# 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
#
#
#
# 示例 1：
#
#
# 输入：n = 3
# 输出：["((()))","(()())","(())()","()(())","()()()"]
#
#
# 示例 2：
#
#
# 输入：n = 1
# 输出：["()"]
#
#
#
#
# 提示：
#
#
# 1 <= n <= 8
#
#
#


# @lc code=start
class Solution:
    def __init__(self):
        self.return_arr = []

    def generateParenthesis(self, n: int) -> List[str]:
        self.generateParenthesis_impl([], n, n)
        return self.return_arr

    def generateParenthesis_impl(self, curr, left, right):
        if left > right or left < 0 or right < 0:
            return
        if right == 0 and left == 0:
            self.return_arr.append("".join([*curr]))

        curr.append("(")
        left -= 1
        self.generateParenthesis_impl(curr, left, right)
        left += 1
        curr.pop()
        curr.append(")")
        right -= 1
        self.generateParenthesis_impl(curr, left, right)
        right += 1
        curr.pop()


# @lc code=end
