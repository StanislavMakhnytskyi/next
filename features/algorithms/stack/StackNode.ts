export interface StackNode {
  value: any;
  next: StackNode | null;
}

export class StackNode {
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}
