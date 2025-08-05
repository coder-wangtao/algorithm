//合并两个有序数组
// https://leetcode.cn/problems/merge-sorted-array/
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
// nums1 = [1], m = 0, nums2 = [1], n = 1

// [1, 2, 3, 0, 0, 6][(1, 2, 3, 0, 5, 6)][(1, 2, 3, 3, 5, 6)][(1, 2, 2, 3, 5, 6)];
//  //len1 2 len2 1 //len1 2 len2 0 //len1 1 len2 0 //len1 1 len2 -1

var merge = function (nums1, m, nums2, n) {
  let n1 = m - 1;
  let n2 = n - 1;
  let len = nums1.length - 1;
  while (n2 >= 0) {
    if (m < 0) {
      nums1[len--] = nums2[n2--];
      return;
    }
    nums1[len--] = nums1[n1] > nums2[n2] ? nums1[n1--] : nums2[n2--];
  }
};
merge(nums1, m, nums2, n);
console.log(nums1);
