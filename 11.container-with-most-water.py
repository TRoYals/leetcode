#
# @lc app=leetcode id=11 lang=python3
#
# [11] Container With Most Water
#
from typing import List


# @lc code=start
class Solution:
    def maxArea(self, height: List[int]) -> int:
        l_pt = 0
        r_pt = len(height) - 1
        space = 0
        while l_pt < r_pt:
            space = max(space, min(height[r_pt], height[l_pt]) * (r_pt - l_pt))
            if height[l_pt] < height[r_pt]:
                l_pt = l_pt + 1
            else:
                r_pt = r_pt - 1
        return space


# @lc code=end
