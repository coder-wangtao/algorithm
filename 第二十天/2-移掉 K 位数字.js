// 给你一个以字符串表示的非负整数 num 和一个整数 k ，移除这个数中的 k 位数字，使得剩下的数字最小。请你以字符串形式返回这个最小的数字。

// 主要思路是 从左侧开始找，删除比右侧邻居大的数（题目已给出大前提 num的length > k）
// 两个特别的注意点 :

// 数据删除后是从左到右递增的， 比如 num=123546 k=2 ,按照基本思路删除剩 12346 顺序的 这时候应该从尾部继续删
// 数据已经删除完，但剩余的头部是0，则从头部开始删除0相关,直到第一个非0出现

const num = "1432219",
  k = 3;

var removeKdigits = function (num, k) {
  let stack = [];
  for (let i = 0, len = num.length; i < len; i++) {
    let temp = num[i];
    //当遍历的元素比此时栈顶元素小，删除栈顶元素
    while (k > 0 && stack.length > 0 && temp < stack[stack.length - 1]) {
      stack.pop();
      k--;
    }
    stack.push(temp);
  }
  // 如果未删除，从尾部继续
  while (k > 0) {
    stack.pop();
    k--;
  }
  // 去除无效的0
  while (stack.length > 0 && stack[0] === "0") {
    stack.shift();
  }

  return stack.length ? stack.join("") : "0";
};
console.log(removeKdigits(num, k));
