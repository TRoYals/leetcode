/*
 * @lc app=leetcode id=15 lang=rust
 *
 * [15] 3Sum
 */

// @lc code=start
use std::collections::HashSet;

impl Solution {
    pub fn three_sum(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut result = Vec::new();
        nums.sort();

        for i in 0..nums.len() {
            if nums[i] > 0 {
                break;
            }
            if i > 0 && nums[i] == nums[i - 1] {
                continue;
            }

            let mut set = HashSet::new();
            for j in i + 1..nums.len() {
                if j > i + 2 && nums[j] == nums[j - 1] && nums[j - 1] == nums[j - 2] {
                    continue;
                }
                let c = 0 - (nums[i] + nums[j]);
                if set.contains(&c) {
                    result.push(vec![nums[i], nums[j], c]);
                    set.remove(&c); // Remove to avoid duplicates
                } else {
                    set.insert(nums[j]);
                }
            }
        }
        result
    }
}

// @lc code=end
