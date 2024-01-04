/* eslint-disable @typescript-eslint/no-unused-vars */

class ListNode {
  val: number;
  next: ListNode | null;
  prev: ListNode | null;
  constructor(val: number, next: ListNode | null, prev?: ListNode | null) {
    this.val = val === undefined ? 0 : val; // 节点值
    this.next = next === undefined ? null : next; // 指向后继节点的引用
    this.prev = prev === undefined ? null : prev; // 指向前驱节点的引用
  }
}

// 初始化各个节点
const n0 = new ListNode(1, null);
const n1 = new ListNode(3, null);
const n2 = new ListNode(2, null);
const n3 = new ListNode(5, null);
const n4 = new ListNode(4, null);
// 构建节点之间的引用
n0.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;

/* 在链表的节点 n0 之后插入节点 P */
function insert(n0: ListNode, P: ListNode): void {
  const n1 = n0.next;
  P.next = n1;
  n0.next = P;
}

/* 删除链表的节点 n0 之后的首个节点 */
function remove(n0: ListNode): void {
  if (!n0.next) {
    return;
  }
  // n0 -> P -> n1
  const P = n0.next;
  const n1 = P.next;
  n0.next = n1;
}

/* 访问链表中索引为 index 的节点 */
function access(head: ListNode | null, index: number): ListNode | null {
  for (let i = 0; i < index; i++) {
    if (!head) {
      return null;
    }
    head = head.next;
  }
  return head;
}

/* 在链表中查找值为 target 的首个节点 */
function find(head: ListNode | null, target: number): number {
  let index = 0;
  while (head !== null) {
    if (head.val === target) {
      return index;
    }
    head = head.next;
    index += 1;
  }
  return -1;
}

// 增删用链表,查找用数组
