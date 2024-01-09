/* eslint-disable @typescript-eslint/no-unused-vars */

// bfs
function levelOrder(root: TreeNode | null): number[] {
  const queue = [root];
  const list: number[] = [];

  while (queue.length) {
    const node = queue.shift() as TreeNode;
    list.push(node.val);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return list;
}

// dfs
const dfsList: number[] = [];

function preOrder(root: TreeNode | null): void {
  if (root === null) {
    return;
  }

  dfsList.push(root.val);
  preOrder(root.left);
  preOrder(root.right);
}

function inOrder(root: TreeNode | null): void {
  if (root === null) {
    return;
  }

  inOrder(root.left);
  dfsList.push(root.val);
  inOrder(root.right);
}

function postOrder(root: TreeNode | null): void {
  if (root === null) {
    return;
  }

  postOrder(root.left);
  postOrder(root.right);
  dfsList.push(root.val);
}
