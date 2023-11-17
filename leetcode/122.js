/**
 * [Best Time to Buy and Sell Stock II - LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  left = 0;
  right = 1;
  max = 0;
  total = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[right] - prices[left] < 0) {
      // notice that if (max>0) when sell the stock
      total = total + max;
      max = 0;
      left = right;
    } else if (prices[right] - prices[left] <= max) {
      total = total + max;
      max = 0;
      left = right;
    } else {
      max =
        prices[right] - prices[left] > max ? prices[right] - prices[left] : max;
    }
    if (right == prices.length - 1) {
      total = total + max;
    }
    right++;
  }
  return total;
};
console.log(maxProfit([2, 1, 2, 0, 1]));
