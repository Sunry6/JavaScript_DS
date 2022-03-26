function DoubleLinkedList() {
  // 创造结点构造函数
  function Node(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }

  // 定义属性
  this.length = 0;
  this.head = null;
  this.tail = null;

  // 定义相关操作方法
  // 在尾部追加数据
  DoubleLinkedList.prototype.append = function (element) {
    // 1.根据元素创建节点
    let newNode = new Node(element);

    // 2.判断链表是否为空链表
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
  };

  // 在任意位置插入数据
  DoubleLinkedList.prototype.insert = function (position, element) {
    // 1.判断越界的问题
    if (position < 0 || position > this.length) {
      return false;
    }

    // 2.创建新的节点
    let newNode = new Node(element);

    // 3.判断插入的位置
    if (position === 0) {
      // 在第一个位置插入数据
      // 判断链表是否为空
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
    } else if (position === this.length) {
      // 插入到最后的情况
      // 思考:这种情况是否需要判断链表为空的情况呢?答案是不需要,因为插入的位置已经等于长度,链表一定有数据
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      // 在中间位置插入数据
      // 定义属性
      let index = 0;
      let current = this.head;
      let previous = null;

      // 查找正确的位置
      while (index++ < position) {
        previous = current;
        current = current.next;
      }

      // 交换节点的指向顺序
      newNode.next = current;
      newNode.prev = previous;
      current.prev = newNode;
      previous.next = newNode;
    }

    this.length++;

    return true;
  };

  // 根据位置删除对应的元素
  DoubleLinkedList.prototype.removeAt = function (position) {
    // 1.判断越界的问题
    if (position < 0 || position >= this.length) {
      return null;
    }

    // 2.判断移除的位置
    let current = this.head;
    if (position === 0) {
      if (this.length == 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
    } else if (position === this.length - 1) {
      current = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let index = 0;
      let previous = null;

      while (index++ < position) {
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
      current.next.prev = previous;
    }

    this.length--;

    return current.element;
  };

  // 根据下标获取元素在链表中的位置
  DoubleLinkedList.prototype.indexOf = function (element) {
    // 1.定义变量保存信息
    let current = this.head;
    let index = 0;

    // 2.查找正确的信息
    while (current) {
      if (current.element === element) {
        return index;
      }
      index++;
      current = current.next;
    }

    // 3.没有找到返回-1
    return -1;
  };

  // 根据元素值删除元素
  DoubleLinkedList.prototype.remove = function (element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  };

  // 判断是否为空
  DoubleLinkedList.prototype.isEmpty = function () {
    return this.length === 0;
  };

  // 获取链表长度
  DoubleLinkedList.prototype.size = function () {
    return this.length;
  };

  // 获取第一个元素
  DoubleLinkedList.prototype.getHead = function () {
    return this.head.element;
  };

  // 获取最后一个元素
  DoubleLinkedList.prototype.getTail = function () {
    return this.tail.element;
  };

  // 正向遍历
  DoubleLinkedList.prototype.forwardString = function () {
    let current = this.head;
    let forwardStr = '';

    while (current) {
      forwardStr += current.element + ' ';
      current = current.next;
    }

    return forwardStr.slice(1);
  };

  // 反向遍历的方法
  DoubleLinkedList.prototype.reverseString = function () {
    let current = this.tail;
    let reverseStr = '';
    while (current) {
      reverseStr = current.element + ' ';
      current = current.next;
    }

    return reverseStr.slice(1);
  };

  // 实习toString方法
  DoubleLinkedList.prototype.toString = function () {
    return this.forwardString();
  };
}


