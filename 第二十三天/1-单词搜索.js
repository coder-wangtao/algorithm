// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；
// 否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word = "ABCCED";

var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == word[0]) {
        if (findWord(i, j, 0)) return true;
      }
    }
  }
  return false;
  function findWord(row, col, n) {
    // 路径查找
    if (row < 0 || col < 0 || row >= board.length || col >= board[row].length)
      return false; // 越界
    let flag = false;
    if (board[row][col] == word[n]) {
      if (n == word.length - 1) return true;
      let tmp = board[row][col];
      board[row][col] = "0"; // 防止走回头路
      //上下左右走一下
      flag = flag || findWord(row + 1, col, n + 1);
      flag = flag || findWord(row - 1, col, n + 1);
      flag = flag || findWord(row, col + 1, n + 1);
      flag = flag || findWord(row, col - 1, n + 1);
      board[row][col] = tmp; // 回溯，供第二次查找
    }
    return flag;
  }
};

exist(board, word);
