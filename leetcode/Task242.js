// [242. 有效的字母异位词 - 力扣（LeetCode）](https://leetcode.cn/problems/valid-anagram/)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let map = new Map();
  for (let num of s) {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else {
      map.set(num, 1);
    }
  }
  for (let num of t) {
    if (map.has(num)) map.set(num, map.get(num) - 1);
    else {
      map.set(num, -1);
    }
  }
  for (let item of map.values()) {
    if (item !== 0) return false;
  }
  return true;
};

console.log(isAnagram("sgsdf", "sgsdf"));
