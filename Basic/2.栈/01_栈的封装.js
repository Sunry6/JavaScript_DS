// 封装栈类
function Stack() {
  // 栈中的属性
  this.items = [];

  // 栈的相关操作
  // 1.将元素压入栈
  Stack.prototype.push = function (element) {
    this.items.push(element);
  };
  // 2.从栈中取出元素
  Stack.prototype.pop = function (element) {
    return this.items.pop(element);
  };

  // 3.查看一下栈顶元素
  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1];
  };

  // 4.判断栈是否为空
  Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
  };

  // 5.获取栈中元素的个数
  Stack.prototype.size = function () {
    return this.items.length;
  };

  // 6.toString方法
  Stack.prototype.toString = function () {
    let resultString = '';
    for (let i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + ' ';
    }
    return resultString;
  };
}

// 栈的使用
let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s.size());
console.log(s.toString());
console.log(s);
s.pop();
s.pop();
console.log(s);
console.log(s.peek());
console.log(s.isEmpty());
console.log(s.size());
console.log(s.toString());

// 将十进制转换为二进制
function dec2bin(deNumber) {
  // 1.定义栈对象
  let s = new Stack();

  // 2.循环操作
  while (deNumber > 0) {
    // 2.1.获取余数，并且放入栈中
    s.push(deNumber % 2);
    // 2.2.获取整除后的结果作为下一次运算的数字
    deNumber = Math.floor(deNumber / 2);
  }

  // 3.从栈中取出0和1
  let resultString = '';
  while (!s.isEmpty()) {
    resultString += s.pop();
  }

  return resultString;
}

console.log(dec2bin(100));
console.log(dec2bin(10));
