// [88. 合并两个有序数组 - 力扣（LeetCode）](https://leetcode.cn/problems/merge-sorted-array/)

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let ptr1 = 0;
  let ptr2 = 0;
  while (ptr1 < m) {
    if (
      nums2[ptr2] >= nums1[ptr1] &&
      (nums2[ptr2] < nums1[ptr1 + 1] || nums1[ptr1 + 1] == 0)
    ) {
      nums1.splice(ptr1 + 1, 0, nums2[ptr2]);
      nums1.pop();
      ptr2++;
      ptr1 = 0;
      m = m + 1;
    }
    ptr1++;
  }
  if (m == 0) nums1 = nums2;
  return nums1;
};

console.log(merge([], 0, [1], 1));
