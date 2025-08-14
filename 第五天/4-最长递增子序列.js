// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。
// 例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
const nums = [10, 9, 2, 5, 3, 7, 101, 18];

//动态规划
// var lengthOfLIS = function (nums) {
//   const n = nums.length;
//   if (n === 0) return 0;
//   const dp = new Array(n).fill(1);
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//   }
//   return Math.max(...dp);
// };

//贪心+二分

//[10, 9, 2, 5, 3, 7, 101, 18]
// 初始化 d = [] 和 len = 1，d[len] = 10。
// 遍历到第二个元素 9：
// 9 小于 d[len]（即 10），所以进行二分查找，找到替换的位置，更新 d[1] = 9。
// 遍历到第三个元素 2：
// 2 小于 d[len]，同样进行二分查找，更新 d[1] = 2。
// 遍历到第四个元素 5：
// 5 大于 d[len]（即 2），所以将 5 加入，d[2] = 5，len 增加。
// 遍历到第五个元素 3：
// 3 小于 d[len]（即 5），进行二分查找，找到替换位置，更新 d[2] = 3。
// 遍历到第六个元素 7：
// 7 大于 d[len]（即 3），加入 d[3] = 7，len 增加。
// 遍历到第七个元素 101：
// 101 大于 d[len]（即 7），加入 d[4] = 101，len 增加。
// 遍历到第八个元素 18：
// 18 小于 d[len]（即 101），进行二分查找，更新 d[4] = 18。
// 最终，d = [2, 3, 5, 7, 18]，所以最长递增子序列的长度为 len = 4。

//0 2 4 6 8  5


var lengthOfLIS = function (nums) {
  let len = 1,
    n = nums.length;
  if (n === 0) return 0;
  let d = [0];
  d[len] = nums[0];

  for (let i = 1; i < n; ++i) {
    //如果 nums[i] 大于当前子序列的最后一个元素（即 d[len]）
    if (nums[i] > d[len]) {
      //那么 nums[i] 可以直接添加到递增子序列的末尾，并且 len 加 1。
      d[++len] = nums[i];
    } else {
      let l = 1,
        r = len,
        pos = 0; // 如果找不到说明所有的数都比 nums[i] 大，此时要更新 d[1]，所以这里将 pos 设为 0
      //如果 nums[i] 小于等于 d[len]，说明它不能直接加入到子序列的末尾，因此我们使用二分查找来找到一个合适的位置，来替换子序列中一个较大的数，以保持递增。
      while (l <= r) {
        let mid = (l + r) >> 1;
        if (d[mid] < nums[i]) {
          pos = mid;
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
      d[pos + 1] = nums[i];
    }
  }
  return len;
};

console.log(lengthOfLIS(nums));
