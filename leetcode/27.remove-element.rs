/*
 * @lc app=leetcode id=27 lang=rust
 *
 * [27] Remove Element
 */

// @lc code=start
impl Solution {
    pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
        let mut fast_ptr = 0 as usize;
        let mut slow_ptr = 0 as usize;

        while fast_ptr < nums.len() {
            if (nums[fast_ptr] == val) {
                if (fast_ptr < nums.len() - 1) {
                    nums[slow_ptr] = nums[fast_ptr + 1];
                }
                fast_ptr += 1;
            } else {
                nums[slow_ptr] = nums[fast_ptr];
                slow_ptr += 1 as usize;
                fast_ptr += 1 as usize;
            }
        }
        slow_ptr as i32
    }
}
// @lc code=end
