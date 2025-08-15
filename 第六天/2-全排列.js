// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
// nums = [1,2,3]
//[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

function permute(nums) {
  let res = [];
  debugger;
  perm(nums, 0, nums.length - 1, res);
  return res;
}

// p 全排列的开始位置 q 全排列的结束位置
function perm(arr, p, q, res) {
  if (p === q) {
    res.push([...arr]);
  } else {
    for (let i = p; i <= q; i++) {
      swap(arr, i, p);
      perm(arr, p + 1, q, res);
      swap(arr, i, p);
    }
  }
}

function swap(arr, p, q) {
  let temp = arr[p];
  arr[p] = arr[q];
  arr[q] = temp;
}

permute([1, 2]);
