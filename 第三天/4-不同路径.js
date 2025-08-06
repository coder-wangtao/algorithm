// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

// 问总共有多少条不同的路径？

// https://pic.leetcode.cn/1697422740-adxmsI-image.png

//dp[i][j] 机器人从走上角达到第i行第j列一共有多少条路径
//dp[i][j] = dp[i][j-1] + dp[i-1][j]
//i===0 || j===0 => dp[i][j] = 1
// [
//   [1,1,1,1],
//   [1,2,3,4],
//   [1,],
//   [1,]
// ]
var uniquePaths = function (m, n) {
  const dp = [];
  for (let i = 0; i < m; i++) {
    dp.push([]);
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
      }
    }
  }
  return dp[m - 1][n - 1];
};

console.log(uniquePaths(5, 5));
