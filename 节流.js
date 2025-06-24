// 节流的核心思想是“限制频率”，即强制规定事件触发的频率，不管事件发生了多少次，
// 都按固定的时间间隔来执行事件处理函数。

function throttle(fn, interval) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

// 使用示例：
const onScroll = throttle(function () {
  console.log("Scrolling...");
}, 1000);

// 模拟滚动事件
window.addEventListener("scroll", onScroll);
