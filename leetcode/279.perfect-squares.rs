/*
 * @lc app=leetcode id=279 lang=rust
 *
 * [279] Perfect Squares
 */

// @lc code=start

impl Solution {
    pub fn num_squares(n: i32) -> i32 {
        let mut memo = vec![i32::MAX; (n + 1) as usize];
        memo[0] = 0;
        for i in 1..=n {
            if Self::is_per_num(i) {
                memo[i as usize] = 1;
                continue;
            }
            let mut count = i32::max_value();
            for j in 1..i {
                if memo[j as usize] + memo[(i - j) as usize] < count {
                    count = memo[j as usize] + memo[(i - j) as usize];
                }
            }
            memo[i as usize] = count;
        }
        memo[n as usize]
    }

    fn is_per_num(n: i32) -> bool {
        if n < 0 {
            return false;
        }
        let mut i = 1;
        while i * i <= n {
            if i * i == n {
                return true;
            }
            i = i + 1;
        }
        return false;
    }
}

// impl Solution {
//     pub fn num_squares(n: i32) -> i32 {
//         let mut memo = vec![-1; (n + 1) as usize];
//         Self::decompose_num(n, &mut memo)
//     }

//     fn decompose_num(n: i32, memo: &mut Vec<i32>) -> i32 {
//         if n < 0 {
//             return i32::max_value();
//         }
//         if n == 0 {
//             return 0;
//         }
//         if memo[n as usize] != -1 {
//             return memo[n as usize];
//         }

//         let mut min_count = i32::max_value();
//         let mut i = 1;

//         while i * i <= n {
//             min_count = min_count.min(Self::decompose_num(n - i * i, memo) + 1);
//             i += 1;
//         }

//         memo[n as usize] = min_count;
//         min_count
//     }
// }

// @lc code=end
