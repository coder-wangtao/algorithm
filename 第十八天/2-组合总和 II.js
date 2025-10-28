// 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的每个数字在每个组合中只能使用 一次 。
// 注意：解集不能包含重复的组合。
// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 输出:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b); //排序 确保重复元素相邻
  let res = [];
  let path = [];

  const backtracing = (path, startIndex, sum) => {
    if (sum > target) return;
    else if (sum === target) return res.push([...path]);
    for (let i = startIndex; i < candidates.length; i++) {
      if (i > startIndex && candidates[i] === candidates[i - 1]) continue; //三数之和去重的办法
      sum += candidates[i];
      path.push(candidates[i]);
      backtracing(path, i + 1, sum);
      sum -= candidates[i];
      path.pop();
    }
  };
  backtracing(path, 0, 0);
  return res;
};
