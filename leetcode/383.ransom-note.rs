/*
 * @lc app=leetcode id=383 lang=rust
 *
 * [383] Ransom Note
 */

// @lc code=start
use std::collections::HashMap;
impl Solution {
    pub fn can_construct(ransom_note: String, magazine: String) -> bool {
        let mut hash_map_a = HashMap::new();
        let mut hash_map_b = HashMap::new();
        for char in ransom_note.chars() {
            if let Some(&count) = hash_map_a.get(&char) {
                hash_map_a.insert(char, count + 1);
            } else {
                hash_map_a.insert(char, 1);
            }
        }
        for char in magazine.chars() {
            if let Some(&count) = hash_map_b.get(&char) {
                hash_map_b.insert(char, count + 1);
            } else {
                hash_map_b.insert(char, 1);
            }
        }
        for (key, value) in hash_map_a.iter() {
            if let Some(&count) = hash_map_b.get(&key) {
                if count >= *value {
                    continue;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
        return true;
    }
}
// @lc code=end
