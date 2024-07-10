/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 *
 * https://leetcode.cn/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (68.09%)
 * Likes:    1909
 * Dislikes: 0
 * Total Accepted:    725.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
 *
 * 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 * 示例 2:
 *
 *
 * 输入: strs = [""]
 * 输出: [[""]]
 *
 *
 * 示例 3:
 *
 *
 * 输入: strs = ["a"]
 * 输出: [["a"]]
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= strs.length <= 10^4
 * 0 <= strs[i].length <= 100
 * strs[i] 仅包含小写字母
 *
 *
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  let dir = {};
  for (let i = 0; i < strs.length; i++) {
    let bitArray = Array.from({ length: 26 }, () => 0);
    for (let j = 0; j < strs[i].length; j++) {
      bitArray[strs[i][j].charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    let stringKey = bitArray.join(",");
    if (stringKey in dir) {
      dir[stringKey].push(strs[i]);
    } else {
      dir[stringKey] = [strs[i]];
    }
  }
  let returnList = [];
  for (let item in dir) {
    returnList.push(dir[item]);
  }
  return returnList;
}
// @lc code=end
