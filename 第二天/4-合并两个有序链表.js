// 定义链表节点类
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// 创建链表1：1 -> 2 -> 4
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

// 创建链表2：1 -> 3 -> 4
const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

var mergeTwoLists = function (list1, list2) {
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }
  let res;
  if (list1.val < list2.val) {
    res = list1;
    res.next = mergeTwoLists(list1.next, list2);
  } else {
    res = list2;
    res.next = mergeTwoLists(list1, list2.next);
  }
  return res;
};

function printList(node) {
  let current = node;
  let result = "";
  while (current) {
    result += current.val + " -> ";
    current = current.next;
  }
  console.log(result.slice(0, -4)); // 去掉最后的 " -> "
}

// 调用 mergeTwoLists 函数并打印结果
let mergedList = mergeTwoLists(list1, list2);
console.log("合并后的链表:");
printList(mergedList);
