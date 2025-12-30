// 给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

//    3
//  9  20
//15 7
//结果：[[3],[20,9],[15,7]]
var zigzagLevelOrder = function (root) {
  if (root == null) {
    return [];
  } else {
    let res = [];
    function dfs(root, depth) {
      if (!root) return;
      if (res[depth] === undefined) {
        res[depth] = [];
      }
      if (depth & 1) {
        //depth & 1 = 1为基数，depth & 1 = 0为偶数
        res[depth].unshift(root.val);
      } else {
        res[depth].push(root.val);
      }
      dfs(root.left, depth + 1);
      dfs(root.right, depth + 1);
    }
    dfs(root, 0);
    return res;
  }
};

console.log(zigzagLevelOrder(root));

// 001
// 001 ==> 1   奇数是1

// 010
// 001 ==> 0   偶数是0

// 011
// 001 ==> 1   奇数是1

// 100
// 001 ==> 0   偶数是0
