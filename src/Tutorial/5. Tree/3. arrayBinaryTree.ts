/* eslint-disable @typescript-eslint/no-unused-vars */

type Order = "pre" | "in" | "post";
type Tree = (number | null)[];

/* 数组表示下的二叉树类 */
class ArrayBinaryTree {
  tree: Tree;

  /* 构造方法 */
  constructor(arr: Tree) {
    this.tree = arr;
  }

  /* 列表容量 */
  size(): number {
    return this.tree.length;
  }

  /* 获取索引为 i 节点的值 */
  val(i: number): number | null {
    // 若索引越界，则返回 null ，代表空位
    if (i < 0 || i >= this.size()) return null;
    return this.tree[i];
  }

  /* 获取索引为 i 节点的左子节点的索引 */
  left(i: number): number {
    return 2 * i + 1;
  }

  /* 获取索引为 i 节点的右子节点的索引 */
  right(i: number): number {
    return 2 * i + 2;
  }

  /* 获取索引为 i 节点的父节点的索引 */
  parent(i: number): number {
    return Math.floor((i - 1) / 2); // 向下整除
  }

  /* 层序遍历 */
  levelOrder(): Tree {
    const res = [];
    // 直接遍历数组
    for (let i = 0; i < this.size(); i++) {
      if (this.val(i) !== null) res.push(this.val(i));
    }
    return res;
  }

  /* 深度优先遍历 */
  dfs(i: number, order: Order, res: Tree): void {
    // 若为空位，则返回
    if (this.val(i) === null) return;
    // 前序遍历
    if (order === "pre") res.push(this.val(i));
    this.dfs(this.left(i), order, res);
    // 中序遍历
    if (order === "in") res.push(this.val(i));
    this.dfs(this.right(i), order, res);
    // 后序遍历
    if (order === "post") res.push(this.val(i));
  }

  /* 前序遍历 */
  preOrder(): Tree {
    const res: Tree = [];
    this.dfs(0, "pre", res);
    return res;
  }

  /* 中序遍历 */
  inOrder(): Tree {
    const res: Tree = [];
    this.dfs(0, "in", res);
    return res;
  }

  /* 后序遍历 */
  postOrder(): Tree {
    const res: Tree = [];
    this.dfs(0, "post", res);
    return res;
  }
}
