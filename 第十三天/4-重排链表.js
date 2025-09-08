// 给定一个单链表 L 的头节点 head ，单链表 L 表示为：
// L0 → L1 → … → Ln - 1 → Ln
// 请将其重新排列后变为：
// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

// 将链表每个节点断开，放入数组s
// 指针i从头向尾，指针j从尾向头，重新组装链表

var reorderList = function (head, s = [], tmp) {
  // 换行可删除，合并到4行
  while (head)
    (tmp = head.next), (head.next = null), s.push(head), (head = tmp);
  var i = -1,
    j = s.length;
  while (++i < --j) (s[i].next = s[j]), j !== i + 1 && (s[j].next = s[i + 1]);
  return s[0];
};
