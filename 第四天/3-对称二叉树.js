//给你一个二叉树的根节点 root ， 检查它是否轴对称。

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const t1 = new TreeNode(1);
const t2 = new TreeNode(2);
const t3 = new TreeNode(2);
const t4 = new TreeNode(4);
t1.left = t2;
t1.right = t3;

var isSymmetric = function (root) {
  return isMirror(root, root);
};

function isMirror(t1, t2) {
  if (!t1 && !t2) return true;
  if (!t1 || !t2) return false;
  if (t1.val !== t2.val) return false;
  return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
}

console.log(isSymmetric(t1));

//   1     1
// 2  3  2  3

//   1     1
// 2     2

//   1     1
// 2  2  2  2
