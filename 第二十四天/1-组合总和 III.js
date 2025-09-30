// 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：
// 只使用数字1到9
// 每个数字 最多使用一次
// 返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。

const k = 3,
  n = 7;

const combinationSum3 = (k, n) => {
  const res = [];
  // 基于当前已选的comb数组(和为sum)，在数start到数9中继续选
  const dfs = (start, comb, sum) => {
    if (comb.length == k) {
      // 选够k个数 结束递归
      if (sum == n) {
        // 组合中数之和等于n
        res.push(comb.slice()); // 将它的拷贝加入解集
      }
      return;
    }
    for (let i = start; i <= 9; i++) {
      // 枚举出所有的选择（选项）
      comb.push(i); // 作出一个选择i
      dfs(i + 1, comb, sum + i); // 基于该选择i，往下递归
      comb.pop(); // 撤销这个选择
    }
  };

  dfs(1, [], 0); // 入口
  return res;
};

console.log(combinationSum3(k, n));
