/*
 * @lc app=leetcode.cn id=79 lang=typescript
 *
 * [79] 单词搜索
 *
 * https://leetcode.cn/problems/word-search/description/
 *
 * algorithms
 * Medium (46.98%)
 * Likes:    1844
 * Dislikes: 0
 * Total Accepted:    547.4K
 * Total Submissions: 1.2M
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false
 * 。
 * 
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "ABCCED"
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "SEE"
 * 输出：true
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "ABCB"
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == board.length
 * n = board[i].length
 * 1 
 * 1 
 * board 和 word 仅由大小写英文字母组成
 * 
 * 
 * 
 * 
 * 进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 board 更大的情况下可以更快解决问题？
 * 
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
    let xLength = board.length;
    let yLength = board[0].length
    let wordList = word.split("");
    let view = Array.from({length:xLength},()=>Array.from({length:yLength},()=>0));
    const dfs = (x:number,y:number,searchParam,viewd)=>{
       if(x<0||y<0||x>=xLength||y>=yLength||viewd[x][y]==1){
        return false;
       }
       if(board[x][y]!=searchParam[0]){
        return false;
       }
       if(searchParam.length===1){
        return true;
       }
       let curr = searchParam.shift();
       viewd[x][y]=1;
       let case1 = dfs(x-1,y,searchParam,viewd);
       let case2 = dfs(x+1,y,searchParam,viewd);
       let case3 = dfs(x,y+1,searchParam,viewd);
       let case4 = dfs(x,y-1,searchParam,viewd);
        searchParam.unshift(curr);
       viewd[x][y]=0;
       return case1||case2||case3||case4;
    }
    for(let i=0;i<xLength;i++){
        for(let j=0;j<yLength;j++){
            if(dfs(i,j,[...wordList], Array.from({length:xLength},()=>Array.from({length:yLength},()=>0)))){
                return true;
            }
        }
    }
    return false;
};

// let board =[["C","A","A"],["A","A","A"],["B","C","D"]]

// let word = "AAB"
// console.log(exist(board,word))
// @lc code=end

