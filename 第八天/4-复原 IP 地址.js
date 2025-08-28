// 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312"
// 和 "192.168@1.1" 是 无效 IP 地址。
// 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。
// 你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。

const s = "25525511135";

var restoreIpAddresses = function (s) {
  if (s.length > 12) return []; // IP 最长 12 位 (4段，每段最多3位)
  let result = [];
  fn(s, [], result);
  return result;
};

// 递归结束条件：当判断到最后一段时，如果合法直接加入到结果集
// 递归体：每一段长度可以为1、2、3，所以每次都有三种可能
var restoreIpAddresses = function (s) {
  if (s.length > 12) return [];
  let result = [];
  backtrack(s, [], result);
  return result;
};

function backtrack(remain, temp, result) {
  if (temp.length === 3) {
    if (isValid(remain)) result.push([...temp, remain].join("."));
    return;
  }
  debugger;
  for (let i = 1; i <= 3; i++) {
    if (i <= remain.length && isValid(remain.substr(0, i))) {
      backtrack(remain.substr(i), [...temp, remain.substr(0, i)], result);
    }
  }
}

function isValid(s) {
  if (!s.length) return false;
  if (s.length > 1 && s[0] === "0") return false;
  return +s >= 0 && +s <= 255;
}
console.log(restoreIpAddresses(s));
