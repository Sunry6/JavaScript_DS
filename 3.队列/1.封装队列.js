function Queue() {
  // 属性
  this.items = [];

  // 方法
  // 1.将元素加入到队列中
  Queue.prototype.enqueue = function (element) {
    this.items.push(element);
  };

  // 2.从队列中删除前端元素
  Queue.prototype.dequeue = function () {
    return this.items.shift();
  };

  // 3.查看前端的元素
  Queue.prototype.front = function () {
    return this.items[0];
  };

  // 4.查看队列是否为空
  Queue.prototype.isEmpty = function () {
    return this.items.length === 0;
  };

  // 5.查看队列中元素的个数
  Queue.prototype.size = function () {
    return this.items.length;
  };

  // 6.toString方法
  Queue.prototype.toString = function () {
    let resultString = '';
    for (let i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + ' ';
    }
    return resultString;
  };
}

// 使用队列
var queue = new Queue();
queue.enqueue('nba');
queue.enqueue('cba');
// console.log(queue);

queue.dequeue();
// console.log(queue);
// console.log(queue.front());
// console.log(queue.isEmpty());
// console.log(queue.size());
// console.log(queue.toString());

// 面试题：击鼓传花
function passGame(nameList, num) {
  // 1.创建一个队列结构
  let queue = new Queue();
  // 2.让所有人依次加入到队列中
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }
  // 3.开始数数字
  while (queue.size() > 1) {
    // 不是num的时候，重新加入到队列的末尾
    // 是num的时候，将其从队列中删掉
    // 3.1.num数字之前的人重新加入到队列的末尾
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue());
    }
    // 3.2.num对应的这个人，从队列中删除
    queue.dequeue();
  }

  // 4.获取剩下的那个人
  console.log(queue.size());
  let endName = queue.front();
  console.log(endName);

  return nameList.indexOf(endName);
}

// 测试击鼓传花
nameList = ['a', 'b', 'c', 'd', 'e'];
console.log(passGame(nameList, 3));
