import { isVaidBracketsSequence } from './';
const sequence0 = '((){})[{}()]';
console.log(sequence0, isVaidBracketsSequence(sequence0));
const sequence1 = '((){})[{}(]';
console.log(sequence1, isVaidBracketsSequence(sequence1));
const sequence2 = '((){})[{}()][';
console.log(sequence2, isVaidBracketsSequence(sequence2));