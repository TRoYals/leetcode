/**
 * [704. 二分查找 - 力扣（LeetCode）](https://leetcode.cn/problems/binary-search/)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let center = Math.floor((left + right) / 2);
  while (left <= right) {
    center = Math.floor((left + right) / 2);
    if (nums[center] < target) {
      left = center + 1;
    } else if (nums[center] > target) {
      right = center - 1;
    } else {
      return center;
    }
  }
  return -1;
};
nums = [5];
console.log(search(nums, 9));
