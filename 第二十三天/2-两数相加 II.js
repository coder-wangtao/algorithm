// 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
const l1 = [7, 2, 4, 3];
const l2 =    [5, 6, 4];
const res = [7, 8, 0, 7];

function addTwoNumbers(l1, l2) {
  let stack1 = [];
  let stack2 = [];

  while (l1 !== null) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2 !== null) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  let curr = null;
  let addOne = 0;
  //  3 4
  //  4 6
  //  2 5
  //  7 
  while (addOne || stack1.length || stack2.length) {
    let val1 = stack1.length ? stack1.pop() : 0;
    let val2 = stack2.length ? stack2.pop() : 0;

    let sum = val1 + val2 + addOne;
    sum >= 10 ? (addOne = 1) : (addOne = 0);

    // 头插法构建链表
    let currNode = new ListNode(sum % 10, curr);
    curr = currNode;
  }

  return curr;
}
