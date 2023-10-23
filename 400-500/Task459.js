var repeatedSubstringPattern = function (s) {
  for (let i = 1; i < s.length / 2; i++) {
    if (s.length % i !== 0) {
      continue;
    } else {
      for (let j = 0; j < s.length; j = j + i) {
        if (s.slice(0, i) !== s.slice(j, j + i)) break;
      }
      return true;
    }
  }
  return false;
};
console.log(repeatedSubstringPattern("aba"));
