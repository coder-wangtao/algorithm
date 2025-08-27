// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

// 在画图分析后，判断出路线都是有固定方向的 先→再↓再←再↑再→.....一直循环到没数字
// 因此定义4个方向边界 当触及边界时即按固定方向转向 且其对应的边界值向内收缩1
// 若没触及边界 即按自身方向继续行走 改变坐标值直到触边界/数字全部遍历过

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) return [];
  const res = [];

  let top = 0, //当前最上边的行索引，初始为 0。
    bottom = matrix.length - 1; //：当前最下边的行索引，初始为最后一行 matrix.length - 1。
  let left = 0, //当前最左边的列索引，初始为 0。
    right = matrix[0].length - 1; //当前最右边的列索引，初始为最后一列 matrix[0].length - 1。

  while (top <= bottom && left <= right) {
    // 进入一个循环，只要上下边界和左右边界没有交错（即还有元素未遍历），就继续执行。
    // 从左到右
    for (let j = left; j <= right; j++) res.push(matrix[top][j]);
    top++;

    // 从上到下
    for (let i = top; i <= bottom; i++) res.push(matrix[i][right]);
    right--;

    // 从右到左
    if (top <= bottom) {
      //需要 if (top <= bottom) 来检查，防止上  下边界重合或交错时重复遍历。
      for (let j = right; j >= left; j--) res.push(matrix[bottom][j]);
      bottom--;
    }

    // 从下到上
    if (left <= right) {
      // if (left <= right) 检查，防止左右边界重合或交错时重复遍历。
      for (let i = bottom; i >= top; i--) res.push(matrix[i][left]);
      left++;
    }
  }
  return res;
};
console.log(spiralOrder(matrix));
