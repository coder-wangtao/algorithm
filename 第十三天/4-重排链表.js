// 给定一个单链表 L 的头节点 head ，单链表 L 表示为：
// L0 → L1 → … → Ln - 1 → Ln
// 请将其重新排列后变为：
// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

// 1.将链表线性存入数组，置空指针。
// 2.遍历数组重组链表，偶数栈顶弹出，奇数队列出队。

// 创建一个测试链表：1 -> 2 -> 3 -> 4  ==> 1 -> 4 -> 2 -> 3

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

function reorderList(head) {
  const arr = [];

  while (head) {
    const temp = head.next;
    head.next = null;
    arr.push(head);
    head = temp;
  }
  let cur = arr.shift(),
    i = 0;
  debugger;
  while (arr.length) {
    cur.next = i++ % 2 === 0 ? arr.pop() : arr.shift();
    cur = cur.next;
  }
}

reorderList(head);
console.log(head);
