/*
 * @lc app=leetcode id=1 lang=rust
 *
 * [1] Two Sum
 */

// @lc code=start
use std::collections::HashMap;
impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut hash_table = HashMap::new();
        for (index, num) in nums.iter().enumerate() {
            let target_other = target - num;
            if let Some(&matched_index) = hash_table.get(&target_other) {
                let mut return_list = Vec::new();
                return_list.push(index as i32);
                return_list.push(matched_index as i32);
                return_list.sort();
                return return_list;
            }
            hash_table.insert(num, index);
        }
        [].to_vec()
    }
}
// @lc code=end
