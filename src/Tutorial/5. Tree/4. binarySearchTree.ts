/* eslint-disable @typescript-eslint/no-unused-vars */

// 二叉搜索树的查找操作与二分查找算法的工作原理一致，都是每轮排除一半情况。循环次数最多为二叉树的高度，当二叉树平衡时，使用 O(logn) 时间复杂度即可找到目标值。

let root = new TreeNode(0);
// 查找节点
function search(num: number): TreeNode | null {
  let cur = root;
  while (cur) {
    if (cur.val === num) return cur;
    if (cur.val > num) cur = cur.left!;
    else cur = cur.right!;
  }

  return cur;
}

// 插入节点
function insert(num: number): void {
  if (!root) {
    root = new TreeNode(num);
    return;
  }

  let cur: TreeNode | null = root,
    pre: TreeNode | null = null;

  while (cur) {
    if (cur.val === num) return;
    pre = cur;
    if (cur.val < num) cur = cur.right!;
    else cur = cur.left!;
  }

  const node = new TreeNode(num);
  if (pre!.val < num) pre!.right = node;
  else pre!.left = node;
}

// 删除节点操作同样使用 O(logn) 时间，其中查找待删除节点需要 O(logn) 时间，获取中序遍历后继节点需要 O(logn) 时间。
function remove(num: number): void {
  if (!root) return;
  let cur: TreeNode | null = root,
    pre: TreeNode | null = null;

  while (cur) {
    if (cur.val === num) break;
    pre = cur;
    if (cur.val < num) cur = cur.right!;
    else cur = cur.left!;
  }

  if (!cur) return;
  if (!cur.left || !cur.right) {
    const child: TreeNode | null = cur.left ?? cur.right;
    if (cur !== root) {
      if (pre!.left === cur) pre!.left = child;
      else pre!.right = child;
    } else {
      root = child!;
    }
  } else {
    let tmp: TreeNode | null = cur.right;
    while (tmp!.left) tmp = tmp!.left;
    remove(tmp!.val);
    cur.val = tmp.val;
  }
}
