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

var isSubtree = function (root, subRoot) {
  //此题也类似判断两个二叉树是否相等
  //1. 确定递归函数参数
  const compare = function (left, right) {
    if (left === null && right === null) {
      return true;
    } else if (
      (left !== null && right === null) ||
      (left === null && right !== null) ||
      left.val !== right.val
    ) {
      return false;
    }
    let leftSide = compare(left.left, right.left);
    let rightSide = compare(left.right, right.right);
    let isSame = leftSide && rightSide;
    return isSame;
  };
  
  if (root === null) {
    return false;
  }
  if (compare(root, subRoot)) {
    return true;
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

console.log(isSubtree(root, subRoot));
