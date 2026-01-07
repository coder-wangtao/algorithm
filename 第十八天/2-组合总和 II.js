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
  candidates.sort((a, b) => a - b);
  let res = [];
  let path = [];

  const backtracing = (path, startIndex, sum) => {
    if (sum > target) return;
    if (sum === target) return res.push([...path]);
    for (let i = startIndex; i < candidates.length; i++) {
      // 如果当前数字和前一个数字相同，并且不是该递归层的第一个数字，就跳过。
      // candidates = [1, 1, 2], startIndex = 0
      // i = 1 时, candidates[1] === candidates[0] => skip
      if (i > startIndex && candidates[i] === candidates[i - 1]) continue;
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

const candidates = [10, 1, 2, 7, 6, 1, 5],
  target = 8;

console.log(combinationSum2(candidates, 8));

//1 1 1 6
//1 1 6
//1 1 6
//1 1 6
