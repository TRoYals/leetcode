/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 *
 * https://leetcode.com/problems/combinations/description/
 *
 * algorithms
 * Medium (69.88%)
 * Likes:    8004
 * Dislikes: 209
 * Total Accepted:    848.2K
 * Total Submissions: 1.2M
 * Testcase Example:  '4\n2'
 *
 * Given two integers n and k, return all possible combinations of k numbers
 * chosen from the range [1, n].
 *
 * You may return the answer in any order.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 4, k = 2
 * Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
 * Explanation: There are 4 choose 2 = 6 total combinations.
 * Note that combinations are unordered, i.e., [1,2] and [2,1] are considered
 * to be the same combination.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 1, k = 1
 * Output: [[1]]
 * Explanation: There is 1 choose 1 = 1 total combination.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 20
 * 1 <= k <= n
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [];
  let arr = Array.from({ length: n }, (_, index) => index + 1);
  let temp = [];
  let combineImpl = function (arr, temp) {
    if (temp.length == k) {
      result.push([...temp]);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      temp.push(arr[i]);
      let arrTemp = arr.slice(i + 1, arr.length);
      combineImpl(arrTemp, temp);
      temp.pop();
    }
  };
  combineImpl(arr, temp);
  return result;
};

// @lc code=end
