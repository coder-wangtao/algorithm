// 二叉树中的最大路径和
// 路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 至多出现一次 。
// 该路径 至少包含一个 节点，且不一定经过根节点。
// 路径和 是路径中各节点值的总和。
// 给定一个二叉树的根节点 root ，返回其 最大路径和，即所有路径上节点值之和的最大值。

// 二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 至多出现一次 。
// 该路径 至少包含一个 节点，且不一定经过根节点。

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// 构造下图二叉树：
//      -10
//      / \
//     9   20
//       /  \
//      15   7
//   1
// 2   3
const root = new TreeNode(
  -10,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

var maxPathSum = function (root) {
  var ans = -9999;
  dfs(root);
  return ans;
  //从当前节点往下走
  function dfs(root) {
    //根节点为空直接返回0
    if (!root) return 0;
    //遍历左子树的深度
    let left = dfs(root.left);
    //遍历右子树的深度
    let right = dfs(root.right);
    //更新路径的最大值
    ans = Math.max(ans, root.val + left + right);
    //返回从当前节点往下走的最大值
    return Math.max(0, Math.max(left, right) + root.val);
  }
};

console.log(maxPathSum(root));
