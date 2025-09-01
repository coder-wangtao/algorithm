// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 逐位比较，比较全部通过时re增加当前字符，不通过时直接返回re。
const strs = ["flower", "flow", "flight"];

var longestCommonPrefix = function (strs) {
  var re = "";
  if (!strs.length) return re;
  for (var j = 0; j < strs[0].length; j++) {
    //第j位
    for (var i = 1; i < strs.length; i++) {
      //第i个
      if (strs[i][j] != strs[0][j]) return re;
    }
    re += strs[0][j];
  }
  return re;
};

console.log(longestCommonPrefix(strs));
