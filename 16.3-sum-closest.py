#
# @lc app=leetcode id=16 lang=python3
#
# [16] 3Sum Closest
#
from typing import List


# @lc code=start
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        output = nums[0] + nums[1] + nums[2]
        for i in range(len(nums) - 2):
            l = i + 1
            r = len(nums) - 1
            while l < r:
                temp_sum = nums[i] + nums[l] + nums[r]
                if abs(temp_sum - target) < abs(output - target):
                    output = temp_sum
                if temp_sum > target:
                    r = r - 1
                elif temp_sum < target:
                    l = l + 1
                else:
                    return target
        return output


# @lc code=end
