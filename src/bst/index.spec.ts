import { BST } from './';

const bst = new BST();

bst.insert(4)
    .insert(6)
    .insert(20)
    .insert(3);

console.log(bst.root);