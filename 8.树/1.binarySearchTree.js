// 创建BinarySearchTree的构造函数
function BinarySearchTree() {
  // 创建节点构造函数
  function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  // 保存根的属性
  this.root = null;

  // 方法
  // 向树中插入数据
  BinarySearchTree.prototype.insert = function (key) {
    // 1.根据key创建对应的node
    let newNode = new Node(key);

    // 2.判断根节点是否有值
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  };

  BinarySearchTree.prototype.insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      // 1.准备向左子树插入数据
      if (node.left === null) {
        // 1.1 node的左子树没有内容
        node.left = newNode;
      } else {
        // 1.2 node的左子树上已经有了内容
        this.insertNode(node.left, newNode);
      }
    } else {
      // 2.准备向右子树插入数据
      if (node.right === null) {
        // 2.1 node的右子树上没有内容
        node.right = newNode;
      } else {
        // 2.2 node的右子树上有内容
        this.insertNode(node.right, newNode);
      }
    }
  };

  // 获取最大值和最小值
  BinarySearchTree.prototype.min = function () {
    let node = this.root;
    while (node.left !== null) {
      node = node.left;
    }
    return node.key;
  };

  BinarySearchTree.prototype.max = function () {
    let node = this.root;
    while (node.right !== null) {
      node = node.right;
    }
    return node.key;
  };

  // 搜索
  BinarySearchTree.prototype.searchNode = function (node, key) {
    // 1.如果传入的node为null,那么就退出递归
    if (node === null) {
      return false;
    }

    // 2.判断node节点的值和传入的key大小
    if (node.key > key) {
      // 2.1 传入的key较小,向左边继续查找
      return this.searchNode(node.left, key);
    } else if (node.key < key) {
      // 2.2 传入的key较大,向右边继续查找
      return this.searchNode(node.right, key);
    } else {
      // 2.3 相同,找到了
      return true;
    }
  };

  BinarySearchTree.prototype.search = function (key) {
    let node = this.root;
    while (node !== null) {
      if (node.key > key) {
        node = node.left;
      } else if (node.key < key) {
        node = node.right;
      } else {
        return true;
      }
    }
    return false;
  };

  // 删除
  BinarySearchTree.prototype.removeNode = function (node, key) {
    // 1.如果传入的node为null,直接退出递归
    if (node === null) return null;

    // 2.判断key和对应node.key的大小
    if (node.key > key) {
      node.left = this.removeNode(node.left, key);
    }
  };

  BinarySearchTree.prototype.remove = function (key) {
    // 1.定义临时保存的变量
    let current = this.root;
    let parent = this.root;
    let isLeftChild = true;

    // 2.开始查找节点
    while (current.key !== key) {
      parent = current;
      if (key < current.key) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }

      // 如果发现current已经指向null,那么说明没有找到要删除的数据
      if (current === null) return false;
    }

    // 3.删除的节点是叶节点
    if (current.left === null && current.right === null) {
      if (current === this.root) {
        this.root = null;
      } else if (isLeftChild) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else if (current.right === null) {
      // 4.删除有一个子节点的节点
      if (current === this.root) {
        this.root = current.left;
      } else if (isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
    } else if (current.left === null) {
      if (current === this.root) {
        this.root = current.right;
      } else if (isLeftChild) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    } else {
      // 5.删除有两个子节点的节点
      let successor = this.getSuccessor(current);
      if (current === this.root) {
        this.root = successor;
      } else if (isLeftChild) {
        parent.left = successor;
      } else {
        parent.right = successor;
      }
    }
    return true;
  };

  // 找后继
  BinarySearchTree.prototype.getSuccessor = function (delNode) {
    // 1.使用变量保存临时的节点
    let successorParent = delNode;
    let successor = delNode;
    let current = delNode.right; // 从右子树开始找

    // 2.寻找节点
    while (current != null) {
      successorParent = successor;
      successor = current;
      current = current.left;
    }

    if (successor != delNode.right) {
      successorParent.left = successor.left;
      successor.right = delNode.right;
    }
  };

  // 先序遍历
  BinarySearchTree.prototype.preOrderTraversal = function (handler) {
    this.preOrderTraversalNode(this.root, handler);
  };

  BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {
    if (node !== null) {
      handler(node.key);
      this.preOrderTraversalNode(node.left, handler);
      this.preOrderTraversalNode(node.right, handler);
    }
  };

  // 中序遍历
  BinarySearchTree.prototype.inOrderTraversal = function (handler) {
    this.inOrderTraversalNode(this.root, handler);
  };

  BinarySearchTree.prototype.inOrderTraversalNode = function (node, handler) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, handler);
      handler(node.key);
      this.inOrderTraversalNode(node.right, handler);
    }
  };

  // 后序遍历
  BinarySearchTree.prototype.postOrderTraversal = function (handler) {
    this.postOrderTraversalNode(this.root, handler);
  };

  BinarySearchTree.prototype.postOrderTraversalNode = function (node, handler) {
    if (node !== null) {
      this.postOrderTraversalNode(node.left, handler);
      this.postOrderTraversalNode(node.right, handler);
      handler(node.key);
    }
  };
}
