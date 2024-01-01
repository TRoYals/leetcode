#
# @lc app=leetcode id=73 lang=python3
#
# [73] Set Matrix Zeroes
#
# https://leetcode.com/problems/set-matrix-zeroes/description/
#
# algorithms
# Medium (53.19%)
# Likes:    13623
# Dislikes: 681
# Total Accepted:    1.2M
# Total Submissions: 2.3M
# Testcase Example:  '[[1,1,1],[1,0,1],[1,1,1]]'
#
# Given an m x n integer matrix matrix, if an element is 0, set its entire row
# and column to 0's.
#
# You must do it in place.
#
#
# Example 1:
#
#
# Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
# Output: [[1,0,1],[0,0,0],[1,0,1]]
#
#
# Example 2:
#
#
# Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
# Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
#
#
#
# Constraints:
#
#
# m == matrix.length
# n == matrix[0].length
# 1 <= m, n <= 200
# -2^31 <= matrix[i][j] <= 2^31 - 1
#
#
#
# Follow up:
#
#
# A straightforward solution using O(mn) space is probably a bad idea.
# A simple improvement uses O(m + n) space, but still not the best
# solution.
# Could you devise a constant space solution?
#
#
#


# @lc code=start
class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        col_len = len(matrix)
        row_len = len(matrix[0])
        col_0 = [False] * col_len  # 使用布尔值更合适
        row_0 = [False] * row_len  # 使用布尔值更合适

        # 找出哪些行和列包含0
        for i in range(col_len):
            for j in range(row_len):
                if matrix[i][j] == 0:
                    col_0[i] = True
                    row_0[j] = True

        # 设置行为0
        for i in range(col_len):
            if col_0[i]:
                for j in range(row_len):
                    matrix[i][j] = 0

        # 设置列为0
        for j in range(row_len):
            if row_0[j]:
                for i in range(col_len):
                    matrix[i][j] = 0


# @lc code=end
