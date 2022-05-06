import { DoublyLinkedListNode } from './DoublyLinkedListNode';

export interface DoublyLinkedList {
  head: DoublyLinkedListNode | null;
  tail: DoublyLinkedListNode | null;
  length: number;
}

export class DoublyLinkedList implements DoublyLinkedList {
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

    if (this.length === 0) {
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

  public pop(): DoublyLinkedListNode {
    if (this.length === 0) {
      return undefined;
    }
    const node = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      node.prev = null;
    }
    this.length--;

    return node;
  }

  public unshift(value: any): this {
    const node = new DoublyLinkedListNode(value);

    if (this.length === 0) {
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = node;
    }
    this.head = node;
    this.length++;

    return this;
  }

  public shift(): DoublyLinkedListNode {
    if (this.length === 0) {
      return undefined;
    }
    let head = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      head.next = null;
    }

    this.length--;
  }

  public get(index: number): DoublyLinkedListNode {
    if (index < 0 || index > this.length) return null;

    let node;
    if (index < this.length / 2) {
      node = this.head;

      for (let i = 0; i < index; i++) {
        node = node.next;
      }
    } else {
      node = this.tail;

      for (let i = this.length - 1; i > index; i--) {
        node = node.prev;
      }
    }

    return node;
  }
}
