//给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

const nums = [1, 1, 2];

var permuteUnique = function (nums) {
  let res = [];
  let len = nums.length;
  nums.sort((a, b) => {
    //排序
    return a - b;
  });
  unique([], 0);
  return res;
  function unique(arr) {
    if (arr.length == len) res.push([...arr]);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == nums[i - 1]) continue; // 跳过，避免重复结果
      arr.push(nums[i]);
      nums.splice(i, 1);
      unique(arr);
      nums.splice(i, 0, arr.pop()); // 回溯
    }
  }
};

console.log(permuteUnique(nums));
