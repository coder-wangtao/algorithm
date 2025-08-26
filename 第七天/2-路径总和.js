// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。
// 判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。
// 叶子节点 是指没有子节点的节点。

// 构造下图二叉树：
//       1
//      / \
//     2   3
//    / \   \
//   4   5   6

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// 观察我们可以发现 targetSum应该等于根节点的val加上其某条路径上面的所有子节点的val和
// 故依次递推如果存在某条路径和等于targetSum 那么这条路径上面的叶子节点的值应该等于targetSum减去除叶子节点外的节点值之和

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(6))
);

var hasPathSum = function (root, sum) {
  if (!root) return false;
  if (root.left === null && root.right === null) return sum - root.val === 0;
  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
};

console.log(hasPathSum(root, 7));
