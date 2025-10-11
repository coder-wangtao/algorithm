// 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。
//一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
// 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。
// 输入：text1 = "abcde", text2 = "ace"
// 输出：3
// 解释：最长公共子序列是 "ace" ，它的长度为 3 。

//S1:abcde  //S2:ace
//dp[i][j] = S1的前i个字符与S2前j个字符的LCS  dp[5][3] = 3

//分解
//S1和S2末尾的元素相同
//dp[i][j] = 1+dp[i-1][j-1]            (s1[i-1] === s2[j-1])

//S1:abc  S2:ab
//S1和S2末尾的元素不相同的
//取s1的最后最后一位，或者取s2的最后一位
// dp[i][j] = max(dp[i-1][j],dp[i][j-1])    (s1[i-1] !== s2[j-1])

//dp[0][0] = 0
//dp[1][0] = 0
//dp[0][1] = 0

//   x a b c d e
// x 0 0 0 0 0 0
// a 0 1 1 1 1 1
// c 0 1 1 2 2 2
// e 0 1 1 2 2 3
const text1 = "abcde";
const text2 = "ace";
var longestCommonSubsequence = function (text1, text2) {
  let m = text1.length;
  let n = text2.length;
  let dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] == text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }
  return dp[m][n];
};

console.log(longestCommonSubsequence(text1, text2));
