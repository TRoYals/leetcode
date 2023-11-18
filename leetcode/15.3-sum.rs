/*
 * @lc app=leetcode id=15 lang=rust
 *
 * [15] 3Sum
 */

// @lc code=start
impl Solution {
    pub fn three_sum(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
        nums.sort();
        let mut return_vec = Vec::new();
        for i in 1..nums.len() - 1 {
            let mut left_ptr = 0;
            let mut right_ptr = nums.len() - 1;
            let mut left_checker = 10000;
            let mut right_checker = -10000;
            let mut i_checker = -100000;

            loop {
                if (left_ptr == i || right_ptr == i) {
                    break;
                }
                let sum = nums[left_ptr] + nums[right_ptr] + nums[i];
                if sum == 0 {
                    if (right_checker == nums[right_ptr]) {
                        right_checker = nums[right_ptr];
                        right_ptr -= 1;
                        continue;
                    } else if (left_checker == nums[left_ptr]) {
                        left_checker = nums[left_ptr];
                        left_ptr += 1;
                        continue;
                    } else {
                        return_vec.push(Vec::<i32>::from([
                            nums[left_ptr],
                            nums[i],
                            nums[right_ptr],
                        ]));
                        right_checker = nums[right_ptr];
                        left_checker = nums[left_ptr];
                    }
                }
                if sum > 0 {
                    right_ptr -= 1;
                } else {
                    left_ptr += 1;
                }
            }
        }
        return_vec
    }
}
// @lc code=end
