//给你一个整数 n，请你每隔三位添加点（即 "." 符号）作为千位分隔符，并将结果以字符串格式返回。

const n = 123456789;

var thousandSeparator = function (n) {
  const s = n + "";
  let res = [];
  for (let i = s.length - 1; i >= 0; i = i - 3) {
    res.push(s[i]);
    res.push(s[i - 1]);
    res.push(s[i - 2]);
    res.push(".");
  }
  res.pop();
  return res.reverse().join("");
};

console.log(thousandSeparator(n));
