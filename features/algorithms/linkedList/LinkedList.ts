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

  public push(value: any): this {
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

  public pop(): LinkedListNode {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  public unshift(value: any): this {
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

  public shift() {
    let shifted = this.head;

    if (!this.head) {
      return undefined;
    }

    this.head = this.head.next;
    this.tail = this.head ? this.tail : this.head;
    this.length--;

    return shifted;
  }

  public get(index: number): LinkedListNode {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let node = this.head;

    while (index > 0) {
      node = node.next;
      index--;
    }

    return node;
  }

  public set(index: number, value: any): boolean {
    const node = this.get(index);
    if (node) {
      node.value = value;

      return true;
    }

    return false;
  }

  public insert(index: number, value: any): boolean {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.unshift(value);

      return true;
    }

    if (index === this.length) {
      this.unshift(value);

      return true;
    }

    const newNode = new LinkedListNode(value);
    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;

    return true;
  }

  public remove(index): boolean {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.shift();

      return true;
    }

    if (index === this.length - 1) {
      this.pop();

      return true;
    }

    const node = this.get(index);
    const before = this.get(index - 1);
    before.next = node.next;

    return true;
  }

  public reverse(): this {
    let previous = null;
    let current = this.head;
    let following = this.head;
    this.head = this.tail;
    this.tail = current;

    while (current !== null) {
      following = following.next;
      current.next = previous;
      previous = current;
      current = following;
    }

    return this;
  }
}
