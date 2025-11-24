// 设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。
// 输入： arr = [1,3,5,7,2,4,6,8], k = 4
// 输出： [1,2,3,4]
//堆
var smallestK = function (arr, k) {
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
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    minHeap.push(arr[i]);
  }
  for (let j = 0; j < k; j++) {
    res[j] = minHeap.pop();
  }
  return res;
};
