function Dictionary() {
  // 属性
  this.items = {};

  // 方法
  // 在字典中添加键值对
  Dictionary.prototype.set = function (key, value) {
    this.items[key] = value;
  };

  // 判断字典中是否有某个key
  Dictionary.prototype.has = function (key) {
    return this.items.hasOwnProperty(key);
  };

  // 从字典中移除元素
  Dictionary.prototype.remove = function (key) {
    // 1.判断字典中是否有这个key
    if (!this.has(key)) return false;

    // 2.从字典中删除这个元素
    delete this.items[key];
    return true;
  };

  // 根据key去获取value
  Dictionary.prototype.get = function (key) {
    return this.has(key) ? this.items[key] : undefined;
  };

  // 获取所有key
  Dictionary.prototype.keys = function () {
    return Object.keys(this.items);
  };

  // 获取所有value
  Dictionary.prototype.values = function () {
    return Object.values(this.items);
  };

  // 获取长度
  Dictionary.prototype.size = function () {
    return this.items.length;
  };

  // 清空字典
  Dictionary.prototype.clear = function () {
    this.items = {};
  };
}

let dict = new Dictionary();
dict.set('age', 18);
dict.set('name', 'coderwhy');
dict.set('height', 1.88);
console.log(dict.keys());
console.log(dict.values());
dict.remove('height');
console.log(dict.keys());
console.log(dict.values());
dict.clear();
console.log(dict.keys());
console.log(dict.values());
