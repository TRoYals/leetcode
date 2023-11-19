/*
 * @lc app=leetcode id=26 lang=rust
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        if nums.is_empty() {
            return 0;
        }
        let mut slow_ptr = 0;
        let mut fast_ptr = 0;
        while (fast_ptr < nums.len()) {
            if (nums[fast_ptr] != nums[slow_ptr]) {
                nums[slow_ptr + 1] = nums[fast_ptr];
                fast_ptr += 1;
                slow_ptr += 1;
            } else {
                fast_ptr += 1;
            }
        }
        (slow_ptr + 1) as i32
    }
}
// @lc code=end
