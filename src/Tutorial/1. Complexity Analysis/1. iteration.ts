/* eslint-disable @typescript-eslint/no-unused-vars */

// for loop
// 此求和函数的操作数量与输入数据大小 \(n\) 成正比，或者说成“线性关系”。实际上，时间复杂度描述的就是这个“线性关系”。我们用大写字母 \(O\) 来表示时间复杂度，所以这个函数的时间复杂度就是 \(O(n)\)。
function forLoop(n: number): number {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res += i;
  }

  return res;
}

// while loop
// while 循环比 for 循环的自由度更高。在 while 循环中，我们可以自由地设计条件变量的初始化和更新步骤。所以，我们可以把 for 循环中的初始化和更新步骤放到 while 循环的外面，这样就可以得到下面这样的代码：
function whileLoop(n: number): number {
  let res = 0;
  let i = 1;

  while (i <= n) {
    res += i;
    i++;
  }

  return res;
}

// 例如在以下代码中，条件变量 \(i\) 每轮进行两次更新，这种情况就不太方便用 for 循环实现
function whileLoopII(n: number): number {
  let res = 0;
  let i = 1;

  while (i <= n) {
    res += i;
    i++;
    i *= 2;
  }

  return res;
}
// 总的来说，for 循环的代码更加紧凑，while 循环更加灵活，两者都可以实现迭代结构。选择使用哪一个应该根据特定问题的需求来决定。

// 嵌套循环
// 在这种情况下，函数的操作数量与 \(n^2\) 成正比，或者说算法运行时间和输入数据大小 \(n\) 成“平方关系”。我们用 \(O(n^2)\) 来表示这种时间复杂度。
// 我们可以继续添加嵌套循环，每一次嵌套都是一次“升维”，将会使时间复杂度提高至“立方关系”“四次方关系”，以此类推。我们用 \(O(n^k)\) 来表示这种时间复杂度。
function nestedForLoop(n: number): string {
  let res = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      res += `(${i}, ${j}), `;
    }
  }
  return res;
}
