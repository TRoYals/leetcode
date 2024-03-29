/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (64.14%)
 * Likes:    11629
 * Dislikes: 372
 * Total Accepted:    3.1M
 * Total Submissions: 4.9M
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t, return true if t is an anagram of s, and false
 * otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a
 * different word or phrase, typically using all the original letters exactly
 * once.
 *
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length, t.length <= 5 * 10^4
 * s and t consist of lowercase English letters.
 *
 *
 *
 * Follow up: What if the inputs contain Unicode characters? How would you
 * adapt your solution to such a case?
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let hashMap = {};
  [...s].forEach((char) => {
    if (hashMap[char]) {
      hashMap[char]++;
    } else {
      hashMap[char] = 1;
    }
  });
  for (let i = 0; i < t.length; i++) {
    if (hashMap[t[i]]) {
      hashMap[t[i]]--;
    } else {
      return false;
    }
  }
  let arr = Object.entries(hashMap);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] != 0) return false;
  }
  return true;
};
// @lc code=end
