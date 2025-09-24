// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

// 子数组是数组中元素的连续非空序列。

const nums = [1, 2, 3],
  k = 3;
var subarraySum = function (nums, k) {
  let ans = 0;
  let sum = 0;
  let map = new Map();
  //对与单个为k的数来说，相当如减去前缀和为0的值等于k
  map.set(0, 1); //这是非常有必要的
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      ans += map.get(sum - k);
    }
    //可能相同的前缀和出现多次,因为有负数，0之类的
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return ans;
};

console.log(subarraySum(nums, k));
