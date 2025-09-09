// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
// 算法的时间复杂度应该为 O(log (m+n)) 。

// const nums1 = [1, 2],
//   nums2 = [3, 4];
// //1 2 3
//1 2 3 4
// 中位数是题目的关键词，即有序数列中间一个数(奇数个元素)或者中间两个数的算数平均数(偶数个元素)
// 其实就是查找第k小数，对于奇数个元素 k=(len+1)/2，对于偶数个元素 k1=len/2 k2=len/2+1，最后将将两个公式合并一下 k=parseInt((len+1)/2)

// 首先清楚怎么计算中位数，如果数组的长度（假设是len）是奇数，那么中位数就是最中间的那个，索引等于 (len - 1) / 2，
// 如果数组长度是偶数，那么中位数等于中间的两个数相加除2，中间的两个数索引分别是 len/2 -1 和 len/2。

// 清楚了怎么计算中位数，那么这个题目最简单粗暴的解法也就顺其自然的想出来了，先合并两个数组，
// 然后排序，排序方式可以采用sort方法或者是归并排序（毕竟这两个数组是有序的），排序完成后，直接判断合并后的数组长度奇偶性即可得出结论。

// 重点是这个二分法：

// 为什么会想到用二分法，我的理解是题目不是找中位数嘛，中位数左右两侧的数目是相等的，而二分正是将一个列表分成两等份，所以也很容易往这个方向去思考。

// nums1 = [7,8,9]
// nums2 = [1,2,3,4,5]

// 1 2 3 4 5 7 8 9  => 4.5

// // 重述一下题目，两个正序数组，nums1，nums2，找中位数。

// // 我们对长度较小的那个进行二分，这样可以更快的得出结果。

// 假设nums1的长度为len1， nums2的长度为len2，总长度为len = len1 + len2，并且len1 < len2。

// 开始对nums1进行二分，首先定义开始位置，start = 0，end = len1。

// 每次二分后，nums1会被分为两段，假设左侧的末尾位置为partLen1，那么右侧开始则为partLen1 + 1。

// nums1被分段后，nums2也要跟着被分段，并且保证nums2左侧一段与nums1左侧一段的和为 (len + 1) / 2，
// 这样才能保证我们找到的是中位数，因此nums2的左侧一段末尾partLen2 = (len + 1) / 2 - partLen1。
// （由此得出，nums2分段的位置是由nums1决定的，因此只要知道partLen1，那么nums2的分段也跟着计算出来）。

// 有了partLen1和partLen2之后，我们就知道了nums1左侧末尾的数字L1以及右侧开始的数字R1，以及nums2左侧末尾的数字L2和右侧开始的数字R2。

// 接着比较这几个数字，如果L1 > R2，说明nums1左侧的数太大了，那么对nums1左侧继续二分，即结束位置左移，变成partLen1 - 1。
// 如果L2 > R1，说明nums2的左侧太大了，nums1的右侧太小了，那么对nums1的右侧继续二分，即开始位置右移，变成partLen1 + 1。
// 如果L1 < R2 并且 L2 < R1，那么此时比较完成，我们已经找到了，接着判断总长度奇偶性，如果是偶数，
// 那么中位数就是L1和L2较大的以及R1和R2中较小的这两者的和除2，如果是奇数，那中位数就是L1和L2中的较大者。

// A = [7, 8, 9];
// B = [1, 2, 3, 4, 5, 6];
const nums1 = [7, 8, 9];
const nums2 = [1, 2, 3, 4, 5, 6];
var findMedianSortedArrays = function (nums1, nums2) {
  debugger;
  let len1 = nums1.length,
    len2 = nums2.length;
  if (len1 > len2) return findMedianSortedArrays(nums2, nums1);
  let len = len1 + len2;
  let start = 0,
    end = len1;

  let partLen1, partLen2;

  while (start <= end) {
    partLen1 = Math.floor((start + end) / 2);
    partLen2 = Math.floor((len + 1) / 2) - partLen1;

    let L1 = partLen1 === 0 ? -Infinity : nums1[partLen1 - 1];
    let R1 = partLen1 === len1 ? Infinity : nums1[partLen1];

    let L2 = partLen2 === 0 ? -Infinity : nums2[partLen2 - 1];
    let R2 = partLen2 === len2 ? Infinity : nums2[partLen2];

    if (L1 > R2) {
      end = partLen1 - 1;
    } else if (L2 > R1) {
      start = partLen1 + 1;
    } else {
      return len % 2 === 0
        ? (Math.max(L1, L2) + Math.min(R1, R2)) / 2
        : Math.max(L1, L2);
    }
  }
};

console.log(findMedianSortedArrays(nums1, nums2));
