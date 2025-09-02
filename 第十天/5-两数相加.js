//给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
//请你将两个数相加，并以相同形式返回一个表示和的链表。

//2 -> 4 -> 3
//5 -> 6 -> 4
//7 -> 0 -> 8

//l1 = [9,9,9,9,9,9,9]
//l2 = [9,9,9,9]
//     [8,9,9,9,0,0,0,1]
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

var addTwoNumbers = function (l1, l2, carry = 0) {
  if (l1 === null && l2 === null && carry === 0) {
    // 递归边界
    return null;
  }

  let s = carry;
  if (l1) {
    s += l1.val; // 累加进位与节点值
    l1 = l1.next;
  }
  if (l2) {
    s += l2.val;
    l2 = l2.next;
  }

  // s 除以 10 的余数为当前节点值，商为进位
  return new ListNode(s % 10, addTwoNumbers(l1, l2, Math.floor(s / 10)));
};

console.log(addTwoNumbers(l1, l2));
