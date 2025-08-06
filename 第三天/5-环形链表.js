// 给你一个链表的头节点 head ，判断链表中是否有环。
// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
const l1 = new ListNode(1);
const l2 = new ListNode(2);
const l3 = new ListNode(3);

const head = l1;
head.next = l2;
head.next.next = l3;
head.next.next.next = l2;

//1-> 2 -> 3 ->
//快慢指针
//同样采用 "快慢指针"，在慢指针进入环之前快指针就已经在环内跑了，此时每一次迭代快指针都会比慢指针多走一步，这样下去二者势必会相遇，即我们常说的“套圈”。
var hasCycle = function (head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      return true;
    }
  }

  return false;
};

console.log(hasCycle(head));
