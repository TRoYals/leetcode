/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (39.81%)
 * Likes:    10163
 * Dislikes: 0
 * Total Accepted:    2.9M
 * Total Submissions: 7.2M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: s = "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *
 * 示例 3:
 *
 *
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= s.length <= 5 * 10^4
 * s 由英文字母、数字、符号和空格组成
 *
 *
 */

let testStr = "abba"
console.log(lengthOfLongestSubstring(testStr))

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    let map = new Map<string, number>();
    let left = 0;
    let max  = 0;
    for(let right= 0;right<s.length;right++){
      if (map.has(s[right])){
          left = Math.max(map.get(s[right])+1,left)
        }
        map.set(s[right],right);
        max = Math.max(right-left+1,max);
     
    }
    return max;
}
// @lc code=end
