//递归是怎么把一个岛屿淹掉的?
const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

const numIslands = (grid) => {
  let count = 0; //用 count 来记录岛屿的数量，初始为 0。
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        turnZero(i, j, grid);
      }
    }
  }
  return count;
};
function turnZero(i, j, grid) {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
    grid[i][j] === "0"
  )
    return;
  grid[i][j] = "0";
  turnZero(i, j + 1, grid);
  turnZero(i, j - 1, grid);
  turnZero(i + 1, j, grid);
  turnZero(i - 1, j, grid);
}

console.log(numIslands(grid));
