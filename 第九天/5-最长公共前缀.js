// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 逐位比较，比较全部通过时re增加当前字符，不通过时直接返回re。
const strs = ["flower", "flow", "flight"];

var longestCommonPrefix = function (strs) {
  let res = "";
  if (!strs.length) return "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return res;
      }
    }
    res += strs[0][i];
  }
  return res;
};

console.log(longestCommonPrefix(strs));
