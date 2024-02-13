/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 *
 * https://leetcode.com/problems/backspace-string-compare/description/
 *
 * algorithms
 * Easy (49.10%)
 * Likes:    7406
 * Dislikes: 344
 * Total Accepted:    791.3K
 * Total Submissions: 1.6M
 * Testcase Example:  '"ab#c"\n"ad#c"'
 *
 * Given two strings s and t, return true if they are equal when both are typed
 * into empty text editors. '#' means a backspace character.
 *
 * Note that after backspacing an empty text, the text will continue empty.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "ab#c", t = "ad#c"
 * Output: true
 * Explanation: Both s and t become "ac".
 *
 *
 * Example 2:
 *
 *
 * Input: s = "ab##", t = "c#d#"
 * Output: true
 * Explanation: Both s and t become "".
 *
 *
 * Example 3:
 *
 *
 * Input: s = "a#c", t = "b"
 * Output: false
 * Explanation: s becomes "c" while t becomes "b".
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length, t.length <= 200
 * s and t only contain lowercase letters and '#' characters.
 *
 *
 *
 * Follow up: Can you solve it in O(n) time and O(1) space?
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let strInput = function (str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] != "#") {
        result.push(str[i]);
      } else if (result.length > 0) {
        result.pop();
      }
    }
    return result.join("");
  };

  return strInput(s) === strInput(t);
};

// @lc code=end
