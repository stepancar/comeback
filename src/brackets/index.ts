export function isVaidBracketsSequence(sequence: string) {
    const stack = [];
    for (let s of sequence.split('')) {
        if (s === '[' || s === '{' || s === '(') {
            stack.push(s)
        } else {
            const headVal = stack.pop();
            if (!isPair(headVal, s)){
                return false;
            }
        }
    }

    if (stack.length !== 0) {
        return false
    }

    return true;
}

function isPair(left: string, right: string) {
    return (
        (left === '[' && right === ']') ||
        (left === '{' && right === '}') ||
        (left === '(' && right === ')')
    );
}