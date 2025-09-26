//给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// 创建一个测试链表：1 -> 2 -> 2 -> 1
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);

var isPalindrome = function (head) {
  if (head == null) {
    return true;
  } else if (head.next == null) {
    return true;
  } else {
    let slow = head;
    let fast = head;
    let _head = null;
    let temp = null;
    while (fast && fast.next) {
      _head = slow;
      slow = slow.next;
      fast = fast.next.next;
      _head.next = temp;
      temp = _head;
    }
    if (fast) {
      slow = slow.next;
    }
    while (_head) {
      if (_head.val !== slow.val) {
        return false;
      }
      _head = _head.next;
      slow = slow.next;
    }
    return true;
  }
};

console.log(isPalindrome(head));
