// 在排序数组中查找元素的第一个和最后一个位置
// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
// 如果数组中不存在目标值 target，返回 [-1, -1]。
// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]

const nums = [5, 7, 7, 8, 8, 10],
  target = 8;

var searchRange = function (nums, target) {
  var left = 0;
  var right = nums.length - 1;
  var first = -1;
  var last = -1;

  //TODO: nums = [1, 2, 2, 2, 3]
  //TODO: mid = 2; // nums[2] == 2 == target
  //TODO: 虽然 mid 是一个目标值的位置，但它不是第一个出现的目标值，因为索引 1 也是 2。
  //TODO: 所以我们不能立刻返回 mid，而是要继续往左边找有没有更早的出现。
  // 找第一个等于 target 的位置
  // 循环结束后，first 就是第一个出现的位置（如果没找到过就还是 -1）。
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] === target) {
      // 当 nums[mid] === target 时，不立即返回，而是继续往左找（right = mid - 1）。
      right = mid - 1;
      first = mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  //TODO: nums = [1, 2, 2, 2, 3]
  //TODO: mid = 2  // nums[2] == 2 == target
  // 它是目标值，但后面索引 3 也是 2，所以我们还得往右边找。
  // 找最后一个等于 target 的位置
  // 循环结束后，last 就是最后一个出现的位置（找不到则还是 -1）。
  left = 0;
  right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] === target) {
      // 当 nums[mid] === target 时，不立即返回，而是继续往右找（left = mid + 1）。
      // 这一次如果 nums[mid] 等于 target，更新 last，然后把左边界 left 移动到 mid + 1，继续往右边找更晚出现的 target。
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
