// 给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
// 每条从根节点到叶节点的路径都代表一个数字：

// 例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
// 计算从根节点到叶节点生成的 所有数字之和 。

// 叶节点 是指没有子节点的节点。

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var sumNumbers = function (root) {
  let res = 0;
  function dfs(root, cur) {
    if (!root) return 0;
    cur = cur * 10 + root.val;
    if (!root.left && !root.right) res += cur;
    dfs(root.left, cur);
    dfs(root.right, cur);
  }
  dfs(root, 0);
  return res;
};

// 构造下图二叉树：
//       1
//      / \
//     2   3
//    / \   \
//   4   5   6
// const root = new TreeNode(
//   1,
//   new TreeNode(2, new TreeNode(4), new TreeNode(5)),
//   new TreeNode(3, null, new TreeNode(6))
// );

const root = new TreeNode(
  1,
  new TreeNode(2, null, null),
  new TreeNode(3, null, new TreeNode(6))
);
// 调用先序遍历并打印结果
console.log(sumNumbers(root));
