// 给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。打乱后，数组的所有排列应该是 等可能 的。

// 实现 Solution class:

// Solution(int[] nums) 使用整数数组 nums 初始化对象
// int[] reset() 重设数组到它的初始状态并返回
// int[] shuffle() 返回数组随机打乱后的结果

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * 获取原数组
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * 打乱数组
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const nums = this.nums.slice(0);
  let n = nums.length;

  // 产生的结果有 n! 种可能
  for (let i = 0; i < n; i++) {
    // 从 i 到 n-1 随机选一个
    const rand = randOne(i, n - 1);
    // 交换nums数组i和rand下标的两个元素
    [nums[i], nums[rand]] = [nums[rand], nums[i]];
  }

  return nums;
};
//5 10
// 获取闭区间 [n, m] 内的一个随机整数
function randOne(n, m) {
  return Math.floor(Math.random() * (m - n + 1)) + n;
}

const nums = ["Solution", "shuffle", "reset", "shuffle"];
var obj = new Solution(nums);
var param_1 = obj.reset();
var param_2 = obj.shuffle();
console.log(param_1);
console.log(param_2);
