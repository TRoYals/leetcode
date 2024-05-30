#
# @lc app=leetcode.cn id=467 lang=python3
#
# [467] 环绕字符串中唯一的子字符串
#
# https://leetcode.cn/problems/unique-substrings-in-wraparound-string/description/
#
# algorithms
# Medium (51.71%)
# Likes:    413
# Dislikes: 0
# Total Accepted:    42K
# Total Submissions: 81K
# Testcase Example:  '"a"'
#
# 定义字符串 base 为一个 "abcdefghijklmnopqrstuvwxyz" 无限环绕的字符串，所以 base 看起来是这样的：
# 
# 
# "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....".
# 
# 
# 给你一个字符串 s ，请你统计并返回 s 中有多少 不同非空子串 也在 base 中出现。
# 
# 
# 
# 示例 1：
# 
# 
# 输入：s = "a"
# 输出：1
# 解释：字符串 s 的子字符串 "a" 在 base 中出现。
# 
# 
# 示例 2：
# 
# 
# 输入：s = "cac"
# 输出：2
# 解释：字符串 s 有两个子字符串 ("a", "c") 在 base 中出现。
# 
# 
# 示例 3：
# 
# 
# 输入：s = "zab"
# 输出：6
# 解释：字符串 s 有六个子字符串 ("z", "a", "b", "za", "ab", and "zab") 在 base 中出现。
# 
# 
# 
# 
# 提示：
# 
# 
# 1 <= s.length <= 10^5
# s 由小写英文字母组成
# 
# 
#

# @lc code=start
class Solution:
    def findSubstringInWraproundString(self, s: str) -> int:
# @lc code=end

