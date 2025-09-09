// 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。
function Node(val, children) {
  this.val = val;
  this.children = children;
}

const root = new Node(1, [
  new Node(3, [new Node(5), new Node(6)]),
  new Node(2),
  new Node(4),
]);

var levelOrder = function (root) {
  const result = [];
  const queue = [];

  if (!root) {
    return result;
  }
  queue.push(root);
  while (queue.length !== 0) {
    // 新一轮层级节点
    const length = queue.length;
    result.push([]);

    // 遍历层级节点
    for (let i = 0; i < length; i++) {
      const tempNode = queue.shift();
      result[result.length - 1].push(tempNode.val);

      // 子节点入队
      if (tempNode.children) {
        queue.push(...tempNode.children);
      }
    }
  }

  return result;
};

console.log(levelOrder(root));
