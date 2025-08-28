class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// 构造下图二叉树：
//       1
//      / \
//     2   3
//    / \   \
//   4   5   6
const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(6))
);

var maxDepth = function (root) {
  if (!root) {
    return 0;
  } else {
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;
  }
};

// 调用先序遍历并打印结果
const res = maxDepth(root);
console.log(res);
