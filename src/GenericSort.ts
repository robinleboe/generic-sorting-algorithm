export interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class GenericSort {
  constructor(public items: Sortable) {}

  sort(): void {
    const { length } = this.items;
    // simple bubble sort
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.items.compare(j, j + 1)) {
          this.items.swap(j, j + 1);
        }
      }
    }
  }
}
