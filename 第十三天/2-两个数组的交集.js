// 给定两个数组 nums1 和 nums2 ，返回 它们的 交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];

var intersection = function (nums1, nums2) {
  let res = new Set();
  nums2 = nums2.sort((a, b) => a - b);
  let binarySearch = (arr, val) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = (left + right) >> 1;
      if (arr[mid] === val) {
        return true;
      } else if (arr[mid] > val) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return false;
  };
  for (let i = 0; i < nums1.length; i++) {
    if (binarySearch(nums2, nums1[i])) {
      res.add(nums1[i]);
    }
  }
  return [...res];
};

console.log(intersection(nums1, nums2));
