// 最长有效括号
// 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号 子串 的长度。

// 左右括号匹配，即每个左括号都有对应的右括号将其闭合的字符串是格式正确的，比如 "(()())"。

const s = "()(())";

//模拟三种情况
//()()(
//(())
//()(())

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  // ()(()    0 2 0 0 2
  // ()(())   0 2 0 0 2 4
  // dp[i] 表示：以第 i 个字符结尾的最长有效括号长度
  // 关键点：
  // 只有 ')' 才可能形成有效括号
  // '(' 不可能作为“结尾”
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
          // 再把 紧挨着的前面有效括号 加上
          // s = "()(())"
          // 索引: 0 1 2 3 4 5
          // 字符: ( ) ( ( ) )
          // dp:  0 2 0 0 2 ?
          // 当前匹配形成一个有效括号后，如果前面也有有效括号“紧邻”这个位置，就把前面的长度累加到当前 dp[i]。
          if (i - dp[i] >= 0) {
            // i - dp[i]：回溯到 当前匹配“前面一个有效括号子串的末尾”前的位置
            dp[i] = dp[i] + dp[i - dp[i]]; // dp[i - dp[i]]：这个位置的 dp 值，即紧邻当前匹配左边的有效长度
          }
        } else {
          dp[i] = 2;
        }
      }
    }
  }
  return Math.max(...dp);
};

longestValidParentheses(s);
