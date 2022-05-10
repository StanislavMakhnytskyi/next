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
}
