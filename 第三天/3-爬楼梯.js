// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// f(n) = f(n-1) + f(n-2)

var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
};

console.log(climbStairs(3));
