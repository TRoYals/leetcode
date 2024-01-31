/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 *
 * https://leetcode.com/problems/palindrome-partitioning/description/
 *
 * algorithms
 * Medium (66.93%)
 * Likes:    12135
 * Dislikes: 407
 * Total Accepted:    753.1K
 * Total Submissions: 1.1M
 * Testcase Example:  '"aab"'
 *
 * Given a string s, partition s such that every substring of the partition is
 * a palindrome. Return all possible palindrome partitioning of s.
 *
 *
 * Example 1:
 * Input: s = "aab"
 * Output: [["a","a","b"],["aa","b"]]
 * Example 2:
 * Input: s = "a"
 * Output: [["a"]]
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 16
 * s contains only lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
//写完意识到curNum是完全没用的, 不过能意识到这个问题, 还是可以的... 就不修改了
var partition = function (s) {
  let result = [];
  let isPalindrome = function (str) {
    if (str.length == 1) {
      return true;
    }
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] != str[str.length - i - 1]) return false;
    }
    return true;
  };
  let partitionImpl = function (index, temp, curNum) {
    if (temp.length >= 1 && isPalindrome(temp[temp.length - 1]) == false)
      return;
    if (curNum > s.length || index > s.length) return;
    if (curNum == s.length) {
      result.push([...temp]);
    }
    for (let i = index; i < s.length; i++) {
      temp.push(s.slice(index, i + 1));
      curNum = curNum + i + 1 - index;
      partitionImpl(i + 1, temp, curNum);
      temp.pop();
      curNum = curNum - i + index - 1;
    }
  };
  partitionImpl(0, [], 0);
  return result;
};
// @lc code=end
