export class ArraySort {
  constructor(public items: number[]) {}

  sort(): void {
    const { length } = this.items;
    // simple bubble sort
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.items[j] > this.items[j + 1]) {
          const leftHandVal = this.items[j];
          this.items[j] = this.items[j + 1];
          this.items[j + 1] = leftHandVal;
        }
      }
    }
  }
}
