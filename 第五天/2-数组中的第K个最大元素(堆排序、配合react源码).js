// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
const k = 4;
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

  peek() {
    return this.length === 0 ? null : this.heap[0];
  }

  push(val) {
    this.heap.push(val);
    this._heapifyUp();
    //从下往上调整堆
  }

  _heapifyUp() {
    let i = this.heap.length; //从堆底最后一个元素开始，从下往上调整堆
    let index = i - 1;
    //一直遍历到堆顶部
    while (index > 0) {
      const parentIndex = (index - 1) >>> 1;
      const parent = this.heap[parentIndex];
      const child = this.heap[index];
      if (parent > child) {
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
    //拿到堆底最后一个元素开始，放到堆顶上，从上往下调整堆
    if (this.heap.length === 0) {
      return null;
    }
    const first = this.heap[0];
    const top = this.heap.pop();
    if (first !== top) {
      //证明heap中有两个甚至更多的元素
      this.heap[0] = top;
      let index = 0;
      const length = this.heap.length;
      const halfLength = length >>> 1;

      //halfLength 是 Math.floor(length / 2)，它表示堆中“最后一个有子节点的父节点”的索引。
      //对于堆的最后一个元素，它没有子节点，因此它不需要进行堆化操作。所以，index < halfLength 保证了只有那些有子节点的节点才会被堆化。
      // 0 1 2
      //      0
      //    1   2
      // 3  4 5  6
      //通过 index < halfLength，我们可以确保不会试图调整没有子节点的节点。

      while (index < halfLength) {
        const leftIndex = (index + 1) * 2 - 1;
        const left = this.heap[leftIndex];
        const rightIndex = leftIndex + 1;
        const right = this.heap[rightIndex];
        if (left < top) {
          //left < 第一个
          if (rightIndex < length && right < left) {
            //right存在 并且 right更小
            this.heap[index] = right;
            this.heap[rightIndex] = top;
            index = rightIndex;
          } else {
            //left更小或者right不存在
            this.heap[index] = left;
            this.heap[leftIndex] = top;
            index = leftIndex;
          }
        } else if (rightIndex < length && right < last) {
          this.heap[index] = right;
          this.heap[rightIndex] = top;
          index = rightIndex;
        } else {
          //根节点最小//不需要调整
          return;
        }
      }
    }
    return first;
  }

  size() {
    return this.heap.length;
  }
}

const minHeap = new MinHeap();

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
