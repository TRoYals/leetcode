/*
 * @lc app=leetcode id=451 lang=javascript
 *
 * [451] Sort Characters By Frequency
 *
 * https://leetcode.com/problems/sort-characters-by-frequency/description/
 *
 * algorithms
 * Medium (71.46%)
 * Likes:    7749
 * Dislikes: 257
 * Total Accepted:    623.3K
 * Total Submissions: 872.7K
 * Testcase Example:  '"tree"'
 *
 * Given a string s, sort it in decreasing order based on the frequency of the
 * characters. The frequency of a character is the number of times it appears
 * in the string.
 *
 * Return the sorted string. If there are multiple answers, return any of
 * them.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "tree"
 * Output: "eert"
 * Explanation: 'e' appears twice while 'r' and 't' both appear once.
 * So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid
 * answer.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "cccaaa"
 * Output: "aaaccc"
 * Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and
 * "aaaccc" are valid answers.
 * Note that "cacaca" is incorrect, as the same characters must be together.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "Aabb"
 * Output: "bbAa"
 * Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
 * Note that 'A' and 'a' are treated as two different characters.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 5 * 10^5
 * s consists of uppercase and lowercase English letters and digits.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let hashMap = {};
  [...s].forEach((char) => {
    if (hashMap[char]) {
      hashMap[char]++;
    } else {
      hashMap[char] = 1;
    }
  });
  let arr = Object.entries(hashMap);
  arr.sort((a, b) => b[1] - a[1]);
  let result = arr.map(([char, freq]) => char.repeat(freq)).join("");
  return result;
};

// @lc code=end
