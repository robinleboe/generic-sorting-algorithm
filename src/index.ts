import { GenericSort } from './GenericSort';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([11, 2, -3, 0]);
// numbersCollection.sort();
// console.log(numbersCollection.items);

// const charactersCollection = new CharactersCollection('XaBacab');
// charactersCollection.sort();
// console.log(charactersCollection.chars);

const linkedList = new LinkedList();
linkedList.add(395);
linkedList.add(-11);
linkedList.add(-2);
linkedList.add(6);

linkedList.sort();
linkedList.print();
