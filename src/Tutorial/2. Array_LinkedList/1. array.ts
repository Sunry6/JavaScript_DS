/* eslint-disable @typescript-eslint/no-unused-vars */

// init
const arr: number[] = new Array(5).fill(0);
const nums: number[] = [1, 2, 3, 4, 5];

// 随机访问元素
function randomAccess(nums: number[]): number {
  const random_index = Math.floor(Math.random() * nums.length);
  const random_num = nums[random_index];
  return random_num;
}

// 插入元素
// 数组元素在内存中是“紧挨着的”，它们之间没有空间再存放任何数据。如图 4-3 所示，如果想在数组中间插入一个元素，则需要将该元素之后的所有元素都向后移动一位，之后再把元素赋值给该索引。
// 值得注意的是，由于数组的长度是固定的，因此插入一个元素必定会导致数组尾部元素“丢失”。我们将这个问题的解决方案留在“列表”章节中讨论。
function insert(nums: number[], num: number, index: number): void {
  for (let i = nums.length - 1; i > index; i--) {
    nums[i] = nums[i - 1];
  }
  nums[index] = num;
}

// 删除元素
// 删除元素的思路和插入元素正好相反。如果想删除索引为 index 的元素，则需要将该索引之后的所有元素都向前移动一位。
function remove(nums: number[], index: number): void {
  for (let i = index; i < nums.length - 1; i++) {
    nums[i] = nums[i + 1];
  }
}

// 遍历数组
function traverse(nums: number[]): void {
  let count = 0;
  // 通过索引遍历数组
  for (let i = 0; i < nums.length; i++) {
    count += nums[i];
  }
  // 直接遍历数组元素
  for (const num of nums) {
    count += num;
  }
}

// 查找元素
function find(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
}

// 扩容数组
function extend(nums: number[], enlarge: number): number[] {
  const res = new Array(nums.length + enlarge).fill(0);
  for (let i = 0; i < nums.length; i++) {
    res[i] = nums[i];
  }

  return res;
}

/**
 * 数组的优点与局限性
 * 数组存储在连续的内存空间内，且元素类型相同。这种做法包含丰富的先验信息，系统可以利用这些信息来优化数据结构的操作效率。
   空间效率高：数组为数据分配了连续的内存块，无须额外的结构开销。
   支持随机访问：数组允许在O(1)时间内访问任何元素。
   缓存局部性：当访问数组元素时，计算机不仅会加载它，还会缓存其周围的其他数据，从而借助高速缓存来提升后续操作的执行速度。
 * 连续空间存储是一把双刃剑，其存在以下局限性。
    插入与删除效率低：当数组中元素较多时，插入与删除操作需要移动大量的元素。
    长度不可变：数组在初始化后长度就固定了，扩容数组需要将所有数据复制到新数组，开销很大。
    空间浪费：如果数组分配的大小超过实际所需，那么多余的空间就被浪费了。
 */

export {};
