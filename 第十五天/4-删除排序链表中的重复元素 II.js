//给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。

// 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5
// 1 -> 2 -> 3

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const l1 = new ListNode(1);
const l2 = new ListNode(2);
const l3 = new ListNode(3);
const l4 = new ListNode(3);
const l5 = new ListNode(4);
const l6 = new ListNode(4);
const l7 = new ListNode(5);

const head = l1;
head.next = l2;
head.next.next = l3;
head.next.next.next = l4;
head.next.next.next.next = l5;
head.next.next.next.next.next = l6;
head.next.next.next.next.next.next = l7;

// 0 -> 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5
var deleteDuplicates = function (head) {
  // 哑节点 next指向head
  let dummy = new ListNode(0, head);
  let cur = dummy;
  while (cur.next && cur.next.next) {
    // 相邻结点的值相同的情况(下一个节点的值等于下下一个节点的值)
    if (cur.next.val == cur.next.next.val) {
      // 先把相同的值保存起来，后面节点值等于此值的都从链表中删除
      let val = cur.next.val;
      // 直接删除后面链接中值等于这个值的节点
      while (cur.next && cur.next.val == val) {
        cur.next = cur.next.next;
      }
    } else {
      // 相邻结点的值不相同的情况  直接遍历后一个
      cur = cur.next;
    }
  }
  return dummy.next;
};

console.log(deleteDuplicates(head));
