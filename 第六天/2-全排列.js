// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
// nums = [1,2,3]
//[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
//1 2,3
function permute(nums) {
  if (!nums) {
    return;
  }
  const res = [];

  const backtarck = (path) => {
    if (path.length === nums.length) {
      res.push(path);
      return;
    }

    nums.forEach((n) => {
      if (path.includes(n)) return;
      backtarck([...path, n]);
    });
  };
  backtarck([]);
  return res;
}
// backtrack([])
//   -> 1 not in path -> backtrack([1])
//       -> 2 not in path -> backtrack([1,2])
//           -> 3 not in path -> backtrack([1,2,3]) => push [1,2,3]
//       -> 3 not in path -> backtrack([1,3])
//           -> 2 not in path -> backtrack([1,3,2]) => push [1,3,2]
//   -> 2 not in path -> backtrack([2])
//       -> 1 not in path -> backtrack([2,1])
//           -> 3 not in path -> backtrack([2,1,3]) => push [2,1,3]
//       -> 3 not in path -> backtrack([2,3])
//           -> 1 not in path -> backtrack([2,3,1]) => push [2,3,1]
//   -> 3 not in path -> backtrack([3])
//       -> 1 not in path -> backtrack([3,1])
//           -> 2 not in path -> backtrack([3,1,2]) => push [3,1,2]
//       -> 2 not in path -> backtrack([3,2])
//           -> 1 not in path -> backtrack([3,2,1]) => push [3,2,1]

console.log(permute([1, 2, 3]));
