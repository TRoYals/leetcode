// [387. 字符串中的第一个唯一字符 - 力扣（LeetCode）](https://leetcode.cn/problems/first-unique-character-in-a-string/)
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      let value = map.get(s[i]);
      map.set(s[i], value + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  for (let items of map.entries()) {
    if (items[1] === 1) {
      return s.indexOf(items[0]);
    }
  }
  return -1;
};
console.log(firstUniqChar([1, 2, 4, 2, 1, 2]));

// let map = new Map();
// map.set("a", 1);
// map.set("b", 3);
// map.set("c", 2);
// console.log(map);
// for (let items of map.entries()) {
//   if(items[1]==1){
//     return s.getInde
//   }
// }
