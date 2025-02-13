/*
 * @lc app=leetcode.cn id=1556 lang=typescript
 *
 * [1556] 千位分隔数
 *
 * https://leetcode.cn/problems/thousand-separator/description/
 *
 * algorithms
 * Easy (56.27%)
 * Likes:    31
 * Dislikes: 0
 * Total Accepted:    23.4K
 * Total Submissions: 41.6K
 * Testcase Example:  '987'
 *
 * 给你一个整数 n，请你每隔三位添加点（即 "." 符号）作为千位分隔符，并将结果以字符串格式返回。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：n = 987
 * 输出："987"
 * 
 * 
 * 示例 2：
 * 
 * 输入：n = 1234
 * 输出："1.234"
 * 
 * 
 * 示例 3：
 * 
 * 输入：n = 123456789
 * 输出："123.456.789"
 * 
 * 
 * 示例 4：
 * 
 * 输入：n = 0
 * 输出："0"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= n < 2^31
 * 
 * 
 */

let n = 12412412;
console.log(thousandSeparator(n));
// @lc code=start
function thousandSeparator(n: number): string {
    let stack = [];
    let nString = n.toString();
    for(let i=nString.length;i>0;i=i-3){
        let curNum = nString.slice(i-3>0?i-3:0,i);
        stack.unshift(curNum);
    }
    return stack.join(".")
};
// @lc code=end

