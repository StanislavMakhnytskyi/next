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

  public set(key, value) {
    let index = this.hash(key);
    if (!this.dataMap[index]) this.dataMap[index] = [];

    this.dataMap[index].push([key, value]);
    return this;
  }

  public get(key): any {
    let index = this.hash(key);

    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  public keys(): any[] {
    const allKeys = [];

    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }

    return allKeys;
  }
}
