// 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。

// 输入: 2736
// 输出: 7236
// 解释: 交换数字2和数字7。
// num = 2736 / num = 9973
const num = 2736;
var maximumSwap = function (num) {
  // 将数字转换为字符数组，然后转换成数字数组
  let arr = (num + "").split("").map((e) => e * 1);
  for (let i = 0; i < arr.length; i++) {
    // 找到当前位置 i 后面子数组中的最大值
    let max = Math.max(...arr.slice(i + 1));
    // 如果当前位置的数字小于后面的最大值，则执行交换
    if (arr[i] < max) {
      // 交换当前数字与最大值
      let temp = arr[i]; // 临时存储当前位置的值
      arr[i] = max; // 当前数字变成最大值
      arr[arr.lastIndexOf(max)] = temp; // 最大值的最后一个位置变成原来数字
      break; // 只需要交换一次，找到第一次符合条件的交换即可
    }
  }
  // 将数组转换回数字并返回
  return arr.join("") * 1;
};

console.log(maximumSwap(num));
