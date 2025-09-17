// 在排序数组中查找元素的第一个和最后一个位置
// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
// 如果数组中不存在目标值 target，返回 [-1, -1]。
// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
const nums = [5, 7, 7, 8, 8, 10],
  target = 8;

//有序数组查找目标值问题首先想到的是二分法，查找左边界和右边界需要用两次二分法。
// 这里将二分查找放入一个函数中，函数返回的是左边界。
// 两次调用这个函数，第一次获得target的左边界，第二次获得target + 1的左边界，将第二次的结果减一就是target的右边界。

var searchRange = function (nums, target) {
  var left = 0;
  var right = nums.length - 1;
  var first = -1;
  var last = -1;

  // 找第一个等于 target 的位置
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] === target) {
      right = mid - 1;
      first = mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  // 找最后一个等于 target 的位置
  left = 0;
  right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] === target) {
      left = mid + 1;
      last = mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return [first, last];
};
console.log(searchRange(nums, target));
