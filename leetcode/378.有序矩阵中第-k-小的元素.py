#
# @lc app=leetcode.cn id=378 lang=python3
#
# [378] 有序矩阵中第 K 小的元素
#
# https://leetcode.cn/problems/kth-smallest-element-in-a-sorted-matrix/description/
#
# algorithms
# Medium (63.74%)
# Likes:    1051
# Dislikes: 0
# Total Accepted:    134.5K
# Total Submissions: 211K
# Testcase Example:  '[[1,5,9],[10,11,13],[12,13,15]]\n8'
#
# 给你一个 n x n 矩阵 matrix ，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
# 请注意，它是 排序后 的第 k 小元素，而不是第 k 个 不同 的元素。
#
# 你必须找到一个内存复杂度优于 O(n^2) 的解决方案。
#
#
#
# 示例 1：
#
#
# 输入：matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
# 输出：13
# 解释：矩阵中的元素为 [1,5,9,10,11,12,13,13,15]，第 8 小元素是 13
#
#
# 示例 2：
#
#
# 输入：matrix = [[-5]], k = 1
# 输出：-5
#
#
#
#
# 提示：
#
#
# n == matrix.length
# n == matrix[i].length
# 1 <= n <= 300
# -10^9 <= matrix[i][j] <= 10^9
# 题目数据 保证 matrix 中的所有行和列都按 非递减顺序 排列
# 1 <= k <= n^2
#
#
#
#
# 进阶：
#
#
# 你能否用一个恒定的内存(即 O(1) 内存复杂度)来解决这个问题?
# 你能在 O(n) 的时间复杂度下解决这个问题吗?这个方法对于面试来说可能太超前了，但是你会发现阅读这篇文章（ this paper ）很有趣。
#
#
#


# @lc code=start
class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        def is_satisfied(num):
            # given a guess num, return if satisfied
            count = 0
            for i in range(len(matrix)):
                for j in range(len(matrix[0])):
                    if matrix[i][j] <= num:
                        count += 1
            return count

        l, r = matrix[0][0], matrix[len(matrix) - 1][len(matrix) - 1]
        while l <= r:
            mid = (l + r) // 2
            if is_satisfied(mid) < k:
                l = mid + 1
            else:
                r = mid - 1
        return l


# @lc code=end
