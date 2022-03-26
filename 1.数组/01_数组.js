// 创建和初始化数组
let daysOfWeek1 = new Array();
let daysOfWeek2 = new Array(7);
let daysOfWeek3 = new Array(
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
);
let daysOfWeek4 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// 获取数组长度
console.log(daysOfWeek3);

// 普通for循环遍历数组
for (let i = 0; i < daysOfWeek3.length; i++) {
  console.log(daysOfWeek3[i]);
}

// 通过foreach遍历数组
daysOfWeek3.forEach(function (value) {
  console.log(value);
});

// 求fibonacci数列的前20个数字
let fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 1;

for (let i = 2; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci);

