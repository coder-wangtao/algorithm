// 给定一个经过编码的字符串，返回它解码后的字符串。
// 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
// 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
// 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
// 测试用例保证输出的长度不会超过 105。

//外层的解码需要等待内层解码的结果。先扫描的字符还用不上，但不能忘了它们。
// 我们准备由内到外，层层解决[ ]，需要保持对字符的记忆，于是用栈。

// 入栈时机：遇到[。意味着要解决内部的人了，外部的数字和字母，去栈里等。

const s = "3[a2[c]]";

// 6
// 2  c
// 3  a
const decodeString = (s) => {
  let numStack = []; // 存倍数的栈
  let strStack = []; // 存 待拼接的str 的栈
  let num = 0; // 倍数的“搬运工”
  let result = ""; // 字符串的“搬运工”
  for (const char of s) {
    // 逐字符扫描
    if (!isNaN(char)) {
      // 遇到数字
      num = num * 10 + Number(char); // 算出倍数
    } else if (char == "[") {
      // 遇到 [
      strStack.push(result); // result串入栈
      result = ""; // 入栈后清零
      numStack.push(num); // 倍数num进入栈等待
      num = 0; // 入栈后清零
    } else if (char == "]") {
      // 遇到 ]，两个栈的栈顶出栈
      let repeatTimes = numStack.pop(); // 获取拷贝次数
      result = strStack.pop() + result.repeat(repeatTimes); // 构建子串
    } else {
      result += char; // 遇到字母，追加给result串
    }
  }
  return result;
};

console.log(decodeString(s));
