/*
 * @lc app=leetcode id=7 lang=rust
 *
 * [7] Reverse Integer
 */

use std::string;

// @lc code=start
impl Solution {
    pub fn reverse(x: i32) -> i32 {
        let string_x = x.to_string();
        let mut is_negative = false;
        let mut string_reversed_x = String::new();
        for char in string_x.chars(){
            if char == '-'{
                is_negative = true;
            }
            else {
               string_reversed_x.insert(0,char)
            }
        } 
        if is_negative{
            string_reversed_x.insert(0, '-');
        }
        match  string_reversed_x.parse::<i32>(){
            Ok(val)=>val,
            Err(_)=>0,
        }
    }
}
// @lc code=end