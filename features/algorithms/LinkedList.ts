import { LinkedListNode } from './LinkedListNode';

export interface LinkedList {
  head: LinkedListNode | null;
  tail: LinkedListNode | null;
  length: number;
}

export class LinkedList {
  constructor(value?: any) {
    if (value) {
      this.head = new LinkedListNode(value);
      this.tail = this.head;
      this.length = 1;
    } else {
      this.head = null;
      this.tail = null;
    }

    return this;
  }

  push(value: any) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  unshift(value: any) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }
}
