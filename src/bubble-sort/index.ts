export function sort(array: Array<number>) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                const buffer = array[i];
                array[i] = array[j];
                array[j] = buffer;
            }
        }
    }
    return array;
}