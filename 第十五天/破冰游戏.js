// 社团共有 num 位成员参与破冰游戏，编号为 0 ~ num-1。成员们按照编号顺序围绕圆桌而坐。社长抽取一个数字 target，
// 从 0 号成员起开始计数，排在第 target 位的成员离开圆桌，且成员离开后从下一个成员开始计数。请返回游戏结束时最后一位成员的编号。

//0 1 2 3 4 5 6    ==> 4
// 3 0  12456 1246 126 12 1

//
const num = 7;
const target = 4;
var iceBreakingGame = function (num, target) {
  let now = 0;
  for (let i = 2; i <= num; i++) {
    now = (now + target) % i;
  }
  return now;
};
