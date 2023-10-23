// [3. 无重复字符的最长子串 - 力扣（LeetCode）](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let right = 0;
  let max = 0;
  let arr = "";
  while (left <= right && right < s.length) {
    arr = s.slice(left, right);
    if (arr.indexOf(s[right]) == -1) {
      max = arr.length + 1 > max ? arr.length + 1 : max;
      right++;
    } else {
      max = arr.length > max ? arr.length : max;
      left = arr.indexOf(s[right]) + 1 + left;
    }
  }

  return max;
};

console.log(lengthOfLongestSubstring(" "));
