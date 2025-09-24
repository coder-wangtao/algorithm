// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

// 返回这三个数的和。

// 假定每组输入只存在恰好一个解。
const nums = [-1, 2, 1, -4],
  target = 1;

const threeSumClosest = (nums, target) => {
  // 升序排序
  nums.sort((a, b) => a - b);
  // 初始化一个最小值
  let min = Infinity;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    // 定义左右指针
    let [left, right] = [i + 1, len - 1];
    while (left < right) {
      // 当前三数之和
      const sum = nums[i] + nums[left] + nums[right];
      // 如果当前和更接近，更新最小值
      if (Math.abs(sum - target) < Math.abs(min - target)) {
        min = sum;
      }
      // 根据sum和target的关系，移动指针
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        // sum和target相等，直接返回sum，肯定是最小的了
        return sum;
      }
    }
  }
  // 遍历结束，返回最接近的和
  return min;
};
