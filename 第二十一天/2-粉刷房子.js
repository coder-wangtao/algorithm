//  粉刷房子
// 假如有一排房子，共 n 个，每个房子可以被粉刷成红色、蓝色或者绿色这三种颜色中的一种，你需要粉刷所有的房子并且使其相邻的两个房子颜色不能相同。
// 当然，因为市场上不同颜色油漆的价格不同，所以房子粉刷成不同颜色的花费成本也是不同的。每个房子粉刷成不同颜色的花费是以一个 n x 3 的正整数矩阵 costs 来表示的。
// 例如，costs[0][0] 表示第 0 号房子粉刷成红色的成本花费；costs[1][2] 表示第 1 号房子粉刷成绿色的花费，以此类推。
// 请计算出粉刷完所有房子最少的花费成本。

//红 蓝 绿

const costs = [
  [17, 2, 17],
  [16, 16, 5],
];

// [
//    红 蓝 绿
//   [0, 0, 0],
//   [0, 0, 0],
// ];

// 用 dp 存储第 i 个房子粉刷三种颜色的最低花费成本，如果第 i 个房间选择了红色，
// 它的最低花费是 i - 1 个房间使用蓝或者绿颜色的最低成本加上红色的成本。

var minCost = function (costs) {
  const dp = new Array(costs.length).fill(0).map((item) => [0, 0, 0]);
  dp[0] = costs[0];
  for (let i = 1; i < costs.length; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i][2];
  }
  return Math.min(...dp[dp.length - 1]);
};

console.log(minCost(costs));
