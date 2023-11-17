/*
 * @lc app=leetcode id=307 lang=rust
 *
 * [307] Range Sum Query - Mutable
 */

// @lc code=start
struct NumArray {
    nums:Vec<i32>,
    prefix_sums:Vec<i32>
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl NumArray {

    fn new(nums: Vec<i32>) -> Self {
        let mut sum_array = vec![0;nums.len()+1];
        for i in 1..nums.len()+1{
            sum_array[i]= sum_array[i-1]+nums[i-1]
        }
        NumArray { nums: nums ,
            prefix_sums:sum_array
        }
        
    }
    
    fn update(&mut self, index: i32, val: i32) {
        self.nums[index as usize] = val;
        for i in index as usize..self.nums.len(){
            self.prefix_sums[i+1 ]= self.prefix_sums[i]+self.nums[i]
        }
        
    }
    
    fn sum_range(&self, left: i32, right: i32) -> i32 {

        self.prefix_sums[right as usize+1]-self.prefix_sums[left as usize]
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * let obj = NumArray::new(nums);
 * obj.update(index, val);
 * let ret_2: i32 = obj.sum_range(left, right);
 */
// @lc code=end

