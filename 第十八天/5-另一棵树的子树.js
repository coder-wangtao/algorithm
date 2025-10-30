// 给你两棵二叉树 root 和 subRoot 。检验 root 中是否包含和 subRoot 具有相同结构和节点值的子树。
// 如果存在，返回 true ；否则，返回 false 。

// 二叉树 tree 的一棵子树包括 tree 的某个节点和这个节点的所有后代节点。tree 也可以看做它自身的一棵子树。
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
// 构造下图二叉树：
//       3
//      / \
//     4   5
//   /  \
//  1   2
const root = new TreeNode(
  3,
  new TreeNode(4, new TreeNode(1), new TreeNode(2)),
  new TreeNode(5)
);

// 构造下图二叉树：
//       4
//      / \
//     1   2

const subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2));

var isSubtree = function (s, t) {
  if (s === null) return false;
  if (t === null) return true;
  return same(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

var same = function (a, b) {
  if (a == null && b === null) return true;
  if (a === null || b === null) return false;
  if (a.val === b.val) {
    return same(a.left, b.left) && same(a.right, b.right);
  }
  return false;
};

console.log(isSubtree(root, subRoot));
