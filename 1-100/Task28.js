/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let left = 0;
  let max = 0;
  while (left < haystack.length) {
    let arr = [...haystack];
    max = getSame(arr.slice(left, haystack.length), needle);
    console.log(max);
    if (max === needle.length) return left + 1;

    if (max == 0) {
      left++;
    } else {
      left = left + max - 1;
    }
  }
  return -1;
};

function getSame(arr1, arr2) {
  max = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == arr2[i]) max++;
    else {
      return max;
    }
  }
  return max;
}
console.log(strStr("mississippi", "issip"));
