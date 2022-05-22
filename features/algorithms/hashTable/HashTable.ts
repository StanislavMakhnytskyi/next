export interface HashTable {
  dataMap: any[];
}

export class HashTable {
  constructor(size) {
    this.dataMap = new Array(size);
  }

  private hash(key: string): number {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }

    return hash;
  }
}
