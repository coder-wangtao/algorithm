// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// nums = [-2,1,-3,4,-1,2,1,-5,4]
// 连续子数组 [4,-1,2,1] 的和最大，为 6 。
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 初始化两个变量：当前子数组和、最大子数组和
  let currentSubarraySum = nums[0];
  let maxSubarraySum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    // 如果之前的子数组和为正，就继续加；否则从当前元素重新开始
    if (currentSubarraySum > 0) {
      currentSubarraySum += num; //如果 currentSubarraySum 为正，说明当前子数组和继续加上当前元素会得到一个更大的和。
    } else {
      currentSubarraySum = num; //如果 currentSubarraySum 为非正，说明从当前元素开始重新计算子数组和会更好。
    }

    // 更新全局最大值
    maxSubarraySum = Math.max(maxSubarraySum, currentSubarraySum);
  }

  return maxSubarraySum;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
