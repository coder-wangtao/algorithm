// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

// 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

// 通过观察可以发现，旋转后的矩阵最后一列为原矩阵第一行，倒数第二列为原矩阵第二行...
// 故，遍历外层数组，将该行的每一项依次出栈，并倒序压入每一列的队首，即可获得结果

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// [
//   [1,]
//   [2,4,5,6]
//   [3,7,8,9],
// ]

//[
//   [7,4,1,]
//   [8,5,2,]
//   [9,6,3,7,8,9],
// ]

// const matrix = [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3],
// ];

var rotate = function (matrix) {
  const len = matrix.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let curr = matrix[i].pop();
      matrix[len - j - 1].unshift(curr);
    }
  }
};

console.log(rotate(matrix));
