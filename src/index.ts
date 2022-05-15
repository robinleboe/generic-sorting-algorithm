import { GenericSort } from './GenericSort';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([11, 2, -3, 0]);
const arraySort = new GenericSort(numbersCollection);
arraySort.sort();
console.log(numbersCollection.items);
