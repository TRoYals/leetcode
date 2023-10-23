//[34. 在排序数组中查找元素的第一个和最后一个位置 - 力扣（LeetCode）](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let searchRightBorder = (nums, target) => {
  let rightBorder = -2;
  let left = 0;
  let right = nums.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
      rightBorder = left;
    }
  }
  return rightBorder;
};

let searchLeftBorder = (nums, target) => {
  let leftBorder = -2;
  let left = 0;
  let right = nums.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
      leftBorder = right;
    }
  }
  return leftBorder;
};

let searchRange = function (nums, target) {
  let leftBorder = searchLeftBorder(nums, target);
  console.log(leftBorder);
  let rightBorder = searchRightBorder(nums, target);
  console.log(rightBorder);
  if (leftBorder === -2 || rightBorder === -2) return [-1, -1];
  if (rightBorder - leftBorder > 1) return [leftBorder + 1, rightBorder - 1];
  return [-1, -1];
};
console.log(searchRange([1, 2, 8, 8], 8));
