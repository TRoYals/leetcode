/*
 * @lc app=leetcode id=17 lang=rust
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
impl Solution {
    pub fn letter_combinations(digits: String) -> Vec<String> {
        if digits.is_empty(){
            return Vec::new();
        }
        let mapping = [
            "",
            "abc",
            "def",
            "ghi",
            "jkl",
            "mno",
            "pqrs",
            "tuv",
            "wxyz"
        ];
        let mut results = vec![String::new()]; 
        for number in digits.chars(){
            let mut temp = Vec::new();
            let mut update_list = Vec::new();
            for char in mapping[number.to_digit(10).unwrap() as usize -1].chars(){
                temp.push(char.to_string())
            }
            if results.is_empty(){
                results = temp
            }else{
                for item in &results{
                    for item_temp in &temp{
                        update_list.push(item.clone()+item_temp)
                    }
                }
                results = update_list
            }
        }
        results
    }
    
}
// @lc code=end

