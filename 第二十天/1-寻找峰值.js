// 峰值元素是指其值严格大于左右相邻值的元素。

// 给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。

// 你可以假设 nums[-1] = nums[n] = -∞ 。

// 你必须实现时间复杂度为 O(log n) 的算法来解决此问题。

// 输入：nums = [1,2,1,3,5,6,4]
// 输出：1 或 5
// 解释：你的函数可以返回索引 1，其峰值元素为 2；
//      或者返回索引 5， 其峰值元素为 6。

// 峰值存在：因为峰值元素不一定是数组的极端元素（即第一个或最后一个元素），
// 而是数组中某个元素满足 nums[i] >= nums[i-1] && nums[i] >= nums[i+1] 的条件。
// 相邻关系：如果 nums[mid] > nums[mid + 1]，说明可能有峰值在左侧（包括 mid）；
// 如果 nums[mid] <= nums[mid + 1]，则说明可能有峰值在右侧。

// 当 left 等于 right 时，意味着找到了峰值元素的位置，因为根据二分查找的原理，
// 最终 left 和 right 会收敛到一个相同的索引，这个索引对应的元素就是峰值元素。
const nums = [1, 2, 1, 3, 5, 6, 4];
//  
var findPeakElement = function (nums) {
  if (nums.length === 0) return 0;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

console.log(findPeakElement(nums));
