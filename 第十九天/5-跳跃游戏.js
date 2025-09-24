// 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。

// 用 dp 记录坐标 i 能够到达的最大下标，遍历数组元素i时更新 dp[0] ~ dp[i-1] 的值，若 dp[j] 能够 到达 i， 则 dp[j] = Max(dp[j], dp[i])。

const nums = [2, 3, 1, 1, 4];

var canJump = function (nums) {
  const n = nums.length;
  const dp = Array.from({ length: n }, (_, i) => i);
  for (let i = 0; i < n; i++) {
    dp[i] = i + nums[i];
    for (let j = 0; j < i; j++) {
      dp[j] = dp[j] >= i ? Math.max(dp[j], dp[i]) : dp[j];
    }
  }
  return dp[0] >= n - 1;
};
