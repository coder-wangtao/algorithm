// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

//  1
//2  3
//  1
//3  2
const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));

var invertTree = function (root) {
  if (root === null) {
    return null;
  }
  invertTree(root.left);
  invertTree(root.right);
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  return root;
};

console.log(invertTree(root));
