import { StackNode } from './StackNode';

export interface Stack {
  top: StackNode | null;
  length: number;
}

export class Stack {
  constructor(value?: any) {
    if (value) {
      this.top = new StackNode(value);
      this.length = 1;
    } else {
      this.top = null;
      this.length = 0;
    }
  }

  public push(value: any): this {
    const node = new StackNode(value);

    node.next = this.top;
    this.top = node;
    this.length++;

    return this;
  }

  public pop(): StackNode {
    if (this.length === 0) {
      return undefined;
    }

    const node = this.top;
    this.top = node.next;
    node.next = null;
    this.length--;

    return node;
  }
}
