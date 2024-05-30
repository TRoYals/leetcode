#
# @lc app=leetcode.cn id=475 lang=python3
#
# [475] 供暖器
#
# https://leetcode.cn/problems/heaters/description/
#
# algorithms
# Medium (41.32%)
# Likes:    476
# Dislikes: 0
# Total Accepted:    75.5K
# Total Submissions: 182.6K
# Testcase Example:  '[1,2,3]\n[2]'
#
# 冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。
#
# 在加热器的加热半径范围内的每个房屋都可以获得供暖。
#
# 现在，给出位于一条水平线上的房屋 houses 和供暖器 heaters 的位置，请你找出并返回可以覆盖所有房屋的最小加热半径。
#
# 注意：所有供暖器 heaters 都遵循你的半径标准，加热的半径也一样。
#
#
#
# 示例 1:
#
#
# 输入: houses = [1,2,3], heaters = [2]
# 输出: 1
# 解释: 仅在位置 2 上有一个供暖器。如果我们将加热半径设为 1，那么所有房屋就都能得到供暖。
#
#
# 示例 2:
#
#
# 输入: houses = [1,2,3,4], heaters = [1,4]
# 输出: 1
# 解释: 在位置 1, 4 上有两个供暖器。我们需要将加热半径设为 1，这样所有房屋就都能得到供暖。
#
#
# 示例 3：
#
#
# 输入：houses = [1,5], heaters = [2]
# 输出：3
#
#
#
#
# 提示：
#
#
# 1 <= houses.length, heaters.length <= 3 * 10^4
# 1 <= houses[i], heaters[i] <= 10^9
#
#
#


# @lc code=start
import bisect
from typing import List


class Solution:
    def findRadius(self, houses: List[int], heaters: List[int]) -> int:
        houses.sort()
        heaters.sort()
        max_length = 0
        for i in range(len(houses)):
            insert_num = bisect.bisect_left(heaters, houses[i], 0, len(heaters))
            if insert_num == 0:
                max_length = max(max_length, heaters[0] - houses[i])
            elif insert_num == len(heaters):
                max_length = max(max_length, houses[i] - heaters[len(heaters) - 1])
            else:
                max_length = max(
                    max_length,
                    min(
                        houses[i] - heaters[insert_num - 1],
                        heaters[insert_num] - houses[i],
                    ),
                )
        return max_length


# Solution().findRadius([1, 2, 3, 4], [1, 4])

# @lc code=end
