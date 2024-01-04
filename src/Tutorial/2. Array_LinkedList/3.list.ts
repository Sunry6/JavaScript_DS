/* eslint-disable @typescript-eslint/no-unused-vars */

// 「列表 list」是一个抽象的数据结构概念，它表示元素的有序集合，支持元素访问、修改、添加、删除和遍历等操作，无须使用者考虑容量限制的问题。列表可以基于链表或数组实现。

/* 初始化列表 */
// 无初始值
const nums1: number[] = [];
// 有初始值
const nums: number[] = [1, 3, 2, 5, 4];

/* 访问元素 */
const num: number = nums[1]; // 访问索引 1 处的元素

/* 更新元素 */
nums[1] = 0; // 将索引 1 处的元素更新为 0

/* 清空列表 */
nums.length = 0;

/* 在尾部添加元素 */
nums.push(1);
nums.push(3);
nums.push(2);
nums.push(5);
nums.push(4);

/* 在中间插入元素 */
nums.splice(3, 0, 6);

/* 删除元素 */
nums.splice(3, 1);

/* 通过索引遍历列表 */
let count = 0;
for (let i = 0; i < nums.length; i++) {
  count += nums[i];
}

/* 直接遍历列表元素 */
count = 0;
for (const num of nums) {
  count += num;
}

/* 拼接两个列表 */
const nums2: number[] = [6, 8, 7, 10, 9];
nums.push(...nums2); // 将列表 nums2 拼接到 nums 之后

/* 排序列表 */
nums.sort((a, b) => a - b); // 排序后，列表元素从小到大排列

/* 列表类 */
class MyList {
  private arr: Array<number>; // 数组（存储列表元素）
  private _capacity: number = 10; // 列表容量
  private _size: number = 0; // 列表长度（当前元素数量）
  private extendRatio: number = 2; // 每次列表扩容的倍数

  /* 构造方法 */
  constructor() {
    this.arr = new Array(this._capacity);
  }

  /* 获取列表长度（当前元素数量）*/
  public size(): number {
    return this._size;
  }

  /* 获取列表容量 */
  public capacity(): number {
    return this._capacity;
  }

  /* 访问元素 */
  public get(index: number): number {
    // 索引如果越界，则抛出异常，下同
    if (index < 0 || index >= this._size) throw new Error("索引越界");
    return this.arr[index];
  }

  /* 更新元素 */
  public set(index: number, num: number): void {
    if (index < 0 || index >= this._size) throw new Error("索引越界");
    this.arr[index] = num;
  }

  /* 在尾部添加元素 */
  public add(num: number): void {
    // 如果长度等于容量，则需要扩容
    if (this._size === this._capacity) this.extendCapacity();
    // 将新元素添加到列表尾部
    this.arr[this._size] = num;
    this._size++;
  }

  /* 在中间插入元素 */
  public insert(index: number, num: number): void {
    if (index < 0 || index >= this._size) throw new Error("索引越界");
    // 元素数量超出容量时，触发扩容机制
    if (this._size === this._capacity) {
      this.extendCapacity();
    }
    // 将索引 index 以及之后的元素都向后移动一位
    for (let j = this._size - 1; j >= index; j--) {
      this.arr[j + 1] = this.arr[j];
    }
    // 更新元素数量
    this.arr[index] = num;
    this._size++;
  }

  /* 删除元素 */
  public remove(index: number): number {
    if (index < 0 || index >= this._size) throw new Error("索引越界");
    const num = this.arr[index];
    // 将索引 index 之后的元素都向前移动一位
    for (let j = index; j < this._size - 1; j++) {
      this.arr[j] = this.arr[j + 1];
    }
    // 更新元素数量
    this._size--;
    // 返回被删除的元素
    return num;
  }

  /* 列表扩容 */
  public extendCapacity(): void {
    // 新建一个长度为 size 的数组，并将原数组复制到新数组
    this.arr = this.arr.concat(
      new Array(this.capacity() * (this.extendRatio - 1)),
    );
    // 更新列表容量
    this._capacity = this.arr.length;
  }

  /* 将列表转换为数组 */
  public toArray(): number[] {
    const size = this.size();
    // 仅转换有效长度范围内的列表元素
    const arr = new Array(size);
    for (let i = 0; i < size; i++) {
      arr[i] = this.get(i);
    }
    return arr;
  }
}
