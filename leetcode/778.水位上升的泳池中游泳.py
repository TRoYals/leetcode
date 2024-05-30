#
# @lc app=leetcode.cn id=778 lang=python3
#
# [778] 水位上升的泳池中游泳
#
# https://leetcode.cn/problems/swim-in-rising-water/description/
#
# algorithms
# Hard (59.19%)
# Likes:    300
# Dislikes: 0
# Total Accepted:    36.3K
# Total Submissions: 61.3K
# Testcase Example:  '[[0,2],[1,3]]'
#
# 在一个 n x n 的整数矩阵 grid 中，每一个方格的值 grid[i][j] 表示位置 (i, j) 的平台高度。
#
# 当开始下雨时，在时间为 t 时，水池中的水位为 t
# 。你可以从一个平台游向四周相邻的任意一个平台，但是前提是此时水位必须同时淹没这两个平台。假定你可以瞬间移动无限距离，也就是默认在方格内部游动是不耗时的。当然，在你游泳的时候你必须待在坐标方格里面。
#
# 你从坐标方格的左上平台 (0，0) 出发。返回 你到达坐标方格的右下平台 (n-1, n-1) 所需的最少时间 。
#
#
#
# 示例 1:
#
#
#
#
# 输入: grid = [[0,2],[1,3]]
# 输出: 3
# 解释:
# 时间为0时，你位于坐标方格的位置为 (0, 0)。
# 此时你不能游向任意方向，因为四个相邻方向平台的高度都大于当前时间为 0 时的水位。
# 等时间到达 3 时，你才可以游向平台 (1, 1). 因为此时的水位是 3，坐标方格中的平台没有比水位 3 更高的，所以你可以游向坐标方格中的任意位置
#
#
# 示例 2:
#
#
#
#
# 输入: grid =
# [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
# 输出: 16
# 解释: 最终的路线用加粗进行了标记。
# 我们必须等到时间为 16，此时才能保证平台 (0, 0) 和 (4, 4) 是连通的
#
#
#
#
# 提示:
#
#
# n == grid.length
# n == grid[i].length
# 1 <= n <= 50
# 0 <= grid[i][j] < n^2
# grid[i][j] 中每个值 均无重复
#
#
#

# @lc code=start
from typing import List


class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:

        def find_max(array):
            max_value = 0
            for row in array:
                for element in row:
                    if element > max_value:
                        max_value = element
            return max_value

        def dfs(x, y, cur_max):
            nonlocal is_found
            if is_found:
                return
            if x < 0 or x >= len(grid) or y < 0 or y >= len(grid[0]):
                return
            if visited[x][y] == 1:
                return
            if grid[x][y] > cur_max:
                return
            if x == len(grid) - 1 and y == len(grid[0]) - 1:
                is_found = True
                return
            visited[x][y] = 1
            dfs(x - 1, y, cur_max)
            dfs(x + 1, y, cur_max)
            dfs(x, y + 1, cur_max)
            dfs(x, y - 1, cur_max)
            return

        l = 0
        r = find_max(grid)
        while l <= r:
            visited = [[0] * len(grid) for _ in range(len(grid[0]))]
            mid = (l + r) // 2
            is_found = False
            dfs(0, 0, mid)
            if is_found:
                r = mid - 1
            else:
                l = mid + 1
        return l


# @lc code=end
