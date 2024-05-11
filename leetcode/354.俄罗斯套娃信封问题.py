#
# @lc app=leetcode.cn id=354 lang=python3
#
# [354] 俄罗斯套娃信封问题
#
# https://leetcode.cn/problems/russian-doll-envelopes/description/
#
# algorithms
# Hard (35.95%)
# Likes:    1008
# Dislikes: 0
# Total Accepted:    114.4K
# Total Submissions: 318.8K
# Testcase Example:  '[[5,4],[6,4],[6,7],[2,3]]'
#
# 给你一个二维整数数组 envelopes ，其中 envelopes[i] = [wi, hi] ，表示第 i 个信封的宽度和高度。
#
# 当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。
#
# 请计算 最多能有多少个 信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。
#
# 注意：不允许旋转信封。
#
#
# 示例 1：
#
#
# 输入：envelopes = [[5,4],[6,4],[6,7],[2,3]]
# 输出：3
# 解释：最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。
#
# 示例 2：
#
#
# 输入：envelopes = [[1,1],[1,1],[1,1]]
# 输出：1
#
#
#
#
# 提示：
#
#
# 1 <= envelopes.length <= 10^5
# envelopes[i].length == 2
# 1 <= wi, hi <= 10^5
#
#
#


# @lc code=start
class Solution:
    def maxEnvelopes(self, envelopes: List[List[int]]) -> int:
        return self.backTracking(envelopes, [0, 0], 0)

    def backTracking(
        self, envelopes: List[List[int]], curr: List[int], curr_length: int
    ) -> int:
        max_length = curr_length
        for i in range(0, len(envelopes)):
            if curr[0] < envelopes[i][0] and curr[1] < envelopes[i][1]:
                temp_length = curr_length + 1
                temp_curr = envelopes[i]
                temp = envelopes[:i] + envelopes[i + 1 :]
                new_length = self.backTracking(temp, temp_curr, temp_length)
                max_length = max(max_length, new_length)
        return max_length


# @lc code=end
