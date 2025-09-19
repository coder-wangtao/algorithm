// 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，
// 表示如果要学习课程 ai 则 必须 先学习课程  bi 。

// 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
// 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

var canFinish = function (numCourses, prerequisites) {
  let indegree = new Array(numCourses).fill(0); // 顶点的入度
  let dirctMap = []; //邻接表(在dfs遍历的时候用得到)
  let result = 0; //正规的拓扑排序应该得到一个数组，内容是顺序表，为了节省内存用数量替代
  let ifFind = new Array(numCourses).fill(0); //用来记录找到了哪些节点
  for (let i = 0; i < numCourses; i++) {
    //初始化邻接表
    dirctMap.push([]);
  }
  for (let i = 0, l = prerequisites.length; i < l; i++) {
    //初始化邻接表
    let item = prerequisites[i];
    indegree[item[0]]++; //记录该节点的入度
    dirctMap[item[1]].push(item[0]); //在邻接表里记录该节点
  }
  for (let i = 0; i < numCourses; i++) {
    //循环遍历所有节点
    dfs(dirctMap, i, 0);
  }
  /*
   *dirctMap : 要遍历的邻接表
   *index : 当前节点
   *status : 是否第一层
   */
  function dfs(dirctMap, index, status) {
    if (status && ifFind[index] === 1) {
      //如果不是第一层并且该节点已经被找到过了，那么说明遇到了环路，则提前结束，返回结果
      return false;
    }
    if (ifFind[index] === 0 && indegree[index] === 0) {
      //判断入度为0并且违背找到过的节点可以进入
      result++; //找到一个节点，总数量+1
      ifFind[index] = 1; //标记该节点被找到
      dirctMap[index].forEach((i) => {
        //广度遍历该节点的兄弟节点
        indegree[i]--; //由于原来的节点被‘移除了’所以兄弟节点的入度要减一
        dfs(dirctMap, i, 1);
      });
    }
  }
  return result === numCourses; //如果最后找到的节点数量小于总数的话就说明有环路
  //(因为有环路的话在剥离过程中入度始终不会为0，一直不满足条件，所以不会被找到)
};
