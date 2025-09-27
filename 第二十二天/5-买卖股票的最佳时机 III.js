// 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// 输入：prices = [3,3,5,0,0,3,1,4]
// 输出：6
// 解释：在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。
//      随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。
const prices = [3, 3, 5, 0, 0, 3, 1, 4];
var maxProfit = function (prices) {
  let dp = new Array(prices.length).fill(1).map((v) => new Array(4).fill(0));
  dp[0][0] = 0 - prices[0];
  dp[0][2] = 0 - prices[0];

  for (let i = 1; i < prices.length; i++) {
    // dp[i][0] 表示第一次持有股票，即还没有发生过交易
    dp[i][0] = Math.max(dp[i - 1][0], 0 - prices[i]);
    // dp[i][1] 表示第一次不持有股票，即还没有发生过交易
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
    // dp[i][2] 表示第二次持有股票，即已经发生过一次交易，其实也可以看做是只进行这第二次交易
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] - prices[i]);
    // dp[i][3] 表示第二次不持有股票，即即已经发生过一次交易
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] + prices[i]);
  }
  return Math.max(...dp.at(-1));
};

console.log(maxProfit(prices));
