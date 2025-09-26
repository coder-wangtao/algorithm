// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

//核心在于怎么判断当前字符串里是否已经有了t串包含的所有字符
//可以通过map存储t字符串，并且map的长度代表不同的字母个数typeSum
//然后遍历s字符串时候，如果遍历到了t串中的字符c就将 map[c]--;如果map[c]等于0说明c这一类已经去除完毕，typeSum-1。当typeSum=0时候，说明包含了所有字符
//然后可以开始处理左边界了。
//对于左边界，如果l在map里，在移动l前就需要把s[l]添加回map中

const s = "ADOBECODEBANC",
  t = "ABC";
var minWindow = function (s, t) {
  let map = new Map();
  let res = "";
  for (let i = 0; i < t.length; i++) {
    map.set(t[i], map.get(t[i]) ? map.get(t[i]) + 1 : 1);
  }
  let typeSum = map.size;
  let l = 0,
    r = 0;
  while (r < s.length) {
    if (map.has(s[r])) {
      map.set(s[r], map.get(s[r]) - 1);
    }
    if (map.get(s[r]) === 0) {
      typeSum--;
    }
    while (typeSum === 0) {
      let newRes = s.substring(l, r + 1);
      //寻找最短的
      if (newRes.length < res.length || !res) {
        res = newRes;
      }
      if (map.has(s[l])) {
        if (map.get(s[l]) === 0) typeSum++;
        map.set(s[l], map.get(s[l]) + 1);
      }
      l++;
    }
    r++;
  }
  return res;
};

minWindow(s, t);
