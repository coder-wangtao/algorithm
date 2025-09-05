// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

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


//     1 -> 2 -> 3 -> 4 -> 5
//0 -> 1 -> 2 -> 3 -> 4 -> 5 
//    fast  
//         slow           fast     
var removeNthFromEnd = function (head, n) {
  let preHead = new ListNode(0);
  preHead.next = head;
  let fast = preHead;
  let slow = preHead;
  while (n--) {
    fast = fast.next;
  }
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return preHead.next;
};

console.log(removeNthFromEnd(head, 4));
