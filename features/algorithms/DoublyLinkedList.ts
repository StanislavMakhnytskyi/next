import { DoublyLinkedListNode } from './DoublyLinkedListNode';

export interface DoublyLinkedList {
  head: DoublyLinkedListNode | null;
  tail: DoublyLinkedListNode | null;
  length: number;
}

export class DoublyLinkedList {
  constructor(value?: any) {
    if (value) {
      this.head = new DoublyLinkedListNode(value);
      this.tail = this.head;
      this.length = 1;
    } else {
      this.head = null;
      this.tail = null;
    }

    return this;
  }

  public push(value: any): this {
    const node = new DoublyLinkedListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;

    return this;
  }
}
