// 创建HashTable的构造函数
function HashTable() {
  // 定义属性
  this.storage = [];
  this.count = 0;
  this.limit = 8;

  // 定义方法
  // 判断是否为质数
  HashTable.prototype.isPrime = function () {
    let temp = parseInt(Math.sqrt(num));
    for (let i = 2; i <= temp; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  // 获取质数
  HashTable.prototype.getPrime = function (num) {
    while (!isPrime(num)) {
      num++;
    }
    return num;
  };

  // 哈希函数
  HashTable.prototype.hashFunc = function (str, max) {
    // 1.初始化hashCode的值
    let hashCode = 0;

    // 2.霍纳算法,来计算hashCode的值
    for (let i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i);
    }

    // 3.取模运算
    hashCode = hashCode % max;
    return hashCode;
  };

  // 插入数据方法
  HashTable.prototype.put = function (key, value) {
    // 1.获取key对应的index
    let index = this.hashFunc(key, this.limit);
    // 2.取出数组
    let bucket = this.storage[index];
    // 3.判断这个数组是否存在
    if (bucket === undefined) {
      // 3.1创建桶
      bucket = [];
      this.storage[index] = bucket;
    }

    // 4.判断是新增还是修改原来的值
    let override = false;
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        tuple[1] = value;
        override = true;
      }
    }

    // 5.如果是新增,前一步没有覆盖
    if (!override) {
      bucket.push([key, value]);
      this.count++;

      if (this.count > this.limit * 0.75) {
        let primeNum = this.getPrime(this.limit * 2);
        this.resize(primeNum);
      }
    }
  };

  // 获取存放的数据
  HashTable.prototype.get = function (key) {
    // 1.获取key对应的index
    let index = this.hashFunc(key, this.limit);
    // 2.获取对应的bucket
    let bucket = this.storage[index];
    // 3.如果bucket为null,那么说明这个位置没有数据
    if (bucket === null) {
      return null;
    }

    // 4.有bucket,判断是否有对应的key
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[i];
      }
    }

    // 5.没有找到返回null
    return null;
  };

  // 删除数据
  HashTable.prototype.remove = function (key) {
    // 1.获取key对应的index
    let index = this.hashFunc(key, this.limit);

    // 2.获取对应的bucket
    let bucket = this.storage[index];

    // 3.判断是否为null,为null则说明没有对应的数据
    if (bucket === null) {
      return null;
    }

    // 4.遍历bucket,寻找对应的数据
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1);
        this.count--;

        if (this.limit > 7 && this.count < this.limit * 0.25) {
          let primeNum = this.getPrime(Math.floor(this.limit / 2));
          this.resize(primeNum);
        }
      }
      return tuple[1];
    }
    // 5.没有对应的数据返回
    return null;
  };

  // 判断是否为空
  HashTable.prototype.isEmpty = function () {
    return this, count === 0;
  };

  // size方法
  HashTable.prototype.size = function () {
    return this.count;
  };

  // 哈希表扩容
  HashTable.prototype.resize = function (newLimit) {
    // 1.保存旧数组的内容
    let oldStorage = this.storage;
    // 2.重置属性
    this.limit = newLimit;
    this.count = 0;
    this.storage = [];
    // 3.遍历数组中所有的数据项,并且重新插入到哈希表中
    oldStorage
      .forEach(function (bucket) {
        // 1.bucket为null,说明这里面没有数据
        if (bucket === null) {
          return;
        }
        // 2.bucket中有数据,那么将里面的数据重新哈希化插入
        for (let i = 0; i < bucket.length; i++) {
          let tuple = bucket[i];
          this.put(tuple[0], tuple[1]);
        }
      })
      .bind(this);
  };
}
