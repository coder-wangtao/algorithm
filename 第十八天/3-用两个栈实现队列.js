var CQueue = function () {
  this.stack = [];
  this.help = [];
};

/**
 * @param {number} value
 * @return {void}
 */

CQueue.prototype.appendTail = function (value) {
  this.stack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.stack.length === 0) {
    if (this.help.length === 0) {
      return -1;
    }

    return this.help.pop();
  }

  if (this.help.length) {
    return this.help.pop();
  }

  while (this.stack.length) {
    const item = this.stack.pop();
    this.help.push(item);
  }
  return this.help.pop();
};

// 创建队列实例
const queue = new CQueue();

// 测试 appendTail
queue.appendTail(1);
queue.appendTail(2);
queue.appendTail(3);
console.log("队列添加完毕: [1, 2, 3]");

// 测试 deleteHead
console.log(queue.deleteHead()); // 输出: 1
console.log(queue.deleteHead()); // 输出: 2

// 再添加元素
queue.appendTail(4);
queue.appendTail(5);
console.log("再添加元素: [4, 5]");

// 继续删除
console.log(queue.deleteHead()); // 输出: 3
console.log(queue.deleteHead()); // 输出: 4
console.log(queue.deleteHead()); // 输出: 5
console.log(queue.deleteHead()); // 输出: -1 （队列为空）
