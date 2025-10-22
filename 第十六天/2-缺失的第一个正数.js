//缺失的第一个正数
// 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
// 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。

function firstMissingPositive(nums) {
  class MinHeap {
    constructor() {
      this.heap = [];
    }
    push(val) {
      this.heap.push(val);
      this._heapifyUp();
    }
    // 2,1
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

    //    2
    //  5  3
    //
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

    isEmpty() {
      return this.heap.length === 0;
    }
  }

  let heap = new MinHeap();

  // 只保留正数
  for (let num of nums) {
    if (num > 0) heap.push(num);
  }

  if (heap.isEmpty()) return 1;

  let smallest = 1;
  let prev = 0;

  // 7,8,9,11,12
  // 3,4,-1,1
  //[1,2,0]
  // 正整数，即大于0的整数如，1，2，3……
  while (!heap.isEmpty()) {
    let cur = heap.pop();

    if (cur === prev) continue; // 去重
    if (cur === smallest) {
      smallest++;
    } else if (cur > smallest) {
      return smallest;
    }
    prev = cur;
  }

  return smallest;
}

console.log(firstMissingPositive([[3, 4, -1, 1]]));
