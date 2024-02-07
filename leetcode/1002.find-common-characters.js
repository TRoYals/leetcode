/*
 * @lc app=leetcode id=1002 lang=javascript
 *
 * [1002] Find Common Characters
 *
 * https://leetcode.com/problems/find-common-characters/description/
 *
 * algorithms
 * Easy (68.79%)
 * Likes:    3434
 * Dislikes: 290
 * Total Accepted:    204.1K
 * Total Submissions: 296.7K
 * Testcase Example:  '["bella","label","roller"]'
 *
 * Given a string array words, return an array of all characters that show up
 * in all strings within the words (including duplicates). You may return the
 * answer in any order.
 *
 *
 * Example 1:
 * Input: words = ["bella","label","roller"]
 * Output: ["e","l","l"]
 * Example 2:
 * Input: words = ["cool","lock","cook"]
 * Output: ["c","o"]
 *
 *
 * Constraints:
 *
 *
 * 1 <= words.length <= 100
 * 1 <= words[i].length <= 100
 * words[i] consists of lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let commonMap = {};
  [...words[0]].forEach((char) => {
    if (commonMap[char]) {
      commonMap[char]++;
    } else {
      commonMap[char] = 1;
    }
  });
  for (let i = 1; i < words.length; i++) {
    let wordMap = {};
    [...words[i]].forEach((char) => {
      if (wordMap[char]) {
        wordMap[char]++;
      } else {
        wordMap[char] = 1;
      }
    });
    Object.entries(commonMap).forEach(([char, freq]) => {
      if (!wordMap[char]) {
        delete commonMap[char];
        return;
      }
      if (freq > wordMap[char]) {
        commonMap[char] = wordMap[char];
      }
    });
  }
  let result = [];
  Object.entries(commonMap).forEach(([char, freq]) => {
    for (let i = 0; i < freq; i++) {
      result.push(char);
    }
  });
  return result;
};
// @lc code=end
