/*
 * @lc app=leetcode.cn id=43 lang=typescript
 *
 * [43] 字符串相乘
 *
 * https://leetcode.cn/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (44.34%)
 * Likes:    1348
 * Dislikes: 0
 * Total Accepted:    348.7K
 * Total Submissions: 785.9K
 * Testcase Example:  '"2"\n"3"'
 *
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 * 
 * 注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 * 
 * 示例 2:
 * 
 * 
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= num1.length, num2.length <= 200
 * num1 和 num2 只能由数字组成。
 * num1 和 num2 都不包含任何前导零，除了数字0本身。
 * 
 * 
 */
let num1 = "123456789";
let num2 = "987654321";
console.log(multiply(num1,num2));

// @lc code=start
function multiply(num1: string, num2: string): string {
   if(num1==="0"||num2==="0"){
      return "0"
   }
   let stack = [[]];
   let num1Arr = num1.split("");
   let num2Arr = num2.split("");
   num1Arr = num1Arr.reverse();
   num2Arr = num2Arr.reverse();
   for(let i = 0;i<num1Arr.length;i++){
      for(let j=0;j<num2Arr.length;j++){
         if(i+j>=stack.length){
            stack.push([]);
         }
         stack[i+j].push(parseInt(num1Arr[i])*parseInt(num2Arr[j]))
      }
   }
   let sum = "";
   for (let i = 0;i < stack.length-1;i++){
      let curSum = stack[i].reduce((prev,curr)=>prev+curr,0);
      stack[i] = [curSum%10]
      stack[i+1].push(Math.floor(curSum/10));
   }
   stack.reverse();
   for(let i=0;i<stack.length;i++){
      sum += (stack[i].reduce((prev,curr)=>prev+curr,0)).toString();
   }
   return sum
}
// @lc code=end

