// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
const k = 4;

class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 插入元素
  push(val) {
    this.heap.push(val);
    this._heapifyUp();
  }

  // 弹出堆顶元素
  pop() {
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._heapifyDown();
    }
    return top;
  }

  // 获取堆顶元素
  peek() {
    return this.heap[0];
  }

  // 堆化操作，向上调整
  _heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] >= this.heap[parentIndex]) break;
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  // 堆化操作，向下调整
  _heapifyDown() {
    let index = 0;
    while (2 * index + 1 < this.heap.length) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[smallest]
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallest]
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }

  // 获取堆的大小
  size() {
    return this.heap.length;
  }
}

var findKthLargest = function (nums, k) {
  const minHeap = new MinHeap();
  // 遍历数组
  for (let num of nums) {
    // 如果堆的元素少于 k 个，就加入堆
    if (minHeap.size() < k) {
      minHeap.push(num);
    } else if (num > minHeap.peek()) {
      // 如果当前元素大于堆顶元素，就弹出堆顶并插入新元素
      minHeap.pop();
      minHeap.push(num);
    }
  }

  // 堆顶元素就是第 k 大的元素
  return minHeap.peek();
};
console.log(findKthLargest(nums, k));
