// 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

// 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

// 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
//利用 x ** 0.5
const x = 6; // 1 2 3 4 5 6
var mySqrt = function (x) {
  // 整数x的平方根一定是在1到x的范围内
  let left = 1,
    right = x;
  while (left <= right) {
    // 中间值  下面这样写是防止溢出
    let mid = left + ((right - left) >> 1);

    // 判断mid的平方是否小于或等于x，如果mid的平方小于x
    // 判断 mid² 与 x 的关系
    if (mid <= x / mid) {
      debugger;
      // 判断(mid+1)的平方是否大于x，如果(mid+1)的平方大于x，那么mid就是x的平方根
      // 如果 (mid+1)² > x
      if (mid + 1 > x / (mid + 1)) {
        return mid;
      }
      // 如果mid的平方小于x并且(mid+1)的平方小于x，那么x的平方根比mid大，接下来搜索从mid+1到x的范围
      left = mid + 1;
    } else {
      // 如果mid的平方大于x，则x的平方根小于mid，接下来搜索1到mid-1的范围
      right = mid - 1;
    }
  }
  // 如果输入参数是0，left等于1而right等于0，就直接返回0
  return 0;
};

console.log(mySqrt(x));
