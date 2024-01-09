/* eslint-disable @typescript-eslint/no-unused-vars */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

/* 初始化二叉树 */
// 初始化节点
const n1 = new TreeNode(1),
  n2 = new TreeNode(2),
  n3 = new TreeNode(3),
  n4 = new TreeNode(4),
  n5 = new TreeNode(5);
// 构建节点之间的引用（指针）
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;

/* 插入与删除节点 */
const P = new TreeNode(0);
// 在 n1 -> n2 中间插入节点 P
n1.left = P;
P.left = n2;
// 删除节点 P
n1.left = n2;
