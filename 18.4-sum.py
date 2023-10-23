#
# @lc app=leetcode id=18 lang=python3
#
# [18] 4Sum
#
from typing import List


# @lc code=start
class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        nums.sort()
        output = []
        for pt_1 in range(len(nums) - 3):
            for pt_2 in range(pt_1 + 1, len(nums) - 2):
                l = pt_2 + 1
                r = len(nums) - 1
                while l < r:
                    temp_sum = nums[pt_1] + nums[pt_2] + nums[l] + nums[r]
                    if temp_sum < target:
                        l = l + 1
                    elif temp_sum > target:
                        r = r - 1
                    else:
                        if not self.is_list_exist(
                            [nums[pt_1], nums[pt_2], nums[l], nums[r]], output
                        ):
                            output.append([nums[pt_1], nums[pt_2], nums[l], nums[r]])
                        l = l + 1
                        r = r - 1
        return output

    def is_list_exist(self, nums: List[int], output: List[List[int]]) -> bool:
        if nums in output:
            return True
        return False


# @lc code=end
test = Solution()
print(test.fourSum([2, 2, 2, 2, 2], 8))
