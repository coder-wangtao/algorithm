const s = "3+2*2";

//运算符包括 “+ - * /” 四种
// “* /” 优先级高于加减
// 没有括号
// 如果为数字 对num赋值 (* 10 是处理多位数字情况)
// 如果 ”+“ 将num入栈
// 如果 ”-“ 将-num入栈
// 如果 ”* /“ 将栈顶元素取出 运算后入栈(相除存在计算结果包含小数情况，| 0 逻辑运算后可去除小数部分)

var calculate = function (s) {
  s = s.trim();
  const stack = [];
  let preSign = "+",
    num = 0,
    n = s.length;
  for (let i = 0; i < n; i++) {
    if (s[i] >= "0") num = num * 10 + (s[i] - "0");
    if (isNaN(Number(s[i])) || i === n - 1) {
      switch (preSign) {
        case "+":
          stack.push(num);
          break;

        case "-":
          stack.push(-num);
          break;

        case "*":
          stack.push(stack.pop() * num);
          break;

        default:
          stack.push((stack.pop() / num) | 0);
          break;
      }
      preSign = s[i];
      num = 0;
    }
  }
  return stack.reduce((a, b) => {
    return a + b;
  }, 0);
};

console.log(calculate(s));
