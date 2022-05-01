import { LinkedListNode } from './LinkedListNode';

export interface LinkedList {
  head: LinkedListNode | null;
  tail: LinkedListNode | null;
  length: number;
}

export class LinkedList {
  constructor(value: any) {
    this.head = new LinkedListNode(value);
    this.tail = this.head;
    this.length = 1;
  }
}
