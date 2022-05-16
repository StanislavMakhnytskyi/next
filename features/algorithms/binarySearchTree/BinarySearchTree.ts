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
}
