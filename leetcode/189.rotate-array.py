#
# @lc app=leetcode id=189 lang=python3
#
# [189] Rotate Array
#
# https://leetcode.com/problems/rotate-array/description/
#
# algorithms
# Medium (40.06%)
# Likes:    16886
# Dislikes: 1843
# Total Accepted:    1.9M
# Total Submissions: 4.6M
# Testcase Example:  '[1,2,3,4,5,6,7]\n3'
#
# Given an integer array nums, rotate the array to the right by k steps, where
# k is non-negative.
#
#
# Example 1:
#
#
# Input: nums = [1,2,3,4,5,6,7], k = 3
# Output: [5,6,7,1,2,3,4]
# Explanation:
# rotate 1 steps to the right: [7,1,2,3,4,5,6]
# rotate 2 steps to the right: [6,7,1,2,3,4,5]
# rotate 3 steps to the right: [5,6,7,1,2,3,4]
#
#
# Example 2:
#
#
# Input: nums = [-1,-100,3,99], k = 2
# Output: [3,99,-1,-100]
# Explanation:
# rotate 1 steps to the right: [99,-1,-100,3]
# rotate 2 steps to the right: [3,99,-1,-100]
#
#
#
# Constraints:
#
#
# 1 <= nums.length <= 10^5
# -2^31 <= nums[i] <= 2^31 - 1
# 0 <= k <= 10^5
#
#
#
# Follow up:
#
#
# Try to come up with as many solutions as you can. There are at least three
# different ways to solve this problem.
# Could you do it in-place with O(1) extra space?
#
#
#


# @lc code=start
class Solution:
    def move_once(self, nums: List[int]) -> None:
        temp = nums[-1]
        for i in range(
            len(nums) - 1, 0, -1
        ):  # Start from the end and move towards the start
            nums[i] = nums[i - 1]  # Shift numbers to the right
        nums[0] = temp  # Place the last element at the beginning

    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        k = k % len(nums)  # In case k is larger than the array length
        for i in range(k):
            self.move_once(nums)


# @lc code=end
