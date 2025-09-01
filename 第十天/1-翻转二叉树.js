// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

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
