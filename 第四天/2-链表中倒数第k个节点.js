// 实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。
// 注意：本题相对原题稍作改动
// 示例：
// 输入： 1->2->3->4->5 和 k = 2
// 输出： 4
// 说明：
// 给定的 k 保证是有效的。

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const l1 = new ListNode(1);
const l2 = new ListNode(2);
const l3 = new ListNode(3);
const l4 = new ListNode(4);
const l5 = new ListNode(5);

const head = l1;
head.next = l2;
head.next.next = l3;
head.next.next.next = l4;
head.next.next.next.next = l5;
//1->2->3->4->5
//1 1
var getKthFromEnd = function (head, k) {
  let fast = head;
  let slow = head;
  while (fast) {
    if (k > 0) {
      fast = fast.next;
      k--;
    } else {
      slow = slow.next;
      fast = fast.next;
    }
  }
  return slow;
};

console.log(getKthFromEnd(head, 2));
