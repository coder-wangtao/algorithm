// 思路
// 这道题是经典的字符串动态规划题，目标是找出给定字符串中最长的回文子串（正着读和反着读都一样的子串）。
// 👇 核心思路如下：
// 我们使用一个二维数组 dp[i][j] 来表示：字符串 s 中下标从 i 到 j 的子串 s[i..j] 是否为回文子串。
// 状态转移规则：
// 当 s[i] !== s[j]，显然 s[i..j] 不是回文串；
// 当 s[i] === s[j] 时：
// abab;
// 若 j - i < 3（子串长度为2或3），只要两端字符相等就是回文串；
// 否则要看内部子串 dp[i + 1][j - 1] 是否为回文。
// 初始化：
// 所有 dp[i][i] = true，因为每个字符自己都是回文。
// 最终目标：
// 在遍历过程中记录最长回文的起始下标 begin 和长度 maxLen，最终用 s.substring(begin, begin + maxLen) 返回。
// 复杂度
// ﻿时间复杂度：O(n²)
//  两层嵌套循环枚举所有子串 i, j 的组合。
// ﻿空间复杂度：O(n²)
//  使用了一个 n × n 的二维布尔数组 dp 来保存每个子串是否为回文。

//生成序列从0-99
// const arr = Array.from({ length: 100 }, (item, index) => index);

/**
 * @param {string} s
 * @return {string}
 */
//babad
var longestPalindrome = function (s) {
  const len = s.length;
  if (len < 2) return s; // 长度小于2，直接返回原串

  let maxLen = 1; // 初始化最大长度
  let begin = 0; // 初始化起始位置
  const dp = Array.from({ length: len }, () => Array(len).fill(false));
  // 所有长度为1的子串都是回文串
  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }

  const charArray = s.split("");
  //      j=0   j=1  j=2    j=3   j=4
  // i=0 true  false true  false false
  // i=1 false true  false false false
  // i=2 false false true  false false
  // i=3 false false false true  false
  // i=4 false false false false true
  // 枚举子串结束位置 j
  for (let j = 1; j < len; j++) {
    // 枚举子串起始位置 i（必须 i < j）
    for (let i = 0; i < j; i++) {
      if (charArray[i] !== charArray[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          dp[i][j] = true; // 长度为2或3，只要两端相等就是回文
        } else {
          dp[i][j] = dp[i + 1][j - 1]; // 否则依赖内部是否回文
        }
      }

      // 0 ，1，2，3
      // 更新最长回文子串的位置和长度
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }
  return s.substring(begin, begin + maxLen);
};

const s = "abab";
console.log(longestPalindrome(s));
