// [13. 罗马数字转整数 - 力扣（LeetCode）](https://leetcode.cn/problems/roman-to-integer/)
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let romdir = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let output = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (romdir[s[i]] >= romdir[s[i + 1]]) {
      output += romdir[s[i]];
    } else output -= romdir[s[i]];
  }
  output += romdir[s[s.length - 1]];
  return output;
};
console.log(romanToInt("MCMXCIV"));
