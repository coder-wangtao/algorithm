// 防抖的核心思想是“延迟触发”，即某个事件触发后，只有在事件停止触发一段时间后，
// 才会执行真正的操作。如果在这个延迟时间内再次触发事件，计时器会重置。
// Debounce = Delay: 延迟触发，只有停止一定时间后才执行。

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// 使用示例：
const search = debounce(function () {
  console.log("Searching...");
}, 500);

// 模拟用户输入
document.getElementById("search-input").addEventListener("input", search);
