// 初始化一个数组
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 添加一个元素到数组的最后位置
// 方式一:
numbers[numbers.length] = 10;

// 方式二:
numbers.push(11);
console.log(numbers);

// 在数组首位插入一个元素
// 方式一:
for (let i = numbers.length; i > 0; i--) {
  numbers[i] = numbers[i - 1];
}
numbers[0] = -1;
console.log(numbers);

// 方式二:
numbers.unshift(-2);
numbers.unshift(-3);
console.log(numbers);

// 删除元素
numbers.pop();
console.log(numbers);

// 删除首位的元素
// 方法一:
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i + 1];
}
numbers.pop();
console.log(numbers);

// 方法二:
numbers.shift();
console.log(numbers);

// 删除指定位置的几个元素
numbers.splice(5, 3);
console.log(numbers);

// 在指定位置插入元素,第二个参数为0时表示插入数据
numbers.splice(5, 0, 4, 5, 6);
console.log(numbers);

// 修改指定位置的数据
numbers.splice(5, 3, 'a', 'b', 'c');
console.log(numbers);
