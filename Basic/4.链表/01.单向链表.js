// 封装链表
function LinkedList() {
  // 封装Node类，保存每个节点的信息
  function Node(element) {
    this.element = element;
    this.next = null;
  }

  // 属性
  this.length = 0;
  this.head = null;

  // 方法
  // 链表尾部追加元素
  // 链表尾部追加元素方法
  LinkedList.prototype.append = function (element) {
    // 1.根据新元素创建节点
    var newNode = new Node(element);

    // 2.判断原来链表是否为空
    if (this.head === null) {
      // 链表尾空
      this.head = newNode;
    } else {
      // 链表不为空
      // 2.1.定义变量, 保存当前找到的节点
      var current = this.head;
      while (current.next) {
        current = current.next;
      }

      // 2.2.找到最后一项, 将其next赋值为node
      current.next = newNode;
    }

    // 3.链表长度增加1
    this.length++;
  };

  // toString
  LinkedList.prototype.toString = function () {
    // 1.定义两个变量
    let current = this.head;
    let resultString = '';

    // 2.循环获取链表中所有元素
    while (current) {
      resultString += current.element + ' ';
      current = current.next;
    }

    // 3.返回最终结果
    return resultString.slice(1);
  };

  // 根据下标插入数据
  LinkedList.prototype.insert = function (position, element) {
    // 1.检测越界问题
    if (position < 0 || position > this.length) {
      return false;
    }

    // 2.找到正确的位置,并且插入数据
    let newNode = new Node(element);
    let current = this.head;
    let previous = null;
    index = 0;

    // 3.判断列表是否在第一个位置插入
    if (position === 0) {
      newNode.next = current;
      this.head = newNode;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }

      newNode = current;
      previous.next = newNode;
    }

    this.length++;

    return true;
  };

  // 根据位置移除节点
  LinkedList.prototype.removeAt = function (position) {
    // 1.检测越界问题
    if (position < 0 || position > this.length) {
      return false;
    }

    // 2.定义变量,保存信息
    let current = this.head;
    let previous = null;
    let index = 0;

    // 3.判断是否移除第一项
    if (position === 0) {
      this.head = current.next;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.length++;

    return current.element;
  };

  // 根据元素获取链表中的位置
  LinkedList.prototype.indexOf = function (element) {
    // 1.定义变量,保存信息
    let current = this.head;
    let index = 0;

    // 2.找到元素的位置
    while (current) {
      if (current.element === element) {
        return index;
      }
      index++;
      current = current.next;
    }

    // 3.未找到返回-1
    return -1;
  };

  // 根据元素删除信息
  LinkedList.prototype.remove = function (element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  };

  // 判断链表是否为空
  LinkedList.prototype.isEmpty = function () {
    return this.length === 0;
  };

  // 获取链表的长度
  LinkedList.prototype.size = function () {
    return this.length;
  };

  // 获取第一个节点
  LinkedList.prototype.getFirst = function () {
    return this.head.element;
  };
}

let list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
console.log(list);
console.log(list.toString());
list.insert(3, 100);
console.log(list);
console.log(list.toString());
list.removeAt(2);
console.log(list);
console.log(list.toString());
console.log(list.indexOf(20));
list.append(30);
console.log(list.remove(20));
console.log(list);
console.log(list.isEmpty());
console.log(list.size());
console.log(list.getFirst());
