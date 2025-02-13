/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 *
 * https://leetcode.cn/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (70.39%)
 * Likes:    1693
 * Dislikes: 0
 * Total Accepted:    628.1K
 * Total Submissions: 889.2K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 
 * 说明：每次只能向下或者向右移动一步。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
 * 输出：7
 * 解释：因为路径 1→3→1→1→1 的总和最小。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：grid = [[1,2,3],[4,5,6]]
 * 输出：12
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 200
 * 0 <= grid[i][j] <= 200
 * 
 * 
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
    let xLength = grid.length;
    let yLength = grid[0].length;
    // let currMin = Number.MAX_SAFE_INTEGER;
    // let dfs = (i:number,j:number,sum:number)=>{
    //     if(i<0||j<0||i>=xLength||j>=yLength){
    //         return;
    //     }
    //     if(sum+grid[i][j]>currMin){
    //         return;
    //     }
    //     sum+=grid[i][j];

    //     if(i==xLength-1 && j==yLength-1){
    //         currMin = sum;
    //         return;
    //     }
    //     dfs(i+1,j,sum);
    //     dfs(i,j+1,sum);
    //     sum -=grid[i][j];
    // }
    // dfs(0,0,0);
    // return currMin
    let copy1 = Array.from({length:xLength},()=>Array.from({length:yLength},()=>0));
    copy1[0][0]=grid[0][0];
    for(let i=1;i<xLength;i++){
        copy1[i][0] = copy1[i-1][0]+grid[i][0]
    }
    for(let i=1;i<yLength;i++){
        copy1[0][i] = copy1[0][i-1]+grid[0][i]
    }
    for(let i = 1;i<xLength;i++){
        for(let j=1;j<yLength;j++){
            copy1[i][j]= Math.min(copy1[i-1][j],copy1[i][j-1])+grid[i][j];
        }
    }
    console.log(copy1)
    return copy1[xLength-1][yLength-1] 
};
// @lc code=end

