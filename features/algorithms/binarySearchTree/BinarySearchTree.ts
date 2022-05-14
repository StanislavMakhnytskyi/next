import { BinarySearchTreeNode } from './BinarySearchTreeNode';

export interface BinarySearchTree {
  root: BinarySearchTreeNode | null;
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}
