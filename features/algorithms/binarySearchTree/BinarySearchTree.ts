import { BinarySearchTreeNode } from './BinarySearchTreeNode';

export interface BinarySearchTree {
  root: BinarySearchTreeNode | null;
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  public insert = (value): this => {
    const newNode = new BinarySearchTreeNode(value);

    if (this.root === null) {
      this.root = newNode;
    }
    let temp = this.root;

    while (true) {
      if (newNode.value === temp.value) return undefined;

      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  };

  public contains(value: any): boolean {
    if (this.root === null) return false;

    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
      if (this.root.value === value) return true;
    }

    return false;
  }

  public minValueNode(node: BinarySearchTreeNode): BinarySearchTreeNode {
    while (node.left !== null) {
      node = node.left;
    }

    return node;
  }

  public BFS(): BinarySearchTreeNode[] {
    let currentNode = this.root;
    let results = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      results.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return results;
  }

  public DFSPreOrder(): BinarySearchTreeNode[] {
    let results = [];

    function traverse(currentNode) {
      results.push(currentNode.value);
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);

    return results;
  }
}
