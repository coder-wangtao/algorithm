class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var levelOrder = function (root) {
  let res = [];
  function dfs(root, depth) {
    if (!root) return;
    if (res[depth] === undefined) {
      res[depth] = [];
    }
    res[depth].push(root.val);
    dfs(root.left, depth + 1);
    dfs(root.right, depth + 1);
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
const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(6))
);

// 调用先序遍历并打印结果
const res = levelOrder(root);
console.log(res); // 期望输出: [1, 2, 4, 5, 3, 6]
