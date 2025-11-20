//给定一个包含非负整数的数组 nums ，返回其中可以组成三角形三条边的三元组个数。

// 输入: nums = [2,2,3,4]
// 输出: 3
// 解释:有效的组合是: 
// 2,3,4 (使用第一个 2)
// 2,3,4 (使用第二个 2)
// 2,2,3
 

// 解题思路
// a,b,c依次增大，若要能构成三角形，则必须a+b>c
// 对数组进行升序排序
// 先固定最右边的数为nums[k]，定义两个指针[left, right] = [0, k - 1]
// 若nums[left] + nums[right] > nums[k]，那么就不用判断left右边的数了，因为数组递增，(left,right)之间的所有数肯定都满足，一共有(right-left)个可能，累加到res，right左移
// 若不满足，则left右移
// 一直到left=right，k--，再次循环
// 有小伙伴可能会问，right--之后，新的right和当前left左边的数组合起来没有遍历到啊？
// 因为right没左移之前，和当前left左边的数全都判断过了，都不满足，那么right--之后，更不满足了，不用判断了。

const triangleNumber = (nums) => {
  // 数组长度
  const len = nums.length;
  // 升序排序
  nums.sort((a, b) => a - b);
  let res = 0;
  // k是最大的边，从最右边开始
  for (let k = len - 1; k >= 2; k--) {
    // 定义[0,k)内两个指针
    let [left, right] = [0, k - 1];
    while (left < right) {
      if (nums[left] + nums[right] > nums[k]) {
        // 如果当前满足三角形的条件
        // 那么right不动，left右边的各个数+right+k代表的数肯定一定满足
        // 一共有(right-left)个可能，累加到res
        res += right - left;
        // 剩下的都不用判断了，right左移
        right--;
      } else {
        // 当前left不满足条件，太小了，让其大一点
        // left右移
        left++;
      }
    }
  }
  return res;
};
