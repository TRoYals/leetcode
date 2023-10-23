// [169. 多数元素 - 力扣（LeetCode）](https://leetcode.cn/problems/majority-element/)
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = new Map();
  for (let num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else map.set(num, 1);
  }
  for (let item of map.entries()) {
    if (item[1] > nums.length / 2) {
      return item[0];
    }
  }
  return 0;
};
console.log(majorityElement([1, 2, 3, 2, 3, 3, 3]));
