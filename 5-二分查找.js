//向下取整
// Math.floor

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 7;

const result = binarySearch(arr, target);

if (result !== -1) {
  console.log(`目标值 ${target} 找到，索引为：${result}`);
} else {
  console.log(`目标值 ${target} 未找到`);
}
