export interface BinarySearchTreeNode {
  value: any;
  left: BinarySearchTreeNode | null;
  right: BinarySearchTreeNode | null;
}

export class BinarySearchTreeNode {
  constructor(value) {
    this.value = value;
  }
}
