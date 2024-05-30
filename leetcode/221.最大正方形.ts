/*
 * @lc app=leetcode.cn id=221 lang=typescript
 *
 * [221] 最大正方形
 *
 * https://leetcode.cn/problems/maximal-square/description/
 *
 * algorithms
 * Medium (50.26%)
 * Likes:    1659
 * Dislikes: 0
 * Total Accepted:    324K
 * Total Submissions: 644K
 * Testcase Example:  '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]'
 *
 * 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：matrix =
 * [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
 * 输出：4
 *
 *
 * 示例 2：
 *
 *
 * 输入：matrix = [["0","1"],["1","0"]]
 * 输出：1
 *
 *
 * 示例 3：
 *
 *
 * 输入：matrix = [["0"]]
 * 输出：0
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
 * matrix[i][j] 为 '0' 或 '1'
 *
 *
 */

// @lc code=start
function maximalSquare(matrix: string[][]): number {
  let numberMatrix = Array.from({ length: matrix.length }, () =>
    Array.from({ length: matrix[0].length }, () => 0)
  );

  for (let i = 0; i < numberMatrix.length; i++) {
    for (let j = 0; j < numberMatrix[0].length; j++) {
      if (i == 0 || j == 0) {
        numberMatrix[i][j] = parseInt(matrix[i][j]);
      } else if (matrix[i][j] == "1") {
        numberMatrix[i][j] =
          Math.min(
            numberMatrix[i - 1][j],
            numberMatrix[i - 1][j - 1],
            numberMatrix[i][j - 1]
          ) + 1;
      }
    }
  }
  return Math.max(...numberMatrix.flat()) ** 2;
}
// @lc code=end
