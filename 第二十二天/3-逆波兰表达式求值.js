// 给你一个字符串数组 tokens ，表示一个根据 逆波兰表示法 表示的算术表达式。

// 请你计算该表达式。返回一个表示表达式值的整数。

// 注意：

// 有效的算符为 '+'、'-'、'*' 和 '/' 。
// 每个操作数（运算对象）都可以是一个整数或者另一个表达式。
// 两个整数之间的除法总是 向零截断 。
// 表达式中不含除零运算。
// 输入是一个根据逆波兰表示法表示的算术表达式。
// 答案及所有中间计算结果可以用 32 位 整数表示。
const tokens = ["4", "13", "5", "/", "+"];

var evalRPN = function (tokens) {
  let stack = [];
  let num; //由于减法和除法的存在顺序问题
  for (let char of tokens) {
    switch (char) {
      case "+":
        stack.push(stack.pop() + stack.pop());
        break;
      case "-":
        num = stack.pop();
        stack.push(stack.pop() - num);
        break;
      case "*":
        stack.push(stack.pop() * stack.pop());
        break;
      case "/":
        num = stack.pop();
        stack.push(parseInt(stack.pop() / num, 10));
        break;
      default:
        stack.push(parseInt(char, 10));
    }
  }
  return stack.pop();
};

console.log(evalRPN(tokens));
