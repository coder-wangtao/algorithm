// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，
// 最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(
  3,
  new TreeNode(
    5,
    new TreeNode(6),
    new TreeNode(2, new TreeNode(7), new TreeNode(4))
  ),
  new TreeNode(1, new TreeNode(0), new TreeNode(8))
);

//      3
//   5     1
// 6  2  0  8
//  7  4

// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，
// 满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

// 1.  root === null || root === p || root === q 的时候，root就是公共祖先
// 2.  root 的 left 和 right 里分别存在p和q ， root就是公共祖先
// 3.  root 的 left不存在pq，说明right 里存在p和q ，公共祖先就在right里
// 4.  root 的 right不存在pq，说明left 里存在p和q ，公共祖先就在left里

var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  if (root.val == null || root.val == p.val || root.val == q.val) {
    return root;
  }
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root; // 第二种情况
  if (left && !right) return left; // 第三种情况
  if (!left && right) return right; // 第四种情况
};

console.log(lowestCommonAncestor(root, new TreeNode(5), new TreeNode(4))); //5

//         3
//      5     1
//   6   2   0  8
//     7  4
// lowestCommonAncestor(3, 5, 4)
// ├── 左子树: lowestCommonAncestor(5, 5, 4)  --> 返回 5
// │   ├── 左子树: lowestCommonAncestor(6, 5, 4)  --> 返回 null
// │   └── 右子树: lowestCommonAncestor(2, 5, 4)  --> 返回 4
// │       ├── 左子树: lowestCommonAncestor(7, 5, 4)  --> 返回 null
// │       └── 右子树: lowestCommonAncestor(4, 5, 4)  --> 返回 4
// ├── 右子树: lowestCommonAncestor(1, 5, 4)  --> 返回 null
// │   ├── 左子树: lowestCommonAncestor(0, 5, 4)  --> 返回 null
// │   └── 右子树: lowestCommonAncestor(8, 5, 4)  --> 返回 null
// └── 根节点处理:
//     left = 5, right = null
//     返回 left --> 5
