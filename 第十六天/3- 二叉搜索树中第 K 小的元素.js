// 二叉搜索树中第 K 小的元素
// 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 小的元素（从 1 开始计数）。


//TODO:二叉搜索树
// 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值； 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值； 它的左、右子树也分别为二叉排序树。
// 二叉搜索树作为一种经典的数据结构，它既有链表的快速插入与删除操作的特点，又有数组快速查找的优势；

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var kthSmallest = function (root, k) {
  let nums = [];
  function dfs(root) {
    if (!root) return;
    dfs(root.left);
    nums.push(root.val);
    dfs(root.right);
  }
  dfs(root);
  return nums[k - 1];
};

// 构造下图二叉树：
//       5
//      / \
//     3   6
//    / \
//   2   4
//  /
// 1
// 1 2 3 4 5 6
const root = new TreeNode(
  5,
  new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
  new TreeNode(6)
);

console.log(kthSmallest(root, 3));
