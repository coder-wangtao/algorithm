//给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。
// s = "abcabcbb"
// 3
// s = "bbbbb"
// 1
// s = "pwwkew"
// 3
const s = "abcabcbb";
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let res = [];
  for (let i = 0; i < s.length; i++) {
    const index = res.indexOf(s[i]);
    if (index === -1) {
      res.push(s[i]);
    } else {
      res.splice(0, index + 1);
    }
    max = Math.max(max, res.length);
  }
  return max;
};

console.log(lengthOfLongestSubstring(s));
