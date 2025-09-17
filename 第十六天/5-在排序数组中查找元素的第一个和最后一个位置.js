// 在排序数组中查找元素的第一个和最后一个位置
// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
// 如果数组中不存在目标值 target，返回 [-1, -1]。
// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
const nums = [5, 7, 7, 8, 8, 10],
  target = 8;
var searchRange = function (nums, target) {
  const len = nums.length;
  let l1 = 0;
  let r1 = len - 1;
  let l2 = 0;
  let r2 = len - 1;

  while (l1 < r1 || l2 < r2) {
    const mid1 = Math.floor((l1 + r1) / 2);
    const mid2 = Math.ceil((l2 + r2) / 2);

    if (target > nums[mid1]) {
      l1 = mid1 + 1;
    } else {
      r1 = mid1;
    }

    if (target < nums[mid2]) {
      r2 = mid2 - 1;
    } else {
      l2 = mid2;
    }
  }

  if (nums[l1] !== target) {
    return [-1, -1];
  }

  return [l1, l2];
};

console.log(searchRange(nums, target));
