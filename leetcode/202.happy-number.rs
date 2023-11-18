/*
 * @lc app=leetcode id=202 lang=rust
 *
 * [202] Happy Number
 */

// @lc code=start
use std::collections::HashSet;
impl Solution {
    pub fn is_happy(n: i32) -> bool {
        let mut hash_set = HashSet::new();
        let mut number = n;
        while hash_set.insert(number) {
            number = Self::one_iterate(number);
            if number == 1 {
                return true;
            }
        }
        false
        // loop {
        //     let mut return_num = Self::one_iterate(return_num);
        //     if (return_num == 1) {
        //         return true;
        //     }
        //     if (hash_set.contains(&return_num)) {
        //         return false;
        //     }

        //     hash_set.insert(return_num);
        // }
    }
    fn one_iterate(n: i32) -> i32 {
        let mut each_number = Vec::new();
        let mut stringfy_num = n.to_string();
        for char_digit in stringfy_num.chars() {
            let num = char_digit.to_digit(10).unwrap();
            each_number.push(num);
        }
        let mut return_num = 0;
        for num in each_number {
            return_num = return_num + num * num;
        }
        return_num as i32
    }
}
// @lc code=end
