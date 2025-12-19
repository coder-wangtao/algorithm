// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
// 返回 你能获得的 最大 利润 。

// 输入：prices = [7,1,5,9,20,30]
// 输出：7
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4。
// 随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3。
// 最大总利润为 4 + 3 = 7 。

// 4 3
const prices = [7, 1, 5, 3, 6, 4];
var maxProfit = function (prices) {
  if (!prices || prices.length <= 1) return 0;
  let res = 0,
    tmp;
  // prices[i] - prices[i - 1]：计算今天的价格与昨天的价格之间的差值（即今天的利润）。
  // 如果差值为正数，即今天的价格高于昨天的价格，说明可以从昨天买入、今天卖出，获得利润。因此，把这个利润累加到 res 中。
  for (let i = 1; i < prices.length; i++) {
    if ((tmp = prices[i] - prices[i - 1]) > 0) res += tmp;
  }
  return res;
};

console.log(maxProfit(prices));
