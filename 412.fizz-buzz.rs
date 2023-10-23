/*
 * @lc app=leetcode id=412 lang=rust
 *
 * [412] Fizz Buzz
 */

// @lc code=start
impl Solution {
    pub fn fizz_buzz(n: i32) -> Vec<String> {
        let mut results = Vec::new();
        for i in 1..=n{
            results.push(Self::return_FB(i));
        } 
        results
    }

    fn return_FB(n:i32)-> String{
        if n%15==0{
            return "FizzBuzz".to_string();
        }else if n%3==0 {
            return "Fizz".to_string();
        }else if n%5==0{
            return "Buzz".to_string();
        }else {
            return n.to_string();
        }
    }
}
// @lc code=end

