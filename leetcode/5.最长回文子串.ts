/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 *
 * https://leetcode.cn/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (38.36%)
 * Likes:    7227
 * Dislikes: 0
 * Total Accepted:    1.7M
 * Total Submissions: 4.5M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的 回文 子串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "cbbd"
 * 输出："bb"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母组成
 * 
 * 
 */
let testString = "babbad";
console.log(longestPalindrome(testString));
// @lc code=start
function longestPalindrome(s: string): string {
    let currString=  s[0];
    for(let i = 0;i<s.length;i++){
        let left = i-1;
        let right = i+1;
        while(left>=0&&right<s.length&&s[left]===s[right]){
            currString = (right-left+1)>currString.length?s.slice(left,right+1):currString;
            left-=1;
            right+=1;
        }
        if(i<s.length-1&&s[i]===s[i+1]){
            let left = i-1;
            let right = i+2;
            currString = 2>currString.length?s.slice(i,i+2):currString;
            while(left>=0&&right<s.length&&s[left]===s[right]){
                currString = (right-left+2)>currString.length?s.slice(left,right+1):currString;
                left-=1;
                right+=1;
            }
        }
    }
    return currString;
};
// @lc code=end

