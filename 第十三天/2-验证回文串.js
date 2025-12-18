//如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。

const s = "A man, a plan, a canal: Panama";

var isPalindrome = function (s) {
  let str = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome(s));
