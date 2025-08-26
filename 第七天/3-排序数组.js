var sortArray = function (nums) {
  let n = nums.length;
  // 1. 构建最大堆
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(nums, n, i);
  }

  // 2. 逐步取出堆顶元素放到末尾，调整堆
  for (let i = n - 1; i > 0; i--) {
    // 交换堆顶（最大值）和当前末尾元素
    [nums[0], nums[i]] = [nums[i], nums[0]];
    // 调整剩余堆
    heapify(nums, i, 0);
  }

  return nums;
};

function heapify(arr, heapSize, i) {
  let largest = i; // 假设当前节点最大
  let left = 2 * i + 1; // 左子节点索引
  let right = 2 * i + 2; // 右子节点索引

  // 如果左子节点比根大
  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }

  // 如果右子节点比目前最大值大
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }

  // 如果最大值不是根节点，则交换并递归调整子树
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, heapSize, largest);
  }
}

// 测试
let arr = [12, 11, 13, 5, 6, 7];
console.log(sortArray(arr)); // 输出 [5, 6, 7, 11, 12, 13]
