// 恶魔们抓住了公主并将她关在了地下城 dungeon 的 右下角 。地下城是由 m x n 个房间组成的二维网格。
// 我们英勇的骑士最初被安置在 左上角 的房间里，他必须穿过地下城并通过对抗恶魔来拯救公主。

// 骑士的初始健康点数为一个正整数。如果他的健康点数在某一时刻降至 0 或以下，他会立即死亡。

// 有些房间由恶魔守卫，因此骑士在进入这些房间时会失去健康点数（若房间里的值为负整数，则表示骑士将损失健康点数）；
// 其他房间要么是空的（房间里的值为 0），要么包含增加骑士健康点数的魔法球（若房间里的值为正整数，则表示骑士将增加健康点数）。

// 为了尽快解救公主，骑士决定每次只 向右 或 向下 移动一步。

// 返回确保骑士能够拯救到公主所需的最低初始健康点数。

// 注意：任何房间都可能对骑士的健康点数造成威胁，也可能增加骑士的健康点数，包括骑士进入的左上角房间以及公主被监禁的右下角房间。

//TODO: 题目其实本质问的是至少需要多少初始生命值，能够让骑士从最左上角移动到最右下角，且任何时候生命值都要大于 0
//TODO: 关键不在于吃最多的血瓶，而是在于如何损失最少的生命值。
//TODO: dp函数的定义：从grid[i][j]到达终点（右下角）所需的最少生命值是dp(grid, i, j)。

const dungeon = [
  [-1, -2, 3],
  [-1, 0, 0],
  [-3, -3, -2],
];

// 4   3   1  inf
// 4   3   3  inf
// 9   6   3   1
//inf inf  1  inf  

var calculateMinimumHP = function (dungeon) {
  const r = dungeon.length;
  const c = dungeon[0].length;
  const dp = new Array(r + 1)
    .fill(0)
    .map(() => new Array(c + 1).fill(Infinity));
  dp[r][c - 1] = dp[r - 1][c] = 1;

  for (let i = r - 1; i >= 0; i--) {
    for (let j = c - 1; j >= 0; j--) {
      dp[i][j] = Math.max(
        Math.min(dp[i][j + 1], dp[i + 1][j]) - dungeon[i][j],
        1
      );
    }
  }
  return dp[0][0];
};

console.log(calculateMinimumHP(dungeon));
