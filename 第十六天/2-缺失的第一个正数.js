//缺失的第一个正数
// 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
// 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。

function firstMissingPositive(nums) {
  class MinHeap {
    constructor() {
      this.heap = [];
    }

    getLeft(i) {
      return 2 * i + 1;
    }
    getRight(i) {
      return 2 * i + 2;
    }
    getParent(i) {
      return Math.floor((i - 1) / 2);
    }

    // 上浮
    heapifyUp(i) {
      while (i > 0) {
        let p = this.getParent(i);
        if (this.heap[p] > this.heap[i]) {
          [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
          i = p;
        } else break;
      }
    }

    // 下沉
    heapifyDown(i) {
      let smallest = i;
      let left = this.getLeft(i);
      let right = this.getRight(i);

      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
      if (smallest !== i) {
        [this.heap[i], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[i],
        ];
        this.heapifyDown(smallest);
      }
    }

    push(val) {
      this.heap.push(val);
      this.heapifyUp(this.heap.length - 1);
    }

    pop() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();

      let root = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return root;
    }

    peek() {
      return this.heap.length ? this.heap[0] : null;
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
