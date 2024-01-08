/* eslint-disable @typescript-eslint/no-unused-vars */

const map = new Map<number, string>();
// 添加
map.set(12836, "小哈");
map.set(15937, "小啰");
map.set(16750, "小算");
map.set(13276, "小法");
map.set(10583, "小鸭");
console.info("\n添加完成后，哈希表为\nKey -> Value");
console.log(map);

// 查询
const itemName = map.get(12836);
console.log("\n查询12836的结果为：", itemName);

// 删除
map.delete(12836);
console.log(map);

// 遍历哈希表
for (const [k, v] of map.entries()) {
  console.log(k + " -> " + v);
}

// 单独遍历键
for (const k of map.keys()) {
  console.log(k);
}

// 单独遍历值
for (const v of map.values()) {
  console.log(v);
}

// 哈希表简单实现
// 键值对
class Pair {
  public key: number;
  public value: string;

  constructor(key: number, value: string) {
    this.key = key;
    this.value = value;
  }
}

// 基于数组实现的哈希表
class ArrayHashMap {
  private readonly buckets: (Pair | null)[];

  constructor() {
    this.buckets = new Array(100).fill(null);
  }

  // hash函数
  private hashFunc(key: number): number {
    return key % 100;
  }

  // 查询
  public get(key: number): string | null {
    const index = this.hashFunc(key);
    const pair = this.buckets[index];
    if (pair === null) return null;
    return pair.value;
  }

  // 添加
  public set(key: number, val: string) {
    const index = this.hashFunc(key);
    this.buckets[index] = new Pair(key, val);
  }

  // 删除
  public delete(key: number) {
    const index = this.hashFunc(key);
    // 置为null, 代表删除
    this.buckets[index] = null;
  }

  // 获取所有键值对
  public entires(): (Pair | null)[] {
    const arr: (Pair | null)[] = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        arr.push(this.buckets[i]);
      }
    }
    return arr;
  }

  // 获取所有键
  public keys(): (number | undefined)[] {
    const arr: (number | undefined)[] = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        arr.push(this.buckets[i]?.key);
      }
    }
    return arr;
  }

  // 获取所有值
  public values(): (string | undefined)[] {
    const arr: (string | undefined)[] = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        arr.push(this.buckets[i]?.value);
      }
    }
    return arr;
  }

  // 遍历
  public print() {
    const pairSet = this.entires();
    for (const pair of pairSet) {
      console.log(`${pair?.key} -> ${pair?.value}`);
    }
  }
}

export { Pair };
