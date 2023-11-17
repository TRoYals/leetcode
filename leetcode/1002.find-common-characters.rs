/*
 * @lc app=leetcode id=1002 lang=rust
 *
 * [1002] Find Common Characters
 */

// @lc code=start
use std::collections::HashMap;
impl Solution {
    pub fn common_chars(words: Vec<String>) -> Vec<String> {
        let mut return_map = Self::word_to_hashmap(&words[0]);

        for word in words.iter().skip(1) {
            let word_map = Self::word_to_hashmap(word);
            let keys: Vec<char> = return_map.keys().cloned().collect(); // Collect keys to iterate over

            for key in keys {
                match word_map.get(&key) {
                    Some(&v) if v < return_map[&key] => {
                        return_map.insert(key, v);
                    }
                    Some(_) => {} // Do nothing if v >= value
                    None => {
                        return_map.remove(&key); // Remove the key if it's not in word_map
                    }
                }
            }
        }

        let mut return_vec = Vec::new();
        for (key, value) in return_map {
            for _ in 0..value {
                return_vec.push(key.to_string());
            }
        }
        return_vec
    }

    fn word_to_hashmap(word: &String) -> HashMap<char, i32> {
        let mut count_map = HashMap::new();
        for i in word.chars() {
            let count = match count_map.get(&i) {
                Some(number) => number + 1,
                None => 1,
            };
            count_map.insert(i, count);
        }
        count_map
    }
}
// @lc code=end
