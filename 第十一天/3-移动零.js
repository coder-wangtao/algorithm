// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。

const nums = [0, 1, 0, 3, 12];

// 用一个慢指针 k 记录当前应该放非 0 元素的位置。
// 用另一个快指针 i 从头遍历数组：
// 如果 nums[i] 是非零，就把它和 nums[k] 交换，然后 k++。
// 如果是 0，就跳过。
// 这样所有非零元素都会被按顺序移到前面，后面剩下的位置自然就被“挤”成了 0。

//[1, 3, 12, 0,0]

var moveZeroes = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[k]] = [nums[k], nums[i]];
      k++;
    }
  }
};

moveZeroes(nums);
console.log(nums);
