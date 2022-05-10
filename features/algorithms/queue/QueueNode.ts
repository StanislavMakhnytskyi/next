export interface QueueNode {
  value: any;
  next: QueueNode;
}

export class QueueNode {
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}
