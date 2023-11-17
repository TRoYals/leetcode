/*
 * @lc app=leetcode id=287 lang=rust
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start

impl Solution {
    pub fn find_duplicate(nums: Vec<i32>) -> i32 {
        let mut slow = nums[0] as usize;
        let mut fast = nums[0] as usize;
        loop {
            slow = nums[slow] as usize;
            fast = nums[nums[fast] as usize] as usize;
            if slow == fast {
                break;
            }
        }
        fast = nums[0] as usize;
        while slow != fast {
            slow = nums[slow] as usize;
            fast = nums[fast] as usize;
        }
        slow as i32
    }
}
// @lc code=end
