//以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

const intervals = [
  [1, 6],
  [2, 6],
  [8, 10],
  [15, 18],
];

var merge = function (intervals) {
  // sort方法里面的比较函数 详情可以看看MDN a[0]-b[0]类似 a-b 升序 这并不奇怪
  intervals.sort((a, b) => a[0] - b[0]);
  // 注意这里对同一个数组进行了读写操作
  // 存在i+1操作 所以intervals.length-1
  for (let i = 0; i < intervals.length - 1; i++) {
    let start = intervals[i][1];
    let end = intervals[i + 1][0];
    
    if (start >= end) {
      // 根据规律 说明这个区间可以合并
      const data = [...intervals[i], ...intervals[i + 1]];
      const item = [Math.min(...data), Math.max(...data)];
      intervals.splice(i, 2, item);
      i--; // 回退操作 看看新调整的区间可以跟后面的合并不
    }
  }
  return intervals;
};

console.log(merge(intervals));
