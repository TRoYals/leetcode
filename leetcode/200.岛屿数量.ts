/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 *
 * https://leetcode.cn/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (60.39%)
 * Likes:    2478
 * Dislikes: 0
 * Total Accepted:    827.9K
 * Total Submissions: 1.4M
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 *
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 *
 * 此外，你可以假设该网格的四条边均被水包围。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：grid = [
 * ⁠ ["1","1","1","1","0"],
 * ⁠ ["1","1","0","1","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","0","0","0"]
 * ]
 * 输出：1
 *
 *
 * 示例 2：
 *
 *
 * 输入：grid = [
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","1","0","0"],
 * ⁠ ["0","0","0","1","1"]
 * ]
 * 输出：3
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == grid.length
 * n == grid[i].length
 * 1
 * grid[i][j] 的值为 '0' 或 '1'
 *
 *
 */

// @lc code=start
function numIslands(grid: string[][]): number {
   let view = Array.from({length:grid.length},()=> Array.from({length:grid[0].length},()=>0));
   let dfs = (x,y)=>{
      if(x<0||y<0||x>=grid.length||y>=grid[0].length){
        return;
      }
      if(view[x][y]===1){
        return;
      }
      if(grid[x][y]==="0"){
        return;
      }
      grid[x][y]="0";
      dfs(x-1,y);
      dfs(x+1,y);
      dfs(x,y+1);
      dfs(x,y-1);
      return;
   }
   let count = 0;
   for (let i = 0;i<grid.length;i++){
    for(let j = 0;j<grid[0].length;j++){
        if(grid[i][j]==="1"){
            count+=1;
            dfs(i,j);
        }
    }
   }
   return count;
}
// @lc code=end
