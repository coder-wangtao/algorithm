// 给定一个未排序的整数数组 nums ， 返回最长递增子序列的个数 。
// 注意 这个数列必须是 严格 递增的。

const nums = [1, 3, 5, 4, 7];
// 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。

// 求最佳、组合数量等就想到动态规划。
// 本题除了求最长，还要记录个数，因此需要两个数组来记录。
//需要记录每个元素的最长递增子序列的个数和长度就好了，因为题目只要最长的个数，其它的长度没必要记录。

// 1 状态数组
//     dp[i] = 以当前元素为最大值的最长递增子序列长度
//     count[i] = 以当前元素为最大值的最长递增子序列的数量
// 2 状态转移方程
//     if (nums[i] > nums[j])
//         if (dp[i] > dp[j] + 1) dp[i] = dp[j] + 1; cnt[i] = cnt[j]
//         if (dp[i] == dp[j] + 1) cnt[i] += cnt[j]
// 1, 3, 5, 4, 7
var findNumberOfLIS = function (nums) {
  let len = nums.length;
  let dp = new Array(len).fill(1);
  let count = new Array(len).fill(1);
  let ans = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        // Math.max...的写法
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          count[i] = count[j]; // 最长递增子序列的个数(注意是子序列)
          // 其实就是考虑相等的情况
        } else if (dp[j] + 1 === dp[i]) {
          count[i] += count[j];
        }
      }
    }
  }
  let max = Math.max(...dp);
  for (let i = 0; i < len; i++) {
    if (dp[i] == max) ans += count[i];
  }

  return ans;
};

console.log(findNumberOfLIS(nums));
