// 给定一个含有 n 个正整数的数组和一个正整数 target 。
// 找出该数组中满足其总和大于等于 target 的长度最小的 子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

// 滑动窗口思想，通过定义前后两个指针。起始值都为0，
// 区间值大于等于target时更新start指针+1，小于target时更新end指针+1，
// 取区间值大于等于target值时最小的end-start的值

const target = 7;
const nums = [2, 3, 1, 2, 4, 3];
var minSubArrayLen = function (target, nums) {
  let len = nums.length;
  let start = 0;
  let end = 0;
  let sum = 0;
  let ans = -1;

  while (end < len) {
    sum += nums[end];
    while (sum >= target) {
      ans = ans === -1 ? end - start + 1 : Math.min(ans, end - start + 1);
      sum -= nums[start];
      start++;
    }
    end++;
  }
  return ans === -1 ? 0 : ans;
};

console.log(minSubArrayLen(target, nums));
