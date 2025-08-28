// 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312"
// 和 "192.168@1.1" 是 无效 IP 地址。
// 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。
// 你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。

const s = "25525511135";
var restoreIpAddresses = function (s) {
  const res = [];
  const dfs = (subRes, start) => {
    // 复原从start开始的子串
    if (subRes.length == 4 && start == s.length) {
      // 满4段，且用光所有字符
      res.push(subRes.join(".")); // 4段拼成字符串 推入结果数组
      return; // 返不返回都行，指针已经到头了，严谨的说还是返回吧
    }
    if (subRes.length == 4 && start < s.length)
      // 满4段，但还没用光字符,直接返回
      return;
    for (let len = 1; len <= 3; len++) {
      // 三种长度的选择
      if (start + len - 1 >= s.length) return; // 指针超出边界了
      if (len != 1 && s[start] == "0") return; // 不能是0x、0xx
      const str = s.substring(start, start + len); // 当前选择切出的片段
      if (len == 3 && +str > 255) return; // 不能超过255
      subRes.push(str); // 作出选择
      dfs(subRes, start + len); // 基于这种选择，向下选择
      subRes.pop(); // 撤销最后的选择，回到之前的状态
    }
  };
  dfs([], 0); // 按下搜索的启动按钮
  return res;
};

console.log(restoreIpAddresses(s));
