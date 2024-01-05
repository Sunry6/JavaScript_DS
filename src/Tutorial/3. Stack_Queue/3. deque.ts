/* eslint-disable @typescript-eslint/no-unused-vars */

/* 初始化双向队列 */
// TypeScript 没有内置的双端队列，只能把 Array 当作双端队列来使用
const deque: number[] = [];

/* 元素入队 */
deque.push(2);
deque.push(5);
deque.push(4);
// 请注意，由于是数组，unshift() 方法的时间复杂度为 O(n)
deque.unshift(3);
deque.unshift(1);
console.log("双向队列 deque = ", deque);

/* 访问元素 */
const peekFirst: number = deque[0];
console.log("队首元素 peekFirst = " + peekFirst);
const peekLast: number = deque[deque.length - 1];
console.log("队尾元素 peekLast = " + peekLast);

/* 元素出队 */
// 请注意，由于是数组，shift() 方法的时间复杂度为 O(n)
const popFront: number = deque.shift() as number;
console.log(
  "队首出队元素 popFront = " + popFront + "，队首出队后 deque = " + deque,
);
const popBack: number = deque.pop() as number;
console.log(
  "队尾出队元素 popBack = " + popBack + "，队尾出队后 deque = " + deque,
);

/* 获取双向队列的长度 */
const size: number = deque.length;
console.log("双向队列长度 size = " + size);

/* 判断双向队列是否为空 */
const isEmpty: boolean = size === 0;
console.log("双向队列是否为空 = " + isEmpty);

/* 基于环形数组实现的双向队列 */
class ArrayDeque {
  private nums: number[]; // 用于存储双向队列元素的数组
  private front: number; // 队首指针，指向队首元素
  private queSize: number; // 双向队列长度

  /* 构造方法 */
  constructor(capacity: number) {
    this.nums = new Array(capacity);
    this.front = 0;
    this.queSize = 0;
  }

  /* 获取双向队列的容量 */
  capacity(): number {
    return this.nums.length;
  }

  /* 获取双向队列的长度 */
  size(): number {
    return this.queSize;
  }

  /* 判断双向队列是否为空 */
  isEmpty(): boolean {
    return this.queSize === 0;
  }

  /* 计算环形数组索引 */
  index(i: number): number {
    // 通过取余操作实现数组首尾相连
    // 当 i 越过数组尾部后，回到头部
    // 当 i 越过数组头部后，回到尾部
    return (i + this.capacity()) % this.capacity();
  }

  /* 队首入队 */
  pushFirst(num: number): void {
    if (this.queSize === this.capacity()) {
      console.log("双向队列已满");
      return;
    }
    // 队首指针向左移动一位
    // 通过取余操作实现 front 越过数组头部后回到尾部
    this.front = this.index(this.front - 1);
    // 将 num 添加至队首
    this.nums[this.front] = num;
    this.queSize++;
  }

  /* 队尾入队 */
  pushLast(num: number): void {
    if (this.queSize === this.capacity()) {
      console.log("双向队列已满");
      return;
    }
    // 计算队尾指针，指向队尾索引 + 1
    const rear: number = this.index(this.front + this.queSize);
    // 将 num 添加至队尾
    this.nums[rear] = num;
    this.queSize++;
  }

  /* 队首出队 */
  popFirst(): number {
    const num: number = this.peekFirst();
    // 队首指针向后移动一位
    this.front = this.index(this.front + 1);
    this.queSize--;
    return num;
  }

  /* 队尾出队 */
  popLast(): number {
    const num: number = this.peekLast();
    this.queSize--;
    return num;
  }

  /* 访问队首元素 */
  peekFirst(): number {
    if (this.isEmpty()) throw new Error("The Deque Is Empty.");
    return this.nums[this.front];
  }

  /* 访问队尾元素 */
  peekLast(): number {
    if (this.isEmpty()) throw new Error("The Deque Is Empty.");
    // 计算尾元素索引
    const last = this.index(this.front + this.queSize - 1);
    return this.nums[last];
  }

  /* 返回数组用于打印 */
  toArray(): number[] {
    // 仅转换有效长度范围内的列表元素
    const res: number[] = [];
    for (let i = 0, j = this.front; i < this.queSize; i++, j++) {
      res[i] = this.nums[this.index(j)];
    }
    return res;
  }
}
export {};