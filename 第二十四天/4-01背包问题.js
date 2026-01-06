// 有n件物品和一个最多能背重量为w 的背包。第i件物品的重量是weight[i]，得到的价值是value[i] 。
// 每件物品只能用一次，求解将哪些物品装入背包里物品价值总和最大。
//  value  5, 10, 3, 6, 3             bagWeight 6
// weight  2, 5,  1, 4, 3

//      0  1  2  3  4  5  6  总的限重
// 0-0  0  0  5  5  5  5  5
// 0-1  0  0  5  5  5  10 10
// 0-2  0  3  5  8  8  10 13
// 0-3  0
// 0-4  0
//物品的下标
function package(bagWeight, value, weight) {
  let result = [];
  for (let j = 0; j <= bagWeight; j++) {
    result[j] = j >= weight[0] ? value[0] : 0;
  }
  for (let i = 1; i < value.length; i++) {
    const next = [];
    for (j = 0; j <= bagWeight; j++) {
      if (j >= weight[i]) {
        next[j] = Math.max(value[i] + result[j - weight[i]], result[j]);
      } else {
        next[j] = result[j];
      }
    }
    result = next;
  }
  return result[bagWeight];
}

const result = package(6, [5, 10, 3, 6, 3], [2, 5, 1, 4, 3]);
console.log(result);
