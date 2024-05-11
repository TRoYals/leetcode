#
# @lc app=leetcode.cn id=719 lang=python3
#
# [719] 找出第 K 小的数对距离
#
# https://leetcode.cn/problems/find-k-th-smallest-pair-distance/description/
#
# algorithms
# Hard (47.29%)
# Likes:    447
# Dislikes: 0
# Total Accepted:    37.5K
# Total Submissions: 79.3K
# Testcase Example:  '[1,3,1]\n1'
#
# 数对 (a,b) 由整数 a 和 b 组成，其数对距离定义为 a 和 b 的绝对差值。
#
# 给你一个整数数组 nums 和一个整数 k ，数对由 nums[i] 和 nums[j] 组成且满足 0 <= i < j < nums.length
# 。返回 所有数对距离中 第 k 小的数对距离。
#
#
#
# 示例 1：
#
#
# 输入：nums = [1,3,1], k = 1
# 输出：0
# 解释：数对和对应的距离如下：
# (1,3) -> 2
# (1,1) -> 0
# (3,1) -> 2
# 距离第 1 小的数对是 (1,1) ，距离为 0 。
#
#
# 示例 2：
#
#
# 输入：nums = [1,1,1], k = 2
# 输出：0
#
#
# 示例 3：
#
#
# 输入：nums = [1,6,1], k = 3
# 输出：5
#
#
#
#
# 提示：
#
#
# n == nums.length
# 2 <= n <= 10^4
# 0 <= nums[i] <= 10^6
# 1 <= k <= n * (n - 1) / 2
#
#
#


# @lc code=start
import bisect


class Solution:
    def smallestDistancePair(self, nums: List[int], k: int) -> int:
        nums.sort()

        def count_smaller(arr, dis):
            return len(arr) - bisect.bisect_left(arr, arr[-1] - dis, 0, len(arr))

        def possible(dis):
            count = 0
            for i in range(1, len(nums)):
                count += count_smaller(nums[0 : i + 1], dis)
                print(count)
                if count >= k:
                    return False

            return True

        print(count_smaller([1, 1], 0))
        print(possible(5))


# @lc code=end
