/*
 * @lc app=leetcode id=242 lang=rust
 *
 * [242] Valid Anagram
 */

// @lc code=start
use std::collections::HashMap;
impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        let mut scores1 = string_2_map(s);
        let mut scores2 = string_2_map(t);
        if scores1.len() != scores2.len() {
            return false;
        }
        for (key, value) in &scores1 {
            match scores2.get(key) {
                Some(v) if v == value => continue,
                _ => return false,
            }
        }
        return true;
        fn string_2_map(s: String) -> HashMap<char, i32> {
            let mut scores = HashMap::new();
            for i in s.chars() {
                let count = match scores.get(&i) {
                    Some(&number) => number + 1,
                    None => 1,
                };
                scores.insert(i, count);
            }
            return scores;
        }
    }
}
// @lc code=end
