import { GenericSort } from './GenericSort';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([11, 2, -3, 0]);
// const arraySort = new GenericSort(numbersCollection);
// arraySort.sort();
// console.log(numbersCollection.items);

const charactersCollection = new CharactersCollection('abacab');
const charSort = new GenericSort(charactersCollection);
charSort.sort();
console.log(charactersCollection.chars);
