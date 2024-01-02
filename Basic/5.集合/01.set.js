// 封装集合的构造函数
function Set() {
  // 属性
  this.items = {};

  // 方法
  // 判断集合中是否有某个元素
  Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value);
  };

  // 向集合中添加元素
  Set.prototype.add = function (value) {
    // 1.判断集合中是否已经包含了该元素
    if (this.has(value)) return false;

    // 2.将元素添加到集合中
    this.items[value] = value;
    return true;
  };

  // 从集合中删除某个元素
  Set.prototype.remove = function (value) {
    // 1.判断集合中是否包含该元素
    if (!this.has(value)) return false;

    // 2.包含该元素,那么将元素删除
    delete this.items[value];
    return true;
  };

  // 清空集合中所有的元素
  Set.prototype.clear = function () {
    this.items = {};
  };

  // 获取集合的大小
  Set.prototype.size = function () {
    return Object.keys(this.items).length;
  };

  // 获取集合中所有的值
  Set.prototype.values = function () {
    return Object.keys(this.items);
  };
}

let set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set.values());
console.log(set.has(100));
console.log(set.has(1));
set.remove(1);
console.log(set.values());
console.log(set.size());
set.clear();
console.log(set.size());

