//...args 语法会把所有的传入参数收集到一个名为 args 的数组中

function curry(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  }
  return (...rest) => {
    return curry(fn, ...args, ...rest);
  };
}

const add = (x, y, z) => x + y + z;
const curryAdd = curry(add);
console.log(curryAdd(1, 2, 3));
console.log(curryAdd(1)(2)(3));
