# Longest Substring Without Repeating Characters - LeetCode
# https://leetcode.com/problems/longest-substring-without-repeating-characters/Longest Substring Without Repeating Characters - LeetCode
class Solution:
    max_length: int = 0
    curr_str = ""

    def lengthOfLongestSubstring(self, s: str) -> int:
        left_ptr = 0
        right_ptr = 0
        while right_ptr < len(s) - 1:
            self.curr_str: str = s[left_ptr : right_ptr + 1]
            new_char: str = s[right_ptr + 1]
            index: int = self.curr_str.find(new_char)
            right_ptr = right_ptr + 1
            if index != -1:
                left_ptr = left_ptr + index + 1
            self.curr_str: str = s[left_ptr : right_ptr + 1]
            self.max_length = (
                self.max_length
                if len(self.curr_str) <= self.max_length
                else len(self.curr_str)
            )
        if len(s) == 1:
            self.max_length = 1
        return self.max_length


test = Solution()
print(test.lengthOfLongestSubstring(" "))
