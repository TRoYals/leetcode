/*
 * @lc app=leetcode id=523 lang=rust
 *
 * [523] Continuous Subarray Sum
 */

// @lc code=start
use std::collections::HashMap;

impl Solution {
    pub fn check_subarray_sum(nums: Vec<i32>, k: i32) -> bool {
        if k == 0 {
            // 如果 k 为 0，特别处理连续的零
            return nums.windows(2).any(|w| w[0] == 0 && w[1] == 0);
        }

        let mut map = HashMap::new();
        map.insert(0, -1); // 初始化，以处理从索引 0 开始的情况
        let mut prefix_sum = 0;

        for (i, num) in nums.iter().enumerate() {
            prefix_sum = (prefix_sum + num) % k; // 计算当前前缀和的模 k 值
            if let Some(&prev_index) = map.get(&prefix_sum) {
                // 如果此模值之前已经出现过，检查索引差异
                if i as i32 - prev_index >= 2 {
                    return true; // 如果索引差异大于等于2，则返回 true
                }
            } else {
                // 否则，记录下当前模值的索引
                map.insert(prefix_sum, i as i32);
            }
        }

        false
    }
}

// @lc code=end
