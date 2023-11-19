/*
 * @lc app=leetcode id=209 lang=rust
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
impl Solution {
    pub fn min_sub_array_len(target: i32, nums: Vec<i32>) -> i32 {
        let mut min_sub = i32::MAX as usize;
        for slow_ptr in 0..nums.len() {
            let mut sum = 0;
            for fast_ptr in slow_ptr..(slow_ptr + min_sub).min(nums.len()) {
                sum += nums[fast_ptr];
                if (sum >= target && fast_ptr - slow_ptr < min_sub) {
                    min_sub = fast_ptr - slow_ptr + 1;
                    continue;
                }
                if (fast_ptr - slow_ptr > min_sub) {
                    continue;
                }
            }
        }
        if min_sub == i32::MAX as usize {
            return 0;
        }
        min_sub as i32
    }
}
// @lc code=end
