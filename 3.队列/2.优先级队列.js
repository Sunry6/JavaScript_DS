// 封装优先级队列
function PriorityQueue() {
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  // 封装属性
  this.items = [];

  // 实现插入方法
  PriorityQueue.prototype.enqueue = function (element, priority) {
    // 1.创建对象
    let queueElement = new QueueElement(element, priority);

    // 2.判断队列是否为空
    if (this.items.length === 0) {
      this.items.push(queueElement);
    } else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }

      if (!added) {
        this.items.push(queueElement);
      }
    }
  };

  // 2.从队列中删除前端元素
  PriorityQueue.prototype.dequeue = function () {
    return this.items.shift();
  };

  // 3.查看前端的元素
  PriorityQueue.prototype.front = function () {
    return this.items[0];
  };

  // 4.查看队列是否为空
  PriorityQueue.prototype.isEmpty = function () {
    return this.items.length === 0;
  };

  // 5.查看队列中元素的个数
  PriorityQueue.prototype.size = function () {
    return this.items.length;
  };

  // 6.toString方法
  PriorityQueue.prototype.toString = function () {
    let resultString = '';
    for (let i = 0; i < this.items.length; i++) {
      resultString += this.items[i].element + '-' + this.items[i].priority + ' ';
    }
    return resultString;
  };
}

let pq = new PriorityQueue();
pq.enqueue('a', 111);
pq.enqueue('b', 123);
pq.enqueue('c', 666);
pq.enqueue('d', 166);
pq.enqueue('e', 11);
console.log(pq);
