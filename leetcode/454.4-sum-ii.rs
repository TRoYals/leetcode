/*
 * @lc app=leetcode id=454 lang=rust
 *
 * [454] 4Sum II
 */

// @lc code=start
use std::collections::HashMap;
impl Solution {
    pub fn four_sum_count(
        nums1: Vec<i32>,
        nums2: Vec<i32>,
        nums3: Vec<i32>,
        nums4: Vec<i32>,
    ) -> i32 {
        let mut hash_table_ab = HashMap::new();
        let mut hash_table_cd = HashMap::new();
        for num1 in nums1 {
            for num2 in &nums2 {
                let sum = num1 + num2;
                if let Some(&count) = hash_table_ab.get(&sum) {
                    hash_table_ab.insert(sum, count + 1);
                } else {
                    hash_table_ab.insert(sum, 1);
                }
            }
        }
        for num3 in nums3 {
            for num4 in &nums4 {
                let sum = num3 + num4;
                if let Some(&count) = hash_table_cd.get(&sum) {
                    hash_table_cd.insert(sum, count + 1);
                } else {
                    hash_table_cd.insert(sum, 1);
                }
            }
        }
        let mut count = 0;
        for (key, value) in hash_table_ab {
            let completion = -key;
            if let Some(&value_completion) = hash_table_cd.get(&completion) {
                count += value_completion * value;
            };
        }
        count
    }
}
// @lc code=end
