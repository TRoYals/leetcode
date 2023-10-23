// [【算法面试】leetcode最常见的150道前端面试题 --- 简单题上（44题） - 掘金](https://juejin.cn/post/6987320619394138148#heading-3)

function searchArr(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      return true;
    } else {
      map.set(arr[i], 1);
    }
  }
  return false;
}

console.log(searchArr([1, 2, 3, 1]));
