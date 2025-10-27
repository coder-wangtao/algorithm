// 给定一个会议时间安排的数组，每个会议时间都会包括开始和结束的时间 [[s1,e1],[s2,e2],…] (si < ei)，
// 为避免会议冲突，同时要考虑充分利用会议室资源，请你计算至少需要多少间会议室，才能满足这些会议安排。

// 示例 1:
// 输入: [[0, 30],[5, 10],[15, 20]]
// 输出: 2

// 示例 2:
// 输入: [[7,10],[2,4]]
// 输出: 1

//[[0, 30],[5, 10],[15, 20]]
//[0,5,15]
//[10,20,30]
var minMeetingRooms = function (intervals) {
  if (!intervals.length) return 0;

  let starts = intervals.map((i) => i[0]).sort((a, b) => a - b);
  let ends = intervals.map((i) => i[1]).sort((a, b) => a - b);
  let s_ptr = 0,
    e_ptr = 0;
  let rooms = 0,
    maxRooms = 0;

  while (s_ptr < intervals.length) {
    //当有会议开始早于某个会议结束 → 说明要新开会议室。
    //当有会议结束 → 可以释放一个会议室。
    // 用 maxRooms 记录整个过程中所需的最大会议室数量。
    if (starts[s_ptr] < ends[e_ptr]) {
      rooms++;
      s_ptr++;
    } else {
      rooms--;
      e_ptr++;
    }
    maxRooms = Math.max(maxRooms, rooms);
  }

  return maxRooms;
};

// 测试
console.log(
  minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
); // 输出: 2
console.log(
  minMeetingRooms([
    [7, 10],
    [2, 4],
  ])
); // 输出: 1
