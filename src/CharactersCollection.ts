export class CharactersCollection {
  constructor(public chars: string) {}

  get length(): number {
    return this.chars.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.chars[leftIndex].toLowerCase() > this.chars[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const charArray = this.chars.split('');
    const leftHandVal = charArray[leftIndex];
    charArray[leftIndex] = charArray[rightIndex];
    charArray[rightIndex] = leftHandVal;

    this.chars = charArray.join('');
  }
}
