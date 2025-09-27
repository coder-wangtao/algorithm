// 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

// 输入：head = [1,1,2]
// 输出：[1,2]

var deleteDuplicates = function (head) {
  if (!head) return null;
  let cur = head;
  let next = cur.next;
  while (next) {
    if (cur.val === next.val) {
      cur.next = next.next;
      next = next.next;
    } else {
      cur = next;
      next = next.next;
    }
  }
  return head;
};
