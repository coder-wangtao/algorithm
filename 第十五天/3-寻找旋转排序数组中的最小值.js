// 已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：
// 若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]
// 若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]
// 注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。
// 给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。
// 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。

// 1、mid元素大于end，说明从mid到end的趋势是递减的，所以最小值出现在mid的右边
// 2、mid元素小于end，说明从mid到end的趋势是递增的，所以最小值出现在mid的左边
// 3、用if(){} else if(){},而不是if(){}else{},是看了之前二分法的一个避坑指南，建议else里也写入判断条件

const nums = [3, 4, 5, 1, 2];
var findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  debugger;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else if (nums[mid] < nums[end]) {
      end = mid;
    }
  }

  return nums[start];
};

console.log(findMin(nums));
