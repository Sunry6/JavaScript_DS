/* eslint-disable @typescript-eslint/no-unused-vars */

// AVL 树的特点在于“旋转”操作，它能够在不影响二叉树的中序遍历序列的前提下，使失衡节点重新恢复平衡。换句话说，旋转操作既能保持“二叉搜索树”的性质，也能使树重新变为“平衡二叉树”。
// 我们将平衡因子绝对值的节点称为“失衡节点”。根据节点失衡情况的不同，旋转操作分为四种：右旋、左旋、先右旋后左旋、先左旋后右旋。下面详细介绍这些旋转操作。

class AVLTreeNode {
  val: number; // 节点值
  height: number; // 节点高度
  left: AVLTreeNode | null; // 左子节点指针
  right: AVLTreeNode | null; // 右子节点指针
  constructor(
    val?: number,
    height?: number,
    left?: AVLTreeNode | null,
    right?: AVLTreeNode | null,
  ) {
    this.val = val ?? 0;
    this.height = height ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

let avlRoot = new AVLTreeNode(1);

/* 获取节点高度 */
function height(node: AVLTreeNode): number {
  // 空节点高度为 -1 ，叶节点高度为 0
  return node === null ? -1 : node.height;
}

/* 更新节点高度 */
function updateHeight(node: AVLTreeNode): void {
  // 节点高度等于最高子树高度 + 1
  node.height = Math.max(height(node.left!), height(node.right!)) + 1;
}

/* 获取平衡因子 */
function balanceFactor(node: AVLTreeNode): number {
  // 空节点平衡因子为 0
  if (node === null) return 0;
  // 节点平衡因子 = 左子树高度 - 右子树高度
  return height(node.left!) - height(node.right!);
}

/* 右旋操作 */
function rightRotate(node: AVLTreeNode): AVLTreeNode {
  const child = node.left;
  const grandChild = child!.right;
  // 以 child 为原点，将 node 向右旋转
  child!.right = node;
  node.left = grandChild;
  // 更新节点高度
  updateHeight(node);
  updateHeight(child!);
  // 返回旋转后子树的根节点
  return child!;
}

/* 左旋操作 */
function leftRotate(node: AVLTreeNode): AVLTreeNode {
  const child = node.right;
  const grandChild = child!.left;
  // 以 child 为原点，将 node 向左旋转
  child!.left = node;
  node.right = grandChild;
  // 更新节点高度
  updateHeight(node);
  updateHeight(child!);
  // 返回旋转后子树的根节点
  return child!;
}

/* 执行旋转操作，使该子树重新恢复平衡 */
function rotate(node: AVLTreeNode): AVLTreeNode {
  // 获取节点 node 的平衡因子
  const factor = balanceFactor(node);
  // 左偏树
  if (factor > 1) {
    if (balanceFactor(node.left!) >= 0) {
      // 右旋
      return rightRotate(node);
    } else {
      // 先左旋后右旋
      node.left = leftRotate(node.left!);
      return rightRotate(node);
    }
  }
  // 右偏树
  if (factor < -1) {
    if (balanceFactor(node.right!) <= 0) {
      // 左旋
      return leftRotate(node);
    } else {
      // 先右旋后左旋
      node.right = rightRotate(node.right!);
      return leftRotate(node);
    }
  }
  // 平衡树，无须旋转，直接返回
  return node;
}

/* 插入节点 */
function insert(val: number): void {
  avlRoot = insertHelper(avlRoot, val);
}

/* 递归插入节点（辅助方法） */
function insertHelper(node: AVLTreeNode, val: number): AVLTreeNode {
  if (node === null) return new AVLTreeNode(val);
  /* 1. 查找插入位置并插入节点 */
  if (val < node.val) {
    node.left = insertHelper(node.left!, val);
  } else if (val > node.val) {
    node.right = insertHelper(node.right!, val);
  } else {
    return node; // 重复节点不插入，直接返回
  }
  updateHeight(node); // 更新节点高度
  /* 2. 执行旋转操作，使该子树重新恢复平衡 */
  node = rotate(node);
  // 返回子树的根节点
  return node;
}

/* 删除节点 */
function remove(val: number): void {
  avlRoot = removeHelper(avlRoot, val)!;
}

/* 递归删除节点（辅助方法） */
function removeHelper(node: AVLTreeNode, val: number): AVLTreeNode | null {
  if (node === null) return null;
  /* 1. 查找节点并删除 */
  if (val < node.val) {
    node.left = removeHelper(node.left!, val);
  } else if (val > node.val) {
    node.right = removeHelper(node.right!, val);
  } else {
    if (node.left === null || node.right === null) {
      const child = node.left !== null ? node.left : node.right;
      // 子节点数量 = 0 ，直接删除 node 并返回
      if (child === null) {
        return null;
      } else {
        // 子节点数量 = 1 ，直接删除 node
        node = child;
      }
    } else {
      // 子节点数量 = 2 ，则将中序遍历的下个节点删除，并用该节点替换当前节点
      let temp = node.right;
      while (temp.left !== null) {
        temp = temp.left;
      }
      node.right = removeHelper(node.right, temp.val);
      node.val = temp.val;
    }
  }
  updateHeight(node); // 更新节点高度
  /* 2. 执行旋转操作，使该子树重新恢复平衡 */
  node = rotate(node);
  // 返回子树的根节点
  return node;
}

export { insert, remove };
