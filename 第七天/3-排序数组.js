// 给你一个整数数组 nums，请你将该数组升序排列。
// 你必须在 不使用任何内置函数 的情况下解决问题，时间复杂度为 O(nlog(n))，并且空间复杂度尽可能小。

// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]
// 解释：数组排序后，某些数字的位置没有改变（例如，2 和 3），而其他数字的位置发生了改变（例如，1 和 5）。

// 输入：nums = [5,1,1,2,0,0]
// 输出：[0,0,1,1,2,5]
// 解释：请注意，nums 的值不一定唯一。

class MinHeap {
  constructor() {
    this.heap = [];
  }
  push(val) {
    this.heap.push(val);
    this._heapifyUp();
  }

  _heapifyUp() {
    //从下往上堆化
    const length = this.heap.length;
    let index = length - 1;
    while (index > 0) {
      const child = this.heap[index];
      const parentIndex = (index - 1) >>> 1;
      const parent = this.heap[parentIndex];
      if (child < parent) {
        this.heap[parentIndex] = child;
        this.heap[index] = parent;
        index = parentIndex;
      } else {
        return;
      }
    }
  }

  pop() {
    return this._heapifyDown();
  }

  _heapifyDown() {
    //从上往下堆化
    if (this.heap.length === 0) {
      return null;
    }
    const first = this.heap[0];
    const last = this.heap.pop();
    if (first !== last) {
      this.heap[0] = last;
      let index = 0;
      const length = this.heap.length;
      const halfLength = length >>> 1;

      while (index < halfLength) {
        const leftIndex = (index + 1) * 2 - 1;
        const left = this.heap[leftIndex];
        const rightIndex = leftIndex + 1;
        const right = this.heap[rightIndex];
        if (left < last) {
          if (right < left && rightIndex < length) {
            //right最小
            this.heap[index] = right;
            this.heap[rightIndex] = last;
            index = rightIndex;
          } else {
            //left最小
            this.heap[index] = left;
            this.heap[leftIndex] = last;
            index = leftIndex;
          }
        } else if (right < last && rightIndex < length) {
          this.heap[index] = right;
          this.heap[rightIndex] = last;
          index = rightIndex;
        } else {
          break;
        }
      }
    }
    return first;
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }
}

const minHeap = new MinHeap();
console.log(minHeap);

var sortArray = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    minHeap.push(nums[i]);
  }

  for (let j = 0; j < nums.length; j++) {
    res[j] = minHeap.pop();
  }

  return res;
};

// 测试
let arr = [5, 2, 3, 1];
console.log(sortArray(arr)); // 输出 [5, 6, 7, 11, 12, 13]

//    1
//  2  3
// 5

// set "PGROOT=D:\postgral\18"
