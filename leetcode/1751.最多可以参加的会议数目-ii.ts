/*
 * @lc app=leetcode.cn id=1751 lang=typescript
 *
 * [1751] 最多可以参加的会议数目 II
 *
 * https://leetcode.cn/problems/maximum-number-of-events-that-can-be-attended-ii/description/
 *
 * algorithms
 * Hard (54.55%)
 * Likes:    100
 * Dislikes: 0
 * Total Accepted:    8.1K
 * Total Submissions: 14.8K
 * Testcase Example:  '[[1,2,4],[3,4,3],[2,3,1]]\n2'
 *
 * 给你一个 events 数组，其中 events[i] = [startDayi, endDayi, valuei] ，表示第 i 个会议在
 * startDayi 天开始，第 endDayi 天结束，如果你参加这个会议，你能得到价值 valuei 。同时给你一个整数 k
 * 表示你能参加的最多会议数目。
 *
 * 你同一时间只能参加一个会议。如果你选择参加某个会议，那么你必须 完整
 * 地参加完这个会议。会议结束日期是包含在会议内的，也就是说你不能同时参加一个开始日期与另一个结束日期相同的两个会议。
 *
 * 请你返回能得到的会议价值 最大和 。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：events = [[1,2,4],[3,4,3],[2,3,1]], k = 2
 * 输出：7
 * 解释：选择绿色的活动会议 0 和 1，得到总价值和为 4 + 3 = 7 。
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：events = [[1,2,4],[3,4,3],[2,3,10]], k = 2
 * 输出：10
 * 解释：参加会议 2 ，得到价值和为 10 。
 * 你没法再参加别的会议了，因为跟会议 2 有重叠。你 不 需要参加满 k 个会议。
 *
 * 示例 3：
 *
 *
 *
 *
 * 输入：events = [[1,1,1],[2,2,2],[3,3,3],[4,4,4]], k = 3
 * 输出：9
 * 解释：尽管会议互不重叠，你只能参加 3 个会议，所以选择价值最大的 3 个会议。
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 * 1 i i
 * 1 i
 *
 *
 */

// @lc code=start
function maxValue(events: number[][], k: number): number {
  events.sort((a, b) => a[1] - b[1]);
  let dp = Array.from({ length: events.length }, () =>
    Array.from({ length: k })
  );
  function findLargestStart(startTime) {
    let l = 0;
    let r = dp.length - 1;
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (dp[mid] <= startTime) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return r;
  }
  for (let item of events) {
    let sta = item[0];
    let end = item[1];
    let val = item[2];
  }
  return 1;
}
// @lc code=end
