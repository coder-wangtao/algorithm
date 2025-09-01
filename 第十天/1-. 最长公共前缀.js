// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

const strs = ["flower", "flow", "flight"];
var longestCommonPrefix = function (strs) {
  let str = strs[0];
  if (!str) {
    return "";
  }

  let res = "";
  for (let i = 0; i < str.length; i++) {
    let flag = strs.every((item) => item[i] === str[i]);
    if (flag) {
      res += str[i];
    } else {
      return res;
    }
  }
  return res;
};

console.log(longestCommonPrefix(strs));
