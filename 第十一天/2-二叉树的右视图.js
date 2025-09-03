// 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

// 构造下图二叉树：
//       1
//      / \
//     2   3
//      \   \
//       5   6
const root = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(6))
);

var rightSideView = function (root) {
  let res = [];
  function dfs(root, depth) {
    if (!root) return;
    if (res.length == depth) {
      res.push(root.val);
    }
    dfs(root.right, depth + 1);
    dfs(root.left, depth + 1);
  }
  dfs(root, 0);
  return res;
};
