// 最长有效括号
// 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号 子串 的长度。

// 左右括号匹配，即每个左括号都有对应的右括号将其闭合的字符串是格式正确的，比如 "(()())"。

const s = ")()())";

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  // ()(()    0 2 0 0 2
  // ()(())   0 2 0 0 2 4

  if (s.length == 0) return 0;
  const stack = [];
  const dp = new Array(s.length).fill(0);
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push("(");
    } else {
      if (stack[stack.length - 1] == "(") {
        stack.pop();
        if (i > 1) {
          dp[i] = Math.max(dp[i - 1], dp[i - 2]) + 2;
          if (i - dp[i] >= 0) dp[i] = dp[i] + dp[i - dp[i]];
        } else {
          dp[i] = 2;
        }
      }
    }
  }
  return Math.max(...dp);
};
