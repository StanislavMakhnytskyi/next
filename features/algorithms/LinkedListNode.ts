export interface LinkedListNode {
  value: any;
  next: LinkedListNode | null;
}

export class LinkedListNode {
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}
