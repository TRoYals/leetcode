#
# @lc app=leetcode id=151 lang=python3
#
# [151] Reverse Words in a String
#


# @lc code=start
class Solution:
    def reverseWords(self, s: str) -> str:
        split_list = s.split(" ")
        str_only_list = [item for item in split_list if item != ""]
        reversed_list = str_only_list[::-1]

        return " ".join(reversed_list)


# @lc code=end
