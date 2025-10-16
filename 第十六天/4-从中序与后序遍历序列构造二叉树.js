// 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历，
//  postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.right = right === undefined ? null : right;
}

const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];
//     3
//  9    20
//     15   7
var buildTree = function (inorder, postorder) {
  if (!postorder.length) return null;
  const top = postorder.pop();
  const root = new TreeNode(top);
  const topIndex = inorder.indexOf(top);
  root.left = buildTree(
    inorder.slice(0, topIndex),
    postorder.slice(0, topIndex)
  );
  root.right = buildTree(
    inorder.slice(topIndex + 1),
    postorder.slice(topIndex)
  );
  return root;
};

console.log(buildTree(inorder, postorder));
