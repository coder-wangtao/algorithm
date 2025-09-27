// 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。

// 输入: 2736
// 输出: 7236
// 解释: 交换数字2和数字7。
const num = 2736;
var maximumSwap = function (num) {
  let arr = (num + "").split("").map((e) => e * 1);
  for (let i = 0; i < arr.length; i++) {
    let max = Math.max(...arr.slice(i + 1));
    if (arr[i] < max) {
      let temp = arr[i];
      arr[i] = max;
      arr[arr.lastIndexOf(max)] = temp;
      break;
    }
  }
  return arr.join("") * 1;
};

console.log(maximumSwap(num));
