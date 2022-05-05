import { LinkedListNode } from './LinkedListNode';

export interface DoublyLinkedListNode extends LinkedListNode {
  prev: DoublyLinkedListNode | null;
}

export class DoublyLinkedListNode extends LinkedListNode {
  constructor(value: any) {
    super(value);
    this.prev = null;
  }
}
