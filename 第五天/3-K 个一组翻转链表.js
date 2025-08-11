// 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
// k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
// 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// 创建一个测试链表：1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

var reverseKGroup = function (head, k) {
  let pre = null;
  let cur = head;
  let p = head;
  for (let i = 0; i < k; i++) {
    if (p == null) return head;
    p = p.next;
  }
  for (let j = 0; j < k; j++) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  head.next = reverseKGroup(cur, k);
  return pre;
};

// 输出原链表
function printList(node) {
  let current = node;
  let result = "";
  while (current) {
    result += current.val + " -> ";
    current = current.next;
  }
  console.log(result.slice(0, -4)); // 去掉最后的 " -> "
}

console.log("反转后的链表:");
printList(printList(reverseKGroup(head, 2)));
