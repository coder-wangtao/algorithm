const s = "3+4*4+2";

//运算符包括 “+ - * /” 四种
// “* /” 优先级高于加减
// 没有括号
// 如果为数字 对num赋值 (* 10 是处理多位数字情况)
// 如果 ”+“ 将num入栈
// 如果 ”-“ 将-num入栈
// 如果 ”* /“ 将栈顶元素取出 运算后入栈(相除存在计算结果包含小数情况，| 0 逻辑运算后可去除小数部分)

// "3+4*4+2"
// 3
// 3 压栈
// 4
// 3 4 压栈
// 4
// 3 16 2 压栈

var calculate = function (s) {
  // 去除字符串两端的空格
  s = s.trim();

  // 定义栈，用于保存计算过程中的中间结果
  const stack = [];

  // 预设符号为“+”，表示第一个数默认为加法
  let preSign = "+",
    num = 0, // 用于保存当前解析的数字
    n = s.length; // 字符串的长度

  // 遍历整个字符串
  for (let i = 0; i < n; i++) {
    // 如果当前字符是数字（0-9），则将其加入当前数字 num 中
    if (s[i] >= "0") {
      num = num * 10 + (s[i] - "0"); // 处理多位数
    }

    // 如果当前字符是运算符或是最后一个字符，处理当前的数字
    if (isNaN(Number(s[i])) || i === n - 1) {
      // 根据 preSign（上一个运算符）决定如何处理当前数字
      switch (preSign) {
        case "+":
          // "+" 运算：将当前数字压入栈中
          stack.push(num);
          break;

        case "-":
          // "-" 运算：将当前数字的负数压入栈中
          stack.push(-num);
          break;

        case "*":
          // "*" 运算：弹出栈顶元素，与当前数字相乘后重新压入栈中
          stack.push(stack.pop() * num);
          break;

        default:
          // "/" 运算：弹出栈顶元素，与当前数字相除（取整）后重新压入栈中
          stack.push((stack.pop() / num) | 0);
          break;
      }

      // 更新 preSign 为当前字符（运算符）
      preSign = s[i];

      // 重置 num 为 0，为下一个数字做准备
      num = 0;
    }
  }

  // 返回栈中所有元素的和，栈中的元素是计算后的结果
  return stack.reduce((a, b) => {
    return a + b;
  }, 0);
};
console.log(calculate(s));
