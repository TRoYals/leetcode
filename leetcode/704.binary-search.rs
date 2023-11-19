/*
 * @lc app=leetcode id=704 lang=rust
 *
 * [704] Binary Search
 */

// @lc code=start
impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> i32 {
        let mut left_ptr = 0 as usize;
        let mut right_ptr = nums.len();
        loop {
            if (left_ptr == right_ptr) {
                return -1;
            }
            let central = (left_ptr + right_ptr) / 2;
            if (nums[central] == target) {
                return central as i32;
            }

            if (nums[central] < target) {
                left_ptr = central + 1;
            } else if (nums[central] > target) {
                right_ptr = central;
            }
        }
    }
}
// @lc code=end
