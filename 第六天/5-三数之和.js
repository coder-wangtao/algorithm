// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
// 同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。
const nums = [-1, 0, 1, 2, -1, -4];


var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i >= 1 && nums[i] === nums[i - 1]) {
      //为了避免重复的三元组，如果当前的元素与前一个元素相同，就跳过这个元素，避免重复计算相同的三元组。
      continue;
    }
    //对于每一个 i，我们使用两个指针 j 和 k，分别指向 i 之后的元素和数组的最后一个元素。
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        //如果 sum === 0，找到了一个满足条件的三元组，把它加入 res 数组。接着移动 j 指针，同时跳过重复的元素。
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        while (nums[j - 1] === nums[j]) {
          j++;
        }
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }

  return res;
};
console.log(threeSum(nums));
