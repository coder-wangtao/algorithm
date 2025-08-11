//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
const s1 = "()[]{}";
const s2 = "(]";

var isValid = function (s) {
  let res = [];
  for (let i = 0; i < s.length; i++) {
    let flag = s[i];
    switch (flag) {
      case "(":
        res.push(flag);
        break;
      case "[":
        res.push(flag);
        break;
      case "{":
        res.push(flag);
        break;
      case ")":
        if (res.pop() !== "(") {
          return false;
        }
        break;
      case "]":
        if (res.pop() !== "[") {
          return false;
        }
        break;
      case "}":
        if (res.pop() !== "{") {
          return false;
        }
        break;
    }
  }
  return !res.length;
};

console.log(isValid(s1));
console.log(isValid(s2));
