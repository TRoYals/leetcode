// [349. 两个数组的交集 - 力扣（LeetCode）](https://leetcode.cn/problems/intersection-of-two-arrays/)
var intersection = function (nums1, nums2) {
  let map = new Map();
  let arr = [];
  for (let num of nums1) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else map.set(num, 1);
  }
  for (let item of map.keys()) {
    if (nums2.indexOf(item) !== -1) {
      arr.push(item);
    }
  }
  return arr;
};

console.log(intersection([12, 1, 2], []));
