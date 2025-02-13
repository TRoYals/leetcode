/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode.cn/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (50.88%)
 * Likes:    1691
 * Dislikes: 0
 * Total Accepted:    528.3K
 * Total Submissions: 1M
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == matrix.length
 * n == matrix[i].length
 * 1 
 * -100 
 * 
 * 
 */
let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
spiralOrder(matrix);

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
    let views = Array.from({length:matrix.length},()=>Array.from({length:matrix[0].length},()=>0));
    let curView = [];
    let dfs = (i,j,preState)=>{
        if(i<0||j<0||i>=matrix.length||j>=matrix[0].length){
            return false;
        }
        if(views[i][j]===1){
            return false;
        }
        views[i][j]=1;
        curView.push(matrix[i][j]);
        let stateMap = {
            0: [i,j+1],
            1: [i+1,j],
            2: [i,j-1],
            3: [i-1,j]
        }
        for(let k=0;k<4;k++){
            let curLoop = (k+preState)%4;
            dfs(stateMap[curLoop][0],stateMap[curLoop][1],curLoop);
        }
        return true;
    }
    dfs(0,0,0);
    return curView;
};
// @lc code=end

