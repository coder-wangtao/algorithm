//给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。

//nums1 = [1,2,3,2,1]
//nums2 = [3,2,1,4,7]

//   x  1  2  3  2  1
//   0  0  0  0  0  0
//3  0        1
//2  0     1     2
//1  0  1           3
//4  0
//7  0

var findLength = function (nums1, nums2) {
  let n = nums1.length;
  let m = nums2.length;
  let maxans = 0;
  let dp = Array.from(new Array(n+1), () => new Array(m+1).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (nums1[i] == nums2[j]) {
        dp[1 + i][1 + j] = dp[i][j] + 1;
        maxans = Math.max(maxans, dp[i + 1][j + 1]);
      }
    }
  }
  return maxans;
};
