var threeSum = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i; j < nums.length - 1; j++) {
      for (let k = j; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] == 0) {
          let arr = [nums[i], nums[j], nums[k]].sort();
          map.set(String(arr), arr);
        }
      }
    }
  }
  let values = map.values();
  return Array.from(values);
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
