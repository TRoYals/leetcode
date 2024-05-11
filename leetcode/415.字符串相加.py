#
# @lc app=leetcode.cn id=415 lang=python3
#
# [415] 字符串相加
#
# https://leetcode.cn/problems/add-strings/description/
#
# algorithms
# Easy (54.57%)
# Likes:    812
# Dislikes: 0
# Total Accepted:    316.9K
# Total Submissions: 580.8K
# Testcase Example:  '"11"\n"123"'
#
# 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
#
# 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
#
#
#
# 示例 1：
#
#
# 输入：num1 = "11", num2 = "123"
# 输出："134"
#
#
# 示例 2：
#
#
# 输入：num1 = "456", num2 = "77"
# 输出："533"
#
#
# 示例 3：
#
#
# 输入：num1 = "0", num2 = "0"
# 输出："0"
#
#
#
#
#
#
# 提示：
#
#
# 1 <= num1.length, num2.length <= 10^4
# num1 和num2 都只包含数字 0-9
# num1 和num2 都不包含任何前导零
#
#
#


# @lc code=start
class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        ptr_num1 = 0
        ptr_num2 = 0
        res = 0
        return_num = []
        carry = 0
        while ptr_num1 < len(num1) or ptr_num2 < len(num2) or carry == 1:
            digit_1 = int(num1[len(num1) - 1 - ptr_num1]) if ptr_num1 < len(num1) else 0
            digit_2 = int(num2[len(num2) - 1 - ptr_num2]) if ptr_num2 < len(num2) else 0
            curr_digit = carry + digit_1 + digit_2
            carry = 0 if curr_digit < 10 else 1
            return_num.append(str(curr_digit % 10))
            ptr_num2 += 1
            ptr_num1 += 1
            res += 1
        reversed_num = reversed(return_num)
        return str("".join(reversed_num))


# @lc code=end
