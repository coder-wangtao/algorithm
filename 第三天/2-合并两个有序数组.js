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
  let i1 = m - 1,
    i2 = n - 1,
    mn = m + n - 1;
  while (i2 >= 0) {
    if (i1 >= 0 && nums1[i1] > nums2[i2]) {
      nums1[mn] = nums1[i1--];
    } else {
      nums1[mn] = nums2[i2--];
    }
    mn--;
  }
};
merge(nums1, m, nums2, n);
console.log(nums1);
