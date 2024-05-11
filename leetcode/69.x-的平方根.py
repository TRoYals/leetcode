#
# @lc app=leetcode.cn id=69 lang=python3
#
# [69] x 的平方根
#
# https://leetcode.cn/problems/sqrtx/description/
#
# algorithms
# Easy (38.51%)
# Likes:    1539
# Dislikes: 0
# Total Accepted:    898.7K
# Total Submissions: 2.3M
# Testcase Example:  '4'
#
# 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
#
# 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
#
# 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
#
#
#
# 示例 1：
#
#
# 输入：x = 4
# 输出：2
#
#
# 示例 2：
#
#
# 输入：x = 8
# 输出：2
# 解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
#
#
#
#
# 提示：
#
#
# 0 <= x <= 2^31 - 1
#
#
#


# @lc code=start
class Solution:
    def mySqrt(self, x: int) -> int:
        l, r = 0, x
        while l <= r:
            mid = (l + r) // 2
            if mid * mid == x:
                return mid
            if mid * mid > x:
                r = mid - 1
            else:
                l = mid + 1
        return r


# @lc code=end
