//二叉搜索树
// 左子树节点的值都小于根节点的值
// 右子树节点的值都大于根节点的值

// 平衡二叉搜索树是一种特别的二叉搜索树，其中的每个节点的左右子树的高度差（也叫平衡因子）必须满足一定的条件，
// 通常是：平衡因子 = 左子树高度 - 右子树高度的绝对值 ≤ 1

var sortedArrayToBST = function (nums) {
  // 因为涉及到递归，所以必然会有数组为空的情况
  if (!nums.length) {
    return null;
  }

  // 找到序列中点：
  const headIndex = Math.floor(nums.length / 2);

  // 实例化节点头部
  const head = new TreeNode(nums[headIndex]);
  let left = headIndex - 1;
  let right = headIndex + 1;
  // 因为是有序升序列表，则当前头部索引的左侧应该都在树的左子树，同理右子树
  if (left >= 0) {
    // 左侧有节点，对左侧节点递归，形成左子树
    head.left = sortedArrayToBST(nums.slice(0, headIndex));
  }
  if (right < nums.length) {
    // 右侧有节点，对右侧节点递归，形成右子树
    head.right = sortedArrayToBST(nums.slice(right));
  }
  // 返回节点
  return head;
};
