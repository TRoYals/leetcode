#
# @lc app=leetcode.cn id=43 lang=python3
#
# [43] 字符串相乘
#
# https://leetcode.cn/problems/multiply-strings/description/
#
# algorithms
# Medium (44.30%)
# Likes:    1333
# Dislikes: 0
# Total Accepted:    341.3K
# Total Submissions: 770.2K
# Testcase Example:  '"2"\n"3"'
#
# 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
#
# 注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。
#
#
#
# 示例 1:
#
#
# 输入: num1 = "2", num2 = "3"
# 输出: "6"
#
# 示例 2:
#
#
# 输入: num1 = "123", num2 = "456"
# 输出: "56088"
#
#
#
# 提示：
#
#
# 1 <= num1.length, num2.length <= 200
# num1 和 num2 只能由数字组成。
# num1 和 num2 都不包含任何前导零，除了数字0本身。
#
#
#


# @lc code=start
class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        ptr_num1 = 0
        carry = 0
        return_arr = []
        value = [0 for _ in range(len(num1) + len(num2))]
        while ptr_num1 < len(num1):
            digit_1 = int(num1[len(num1) - ptr_num1 - 1])
            for i in range(0, len(num2)):
                digit_2 = int(num2[len(num2) - i - 1])
                curr_digit = digit_1 * digit_2
                value[-(i + 1 + ptr_num1)] += curr_digit
            ptr_num1 += 1
        for i in range(len(value)):
            curr = len(value) - 1 - i
            curr_value = value[curr] + carry
            return_arr.append(str(curr_value % 10))
            carry = curr_value // 10
        index = 0
        number_str = "".join(reversed(return_arr[index::]))
        for i in range(len(number_str)):
            if number_str[i] == "0":
                index += 1
            else:
                break
        if index == len(num1) + len(num2):
            return "0"
        return number_str[index::]


# @lc code=end
