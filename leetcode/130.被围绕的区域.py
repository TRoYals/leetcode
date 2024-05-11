#
# @lc app=leetcode.cn id=130 lang=python3
#
# [130] 被围绕的区域
#
# https://leetcode.cn/problems/surrounded-regions/description/
#
# algorithms
# Medium (46.43%)
# Likes:    1119
# Dislikes: 0
# Total Accepted:    279.7K
# Total Submissions: 602.3K
# Testcase Example:  '[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]'
#
# 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X'
# 填充。
#
#
#
#
# 示例 1：
#
#
# 输入：board =
# [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
# 输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
# 解释：被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O'
# 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
#
#
# 示例 2：
#
#
# 输入：board = [["X"]]
# 输出：[["X"]]
#
#
#
#
# 提示：
#
#
# m == board.length
# n == board[i].length
# 1
# board[i][j] 为 'X' 或 'O'
#
#
#
#
#


# @lc code=start
class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        marked = []
        for i in range(len(board)):
            marked.append([*board[i]])

        def dfs(x, y, list):
            if marked[x][y] == "X":
                return True
            list.append([x, y])
            if x == 0 or y == 0 or x == len(board) - 1 or y == len(board[0]) - 1:
                return False
            marked[x][y] = "X"
            up = dfs(x, y + 1, list)
            down = dfs(x, y - 1, list)
            left = dfs(x - 1, y, list)
            right = dfs(x + 1, y, list)
            return_bool = up and down and left and right
            return return_bool

        for i in range(len(board)):
            for j in range(len(board[0])):
                if marked[i][j] == "O":
                    list = []
                    is_isolated = dfs(i, j, list)
                    if is_isolated:
                        for k in list:
                            board[k[0]][k[1]] = "X"


# @lc code=end
