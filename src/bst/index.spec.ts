import { BST } from './';

const bst = new BST();

bst.insert(4)
    .insert(6)
    .insert(20)
    .insert(3);

bst.walk((node)=>{
    console.log(node.value);
})