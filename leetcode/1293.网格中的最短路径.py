#
# @lc app=leetcode.cn id=1293 lang=python3
#
# [1293] 网格中的最短路径
#
# https://leetcode.cn/problems/shortest-path-in-a-grid-with-obstacles-elimination/description/
#
# algorithms
# Hard (38.87%)
# Likes:    268
# Dislikes: 0
# Total Accepted:    24.6K
# Total Submissions: 63.2K
# Testcase Example:  '[[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]]\n1'
#
# 给你一个 m * n 的网格，其中每个单元格不是 0（空）就是 1（障碍物）。每一步，您都可以在空白单元格中上、下、左、右移动。
#
# 如果您 最多 可以消除 k 个障碍物，请找出从左上角 (0, 0) 到右下角 (m-1, n-1)
# 的最短路径，并返回通过该路径所需的步数。如果找不到这样的路径，则返回 -1 。
#
#
#
# 示例 1：
#
#
#
#
# 输入： grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1
# 输出：6
# 解释：
# 不消除任何障碍的最短路径是 10。
# 消除位置 (3,2) 处的障碍后，最短路径是 6 。该路径是 (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) ->
# (3,2) -> (4,2).
#
#
# 示例 2：
#
#
#
#
# 输入：grid = [[0,1,1],[1,1,1],[1,0,0]], k = 1
# 输出：-1
# 解释：我们至少需要消除两个障碍才能找到这样的路径。
#
#
#
#
# 提示：
#
#
# grid.length == m
# grid[0].length == n
# 1 <= m, n <= 40
# 1 <= k <= m*n
# grid[i][j] 是 0 或 1
# grid[0][0] == grid[m-1][n-1] == 0
#
#
#


# @lc code=start
class Solution:
    def shortestPath(self, grid: List[List[int]], k: int) -> int:
        max_int = 100
        visitid = [[0] * 40 for _ in range(40)]
        if k > len(grid) + len(grid[0]) - 2:
            return len(grid) + len(grid[0]) - 2

        def dfs(i, j, count, k):
            if i < 0 or j < 0 or i >= len(grid) or j >= len(grid[0]):
                return max_int
            if i == len(grid) - 1 and j == len(grid[0]) - 1:
                return count
            if visitid[i][j] == 1:
                return max_int
            if grid[i][j] == 1:
                if k > 0:
                    k -= 1
                else:
                    return max_int
            visitid[i][j] = 1
            count += 1
            left_min = dfs(i - 1, j, count, k)
            right_min = dfs(i + 1, j, count, k)
            up_min = dfs(i, j + 1, count, k)
            down_min = dfs(i, j - 1, count, k)
            visitid[i][j] = 0  # BACKTRACKING
            return min(left_min, right_min, up_min, down_min)

        answer = dfs(0, 0, 0, k)
        return -1 if answer == max_int else answer


# @lc code=end
