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

//1 -> 2 -> 3 -> 4 -> 5
var reverseList = function (head) {
  let cur = head;
  let pre = null;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};

let reversedHead = reverseList(head);

// // 输出反转后的链表
// console.log("原链表:");
// printList(head);
console.log("反转后的链表:");
printList(reversedHead);
