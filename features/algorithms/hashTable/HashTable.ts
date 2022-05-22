export interface HashTable {
  dataMap: any[];
}

export class HashTable {
  constructor(size) {
    this.dataMap = new Array(size);
  }
}
