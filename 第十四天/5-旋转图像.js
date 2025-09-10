// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

// 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

var rotate = function (matrix) {
  let length = matrix.length;
  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  return matrix.map((item) => item.reverse());
};
