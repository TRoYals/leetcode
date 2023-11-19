/*
 * @lc app=leetcode id=283 lang=rust
 *
 * [283] Move Zeroes
 */

// @lc code=start
impl Solution {
    pub fn move_zeroes(nums: &mut Vec<i32>) {
        let mut slow_ptr = 0;
        if nums.is_empty() {
            return;
        }
        for fast_ptr in 0..nums.len() {
            if (nums[fast_ptr] == 0) {
                if fast_ptr < nums.len() - 1 {
                    nums[slow_ptr] = nums[fast_ptr + 1];
                }
            } else {
                nums[slow_ptr] = nums[fast_ptr];
                slow_ptr += 1;
            }
        }
        for i in slow_ptr..nums.len() {
            nums[i] = 0;
        }
    }
}
// @lc code=end
