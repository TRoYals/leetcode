/*
 * @lc app=leetcode id=349 lang=rust
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
use std::{
    collections::HashSet,
    hash::{self, Hasher},
};
impl Solution {
    pub fn intersection(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        let mut hash_table = HashSet::new();
        let mut retrun_array = Vec::new();
        for i in nums1 {
            hash_table.insert(i);
        }
        for j in hash_table {
            if nums2.contains(&j) {
                retrun_array.push(j);
            }
        }
        retrun_array
    }
}
// @lc code=end
