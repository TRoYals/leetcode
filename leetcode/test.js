// function getHrefValue(url) {
//   // 创建正则表达式，匹配 href 参数及其值
//   const regex = /&=([^&]{0,3})/;
//   const match = url.match(regex);

//   // 检查是否有匹配，并返回结果
//   if (match) {
//     return decodeURIComponent(match[1]);
//   }
//   return null; // 如果没有找到匹配项，返回 null
// }
// // 测试 URL
// const url = "https://github.com/iuap-design/blog/issues/99?href=sffsfsf&=abddc";
// const hrefValue = getHrefValue(url);
// console.log(hrefValue); // 输出: sffsfsf

// class Solution:
//     def findMaxLength(self, nums: List[int]) -> int:
//         count = 0
//         max_length = 0
//         table = {0: -1}
//         for i, num in enumerate(nums):
//             if num == 0:
//                 count -= 1
//             else:
//                 count += 1
//             if count in table:
//                 max_length = max(max_length, i - table[count])
//             else:
//                 table[count] = i
//         return max_length

// a = "abc";
// console.log(a.slice(1, 2));
// console.log(typeof Symbol);
Promise.resolve().then(() => {
  console.log("promise1");
  const timer2 = setTimeout(() => {
    console.log("timer2");
  }, 0);
});
const timer1 = setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(() => {
    console.log("promise2");
  });
}, 0);
console.log("start");
