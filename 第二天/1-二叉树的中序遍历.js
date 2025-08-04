class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var preorderTraversal = function (root) {
  if (root == null) return [];

  const result = [];

  function dfs(node) {
    if (!node) return;
    dfs(node.left); // 左
    result.push(node.val); // 根
    dfs(node.right); // 右
  }

  dfs(root);
  return result;
};

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

// 调用先序遍历并打印结果
const res = preorderTraversal(root);
console.log(res); // 期望输出: [4,2,5,1,3,6]
