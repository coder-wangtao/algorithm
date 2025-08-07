// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。

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
const l6 = new ListNode(6);
const l7 = new ListNode(7);
const headA = l1;
headA.next = l2;
headA.next.next = l3;
headA.next.next.next = l4;
headA.next.next.next.next = l5;

const headB = l7;
headB.next = l6;
headB.next.next = l3;
headB.next.next.next = l4;
headB.next.next.next.next = l5;

var getIntersectionNode = function (headA, headB) {
  while (headA) {
    headA.flag = true;
    headA = headA.next;
  }
  while (headB) {
    if (headB.flag) {
      return headB;
    }
    headB = headB.next;
  }
  return null;
};

console.log(getIntersectionNode(headA, headB));
