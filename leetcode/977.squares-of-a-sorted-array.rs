/*
 * @lc app=leetcode id=977 lang=rust
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
impl Solution {
    pub fn sorted_squares(mut nums: Vec<i32>) -> Vec<i32> {
        for i in 0..nums.len() {
            nums[i] = nums[i] * nums[i];
        }
        nums.sort();
        nums
    }
}
// @lc code=end
