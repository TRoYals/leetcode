/*
 * @lc app=leetcode id=59 lang=rust
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
impl Solution {
    pub fn generate_matrix(n: i32) -> Vec<Vec<i32>> {
        if n <= 0 {
            return Vec::new();
        }
        let mut matrix = Vec::new();
        for i in 0..n {
            let new_vec = vec![0; n as usize];
            matrix.push(new_vec);
        }
        let state_list = ["left", "right", "up", "down"];
        let mut state = "right";
        let mut i = 0;
        let mut j = 0;
        for num in 1..=n * n {
            matrix[i][j] = num;
            match state {
                "right" => {
                    if j + 1 >= n as usize || matrix[i][j + 1] != 0 {
                        state = "down";
                        i += 1;
                    } else {
                        j += 1;
                    }
                }
                "down" => {
                    if i + 1 >= n as usize || matrix[i + 1][j] != 0 {
                        state = "left";
                        j -= 1;
                    } else {
                        i += 1;
                    }
                }
                "left" => {
                    if j == 0 || matrix[i][j - 1] != 0 {
                        state = "up";
                        i -= 1;
                    } else {
                        j -= 1;
                    }
                }
                "up" => {
                    if i == 0 || matrix[i - 1][j] != 0 {
                        state = "right";
                        j += 1;
                    } else {
                        i -= 1;
                    }
                }
                _ => (),
            }
        }
        matrix
    }
}
// @lc code=end
