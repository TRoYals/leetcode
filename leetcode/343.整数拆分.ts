/*
 * @lc app=leetcode.cn id=343 lang=typescript
 *
 * [343] 整数拆分
 *
 * https://leetcode.cn/problems/integer-break/description/
 *
 * algorithms
 * Medium (63.38%)
 * Likes:    1380
 * Dislikes: 0
 * Total Accepted:    336.6K
 * Total Submissions: 530.7K
 * Testcase Example:  '2'
 *
 * 给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。
 *
 * 返回 你可以获得的最大乘积 。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: n = 2
 * 输出: 1
 * 解释: 2 = 1 + 1, 1 × 1 = 1。
 *
 * 示例 2:
 *
 *
 * 输入: n = 10
 * 输出: 36
 * 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
 *
 *
 *
 * 提示:
 *
 *
 * 2 <= n <= 58
 *
 *
 */

// @lc code=start
function integerBreak(n: number): number {
  let dp = Array.from({ length: n + 1 }, () => 0);
  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] = Math.max(dp[i], (i - j) * dp[j], (i - j) * j);
    }
  }
  return dp[n];
}
// @lc code=end
