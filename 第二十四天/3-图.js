/**
 * 给定图结构中的一个节点，获取从该节点的依赖节点出发一直走到终点，一共走出的所有链条
 * 注意：图结构中可能存在环，遇到环时，环所在的节点直接作为终点即可
 * @param {Node} node
 * @returns {Array<Set<string>>} 返回所有依赖链，每个链是一个字符串集合，每个字符串是一个节点名称
 */
function getDepChains(node, globalNodeMap) {
  // 存储所有找到的依赖链
  const chains = [];

  // 当前DFS路径（用于检测环）
  const currentPath = [];

  /**
   * 深度优先搜索函数
   * @param {Node} currentNode - 当前处理的节点
   */
  function dfs(currentNode) {
    if (!currentNode) return;
    debugger;
    // 检查是否形成环（当前节点已在路径中）
    if (currentPath.includes(currentNode.name)) {
      chains.push([...currentPath]);
      return;
    }

    // 将当前节点加入路径
    currentPath.unshift(currentNode.name);

    // 如果没有依赖节点，说明到达终点
    if (!currentNode.effects || currentNode.effects.length === 0) {
      chains.push([...currentPath]);
    } else {
      // 递归处理所有依赖节点
      for (const effect of currentNode.effects) {
        dfs(globalNodeMap[effect]);
      }
    }
    // 回溯：移除当前节点
    currentPath.shift();
  }

  // 从给定节点开始DFS
  dfs(node);

  return chains;
}

// 假设我们有这样一个依赖关系图（像 npm 的包依赖结构）：
// A → B → D
// A → C → D
// 即：
// A 依赖 B 和 C
// B 依赖 D
// C 依赖 D
// D 没有依赖

//TODO:没有环
// const globalNodeMap = {
//   A: { name: "A", effects: ["B", "C"] },
//   B: { name: "B", effects: ["D"] },
//   C: { name: "C", effects: [] },
//   D: { name: "D", effects: [] },
//   E: { name: "E", effects: ["A"] }, // E 依赖 A，形成环
// };

//TODO:有环
const globalNodeMap = {
  A: { name: "A", effects: ["B"] },
  B: { name: "B", effects: ["C"] },
  C: { name: "C", effects: ["A"] }, // 这里形成了一个环：A -> B -> C -> A
};
const node = globalNodeMap["A"]; // 假设我们从 A 任务开始

const res = getDepChains(node, globalNodeMap);
console.log(res);
// [
//   ["D", "B", "A"],
//   ["C", "A"],
// ];
