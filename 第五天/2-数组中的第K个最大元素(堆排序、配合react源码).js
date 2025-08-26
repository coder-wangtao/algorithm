// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

//满二叉树：如果二叉树中除了叶子结点，每个结点的度都为 2，则此二叉树称为满二叉树。
//      o
//   o    o
//o   o o   o

//满二叉树中第 i 层的节点数为 2n-1 个。

//如果二叉树中除去最后一层节点为满二叉树，且最后一层的结点依次从左到右分布，则此二叉树被称为完全二叉树。
// 完全二叉树:
//          o
//       o     o
//   o    o o
// 非完全二叉树:
//          o
//       o     o
//   o    o      o

// 最小堆（MinHeap）它是一个完全二叉树，满足每个父节点的值都不大于其子节点的值。
// 9 4
//           3
//        7    4
//     10  12 9  6
//  15  14

//根据子节点下标推算父节点下标：parentIndex = (childrenIndex - 1) >>> 1 = Math.floor((childrenIndex - 1)/2)
//根据父节点下标推算子节点下标：
// leftIndex = (parentIndex + 1)*2 - 1
// rightIndex = leftIndex + 1

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
// const minHeap = new MinHeap();
// minHeap.push(1);
// minHeap.push(2);
// minHeap.push(3);
// minHeap.push(4);
// minHeap.push(5);
// minHeap.pop();
// minHeap.push(2);
// minHeap.pop();
// minHeap.push(4);
// minHeap.pop();
// minHeap.push(5);
// minHeap.pop();
// minHeap.push(5);
// minHeap.pop();
// minHeap.push(6);
// console.log(minHeap);
//
const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
const k = 4;

var findKthLargest = function (nums, k) {
  const minHeap = new MinHeap();
  nums.forEach((n) => {
    minHeap.push(n);
    if (minHeap.size() > k) {
      minHeap.pop();
    }
  });
  return minHeap.peek();
};
console.log(findKthLargest(nums, k));
//    2
//  4  3
// 6 5

//   3
//  4 5
// 6
