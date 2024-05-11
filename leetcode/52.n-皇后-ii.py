#
# @lc app=leetcode.cn id=52 lang=python3
#
# [52] N 皇后 II
#
# https://leetcode.cn/problems/n-queens-ii/description/
#
# algorithms
# Hard (82.28%)
# Likes:    515
# Dislikes: 0
# Total Accepted:    148.1K
# Total Submissions: 180.1K
# Testcase Example:  '4'
#
# n 皇后问题 研究的是如何将 n 个皇后放置在 n × n 的棋盘上，并且使皇后彼此之间不能相互攻击。
#
# 给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。
#
#
#
#
#
# 示例 1：
#
#
# 输入：n = 4
# 输出：2
# 解释：如上图所示，4 皇后问题存在两个不同的解法。
#
#
# 示例 2：
#
#
# 输入：n = 1
# 输出：1
#
#
#
#
# 提示：
#
#
# 1 <= n <= 9
#
#
#
#
#


# @lc code=start
class Solution:
    def __init__(self):
        self.solution = 0

    def totalNQueens(self, n: int) -> int:
        arr = [0] * (n**2)
        self.totalNQueens_impl(n, arr, n)
        for i in range(1, n + 1):
            self.solution = self.solution // i
        return self.solution

    def totalNQueens_impl(self, n, arr, count):
        if sum(arr) == n**2 and count == 0:
            self.solution += 1
        if sum(arr) == n**2:
            return
        for i in range(len(arr)):
            if arr[i] == 0:
                x, y = self.index_to_pos(i, n)
                temp_arr = self.queen_domin(n, x, y, [*arr])
                count = count - 1
                self.totalNQueens_impl(n, temp_arr, count)
                count = count + 1

    def queen_domin(self, n, x, y, arr) -> list:
        for i in range(n):
            arr[self.pos_to_index(x, i, n)] = 1
            arr[self.pos_to_index(i, y, n)] = 1
        dd = [(-1, 1), (1, 1), (-1, -1), (1, -1)]
        for i in range(4):
            dx = dd[i][0]
            dy = dd[i][1]
            temp_x = x
            temp_y = y
            while (
                temp_x + dx >= 0
                and temp_y + dy >= 0
                and temp_x + dx < n
                and temp_y + dy < n
            ):
                arr[self.pos_to_index(temp_x + dx, temp_y + dy, n)] = 1
                temp_x = temp_x + dx
                temp_y = temp_y + dy
        return arr

    def pos_to_index(self, x, y, n):
        return n * x + y

    def index_to_pos(self, index, n):
        x = index // n
        y = index % n
        return x, y


# @lc code=end
