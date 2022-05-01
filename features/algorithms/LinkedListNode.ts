export interface LinkedListNode {
  value: any;
  next: object | null;
}

export class LinkedListNode {
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}
