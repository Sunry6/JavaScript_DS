/* eslint-disable @typescript-eslint/no-unused-vars */

/* 初始化栈 */
// Typescript 没有内置的栈类，可以把 Array 当作栈来使用
const stack: number[] = [];

/* 元素入栈 */
stack.push(1);
stack.push(3);
stack.push(2);
stack.push(5);
stack.push(4);

/* 访问栈顶元素 */
const peek = stack[stack.length - 1];

/* 元素出栈 */
const pop = stack.pop();

/* 获取栈的长度 */
const size = stack.length;

/* 判断是否为空 */
const is_empty = stack.length === 0;

/* 基于链表实现的栈 */
export class ListNode {
  val: number;
  next: ListNode | null;
  prev: ListNode | null;
  constructor(val: number, next: ListNode | null, prev?: ListNode | null) {
    this.val = val === undefined ? 0 : val; // 节点值
    this.next = next === undefined ? null : next; // 指向后继节点的引用
    this.prev = prev === undefined ? null : prev; // 指向前驱节点的引用
  }
}

class LinkedListStack {
  private stackPeek: ListNode | null; // 将头节点作为栈顶
  private stkSize: number = 0; // 栈的长度

  constructor() {
    this.stackPeek = null;
  }

  /* 获取栈的长度 */
  get size(): number {
    return this.stkSize;
  }

  /* 判断栈是否为空 */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /* 入栈 */
  push(num: number): void {
    const node = new ListNode(num, null);
    node.next = this.stackPeek;
    this.stackPeek = node;
    this.stkSize++;
  }

  /* 出栈 */
  pop(): number {
    const num = this.peek();
    if (!this.stackPeek) throw new Error("栈为空");
    this.stackPeek = this.stackPeek.next;
    this.stkSize--;
    return num;
  }

  /* 访问栈顶元素 */
  peek(): number {
    if (!this.stackPeek) throw new Error("栈为空");
    return this.stackPeek.val;
  }

  /* 将链表转化为 Array 并返回 */
  toArray(): number[] {
    let node = this.stackPeek;
    const res = new Array<number>(this.size);
    for (let i = res.length - 1; i >= 0; i--) {
      res[i] = node!.val;
      node = node!.next;
    }
    return res;
  }
}

/* 基于数组实现的栈 */
class ArrayStack {
  private stack: number[];
  constructor() {
    this.stack = [];
  }

  /* 获取栈的长度 */
  get size(): number {
    return this.stack.length;
  }

  /* 判断栈是否为空 */
  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  /* 入栈 */
  push(num: number): void {
    this.stack.push(num);
  }

  /* 出栈 */
  pop(): number | undefined {
    if (this.isEmpty()) throw new Error("栈为空");
    return this.stack.pop();
  }

  /* 访问栈顶元素 */
  top(): number | undefined {
    if (this.isEmpty()) throw new Error("栈为空");
    return this.stack[this.stack.length - 1];
  }

  /* 返回 Array */
  toArray() {
    return this.stack;
  }
}
