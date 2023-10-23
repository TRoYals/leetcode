#
# @lc app=leetcode id=15 lang=python3
#
# [15] 3Sum
#
from typing import List


# @lc code=start
# class Solution:
#     def threeSum(self, nums: List[int]) -> List[List[int]]:
#         return_list = []
#         for i in range(len(nums) - 2):
#             for j in range(i + 1, len(nums) - 1):
#                 temp = nums[i] + nums[j]
#                 for k in range(j + 1, len(nums)):
#                     if temp + nums[k] == 0:
#                         temp_list = [nums[i], nums[j], nums[k]]
#                         if not self.is_nums_exist(temp_list, return_list):
#                             return_list.append(temp_list)
#         return return_list

#     def is_nums_exist(self, single_list: List[int], nums: List[List[int]]) -> bool:
#         single_list.sort()
#         return single_list in nums


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        res = []
        for i in range(len(nums) - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            j = i + 1
            k = len(nums) - 1
            while j < k:
                if nums[i] + nums[j] + nums[k] < 0:
                    j = j + 1
                elif nums[i] + nums[j] + nums[k] > 0:
                    k = k - 1
                else:
                    res.append([nums[i], nums[j], nums[k]])

                    while j < k and nums[j] == nums[j + 1]:
                        j = j + 1
                    while j < k and nums[k] == nums[k - 1]:
                        k = k - 1
                    j = j + 1
                    k = k - 1
        return res


# @lc code=end
