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

  enqueue(value: any): this {
    const node = new QueueNode(value);

    if (this.length === 0) {
      this.first = node;
    }
    this.last = node;
    node.next = this.first;
    this.length++;

    return this;
  }
}
