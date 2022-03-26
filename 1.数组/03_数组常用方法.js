// 数组合并
let num1 = [1, 2, 3];
let num2 = [100, 200, 300];
let newNum = num1.concat(num2);
console.log(newNum);
newNum = num1 + num2;
console.log(newNum);

// 判断一组元素是否都包含某一个字符,every方法每一个元素都为true,结果为true
let names = ['abc', 'cb', 'mba', 'nba'];

let flag = names.every(function (t) {
  return t.indexOf('a') != -1;
});
console.log(flag);

// 判断数组中是否有包含a字符的元素,some方法有一个元素为true,结果为true
let flag2 = names.some(function (t) {
  return t.indexOf('a') != -1;
});
console.log(flag);

// 获取name中所有包含'a'字符的元素,filter方法将为true的元素放在一个新数组并返回
let newNames = names.filter(function (t) {
  return t.indexOf('a') != -1;
});
console.log(newNames);

// 在names中所有的元素后面拼接-abc
let newNames2 = names.map(function (t) {
  return t + '-abc';
});
console.log(newNames2);

// 累加
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = number.reduce(function (pre, cur) {
  return pre + cur;
});
console.log(total);
