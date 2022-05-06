export interface DoublyLinkedListNode {
  value: any;
  next: DoublyLinkedListNode | null;
  prev: DoublyLinkedListNode | null;
}

export class DoublyLinkedListNode {
  constructor(value: any) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
