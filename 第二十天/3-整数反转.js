// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
// 假设环境不允许存储 64 位整数（有符号或无符号）。

// 栈的思想
const x = 123;
var reverse = function (x) {
  if (x < 10 && x > -10) {
    return x;
  }
  let max = Math.pow(2, 31) - 1;
  let min = -Math.pow(2, 31);
  let num = [];
  // 逐位压入栈中
  while (x >= 1 || x <= -1) {
    let place = x % 10;
    num.push(place);
    x = parseInt(x / 10);
  }
  x = 0;
  let digit = 0;
  while (num.length !== 0) {
    // 逐位出栈，并且乘上对应位数的计数单位
    place = num.pop();
    // 采用数学模块的幂函数
    x += place * Math.pow(10, digit);
    // 位数加一
    digit++;
  }

  return x <= max && x >= min ? x : 0;

  // if(x<=max && x>=min) { return x }
  // else{ return 0 }
};

console.log(reverse(x));
