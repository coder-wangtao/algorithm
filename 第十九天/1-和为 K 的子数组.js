// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
// 子数组是数组中元素的连续非空序列。
// 输入：nums = [1,2,3], k = 3
// 输出：2
// 使用前缀和 + 哈希表，记录每个前缀和出现的次数，通过查找 sum - k 来统计满足条件的连续子数组个数。

// 前缀和：即数组该位置及之前的元素之和。
// 举例：[2,1,3,4]，则前缀和为[0,2,3,6,10]，这里需要第一个元素为0。
// 这题的思路是首先求得前缀和befores，before.length=nums.length+1；
// 由于是要求数组中和为k的连续子数组的个数，可以联想到假设某个前缀和-k这个值也是某个前缀和，即存在的；
// 由于数组中元素的范围是[-1000,1000]，故不同位置的前缀和可能相同，故使用Map这种结构保存各个前缀和的个数。

//TODO:解析 https://www.bilibili.com/video/BV1gN411E7Zx/?spm_id_from=333.337.search-card.all.click
const nums = [1, 2, 3],
  k = 3;
var subarraySum = function (nums, k) {
  // 用来存储 前缀和 及其出现的次数。
  // 前缀和：从数组开头到当前位置的累加和。
  let map = new Map();
  let sum = 0;
  let count = 0;
  map.set(0, 1); // 处理从数组开头就能形成目标和 k 的情况。
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    // 如果之前出现过前缀和等于 sum - k
    // 那么从那个前缀和后的元素到当前元素的子数组和就是 k
    // 返回这样的前缀和出现次数，有多少个就加多少到 count
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    //记录前缀和出现的次数
    map.has(sum) ? map.set(sum, map.get(sum) + 1) : map.set(sum, 1);
  }
  return count;
};

console.log(subarraySum(nums, k));
