// 有序数组中的单一元素
// 给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次。
// 请你找出并返回只出现一次的那个数。
// 你设计的解决方案必须满足 O(log n) 时间复杂度和 O(1) 空间复杂度。

const nums = [1, 2, 2, 3, 3, 4, 8, 8];

var singleNonDuplicate = function (nums) {
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    // 如果 mid 是奇数，向左移一位，使其变为偶数
    let mid = Math.floor((l + r) / 2);
    if (mid % 2 === 1) mid--;
    // 如果 nums[mid] 和 nums[mid + 1] 相等，则说明重复元素在右半部分
    if (nums[mid] === nums[mid + 1]) {
      // 更新左指针 l，跳过这对重复的元素
      l = mid + 2;
    } else {
      // 否则，更新右指针 r，缩小范围
      r = mid;
    }
  }
  return nums[l];
};

singleNonDuplicate(nums);
