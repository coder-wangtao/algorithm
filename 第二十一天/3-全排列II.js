//给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

const nums = [1, 2, 3];

var permuteUnique = function (nums) {
  let res = [];
  let len = nums.length;
  nums.sort((a, b) => a - b); // 排序
  let used = Array(len).fill(false); // 标记是否使用过该数字

  function unique(arr) {
    if (arr.length == len) {
      res.push([...arr]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // 如果当前数字已经使用过，或者它和前一个数字相同且前一个数字还没被使用过，则跳过
      if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
        continue;
      }

      arr.push(nums[i]); // 选择当前数字
      used[i] = true; // 标记当前数字为已使用
      unique(arr); // 递归
      arr.pop(); // 回溯，移除当前数字
      used[i] = false; // 恢复当前数字的状态
    }
  }
  unique([]);
  return res;
};

permuteUnique(nums);

// 1 2 3
