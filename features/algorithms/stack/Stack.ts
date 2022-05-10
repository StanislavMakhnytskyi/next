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
}
