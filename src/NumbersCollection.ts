import { GenericSort } from './GenericSort';

export class NumbersCollection extends GenericSort {
  constructor(public items: number[]) {
    super();
  }

  get length(): number {
    return this.items.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.items[leftIndex] > this.items[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHandVal = this.items[leftIndex];
    this.items[leftIndex] = this.items[rightIndex];
    this.items[rightIndex] = leftHandVal;
  }
}
