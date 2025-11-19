// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

//雨水 = sum(leftMax) + sum(rightMax) - 柱子 - 整个长方形
//https://leetcode.cn/problems/trapping-rain-water/solutions/2705550/python3liu-xing-dai-ma-tu-xing-yin-ying-wfduo/

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

var trap = function (height) {
  let l_max = 0, // 当前位置及其左边所有柱子的最高高度
    r_max = 0, // 当前位置及其右边所有柱子的最高高度
    ans = 0; // 累积的雨水量
  // 遍历整个高度数组
  for (let i = 0; i < height.length; i++) {
    // 更新 l_max 为从左侧到当前位置的最大高度
    l_max = Math.max(l_max, height[i]);
    // 更新 r_max 为从右侧到当前位置的最大高度
    r_max = Math.max(r_max, height[height.length - i - 1]);
    // 累加当前位置能够接到的雨水量：计算当前列可以接的水量
    // 这个水量是两侧最大值减去当前位置的高度
    ans += l_max + r_max - height[i];
  }
  // 返回最终答案：ans 减去左侧最大值乘以数组长度（即去除溢出的部分）
  // 之所以减去 l_max * len(height)，是因为 ans 累加的过程中，
  // 每个柱子都被计算了 l_max 和 r_max 两次（一次从左，一次从右），
  // 因此需要去掉多计算的部分。
  return ans - l_max * height.length;
};

console.log(trap(height));
