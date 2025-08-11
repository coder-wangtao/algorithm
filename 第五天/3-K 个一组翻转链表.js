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
  let pre = null; // 初始化 pre 为 null，用来保存已反转部分的前一个节点
  let cur = head; // cur 指向当前节点，从 head 开始
  let p = head; // p 用来遍历链表，检查是否有足够的节点进行反转
  for (let i = 0; i < k; i++) {
    if (p == null) return head; // 如果 p 遇到 null，说明剩余节点不足 k 个，不需要反转，直接返回原始 head
    p = p.next; // p 向下移动，遍历到下一个节点
  }
  for (let j = 0; j < k; j++) {
    let next = cur.next; // 暂时保存 cur 的下一个节点
    cur.next = pre; // 将 cur 的 next 指向 pre，从而完成反转
    pre = cur; // 将 pre 更新为 cur，移动到下一个节点
    cur = next; // 将 cur 移动到下一个节点
  }
  head.next = reverseKGroup(cur, k); // 递归调用反转剩余部分，将原链表剩余部分进行反转
  return pre; // 返回当前反转部分的头节点，即新的头节点
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
