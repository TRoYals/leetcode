/**
 * @param {number[]} nums
 * @return {number}
 */
function removeSame(s) {
  let i = 0;
  while (i < s.length) {
    if (s[i] == s[i + 1]) {
      s.splice(i, 1);
    } else {
      i++;
    }
  }
  return s;
}
console.log(removeSame([1, 2, 2, 2, 3, 3, 4, 4]));
