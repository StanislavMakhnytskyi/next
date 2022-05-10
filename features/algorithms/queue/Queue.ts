import { QueueNode } from './QueueNode';

export interface Queue {
  first: QueueNode;
  last: QueueNode;
  length: number;
}

export class Queue {
  constructor(value: any) {
    const node = new QueueNode(value);
    this.first = node;
    this.last = node;
    this.length = 1;
  }

  public enqueue(value: any): this {
    const node = new QueueNode(value);

    if (this.length === 0) {
      this.first = node;
    }
    this.last = node;
    node.next = this.first;
    this.length++;

    return this;
  }

  public dequeue(): QueueNode {
    if (this.length === 0) {
      return undefined;
    }
    const node = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }
    if (this.length > 1) {
      this.first = this.first.next;
    }
    this.length--;

    return node;
  }
}
