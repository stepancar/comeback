
export function sort(items: Array<number>, left = 0, right = items.length - 1) {
    if (items.length > 1) {
        const pivot = items[Math.floor((right + left) / 2)];
        let i = left;
        let j = right;
    
        while (i <= j) {
    
            while (items[i] < pivot) {
                i++;
            }
    
            while (items[j] > pivot) {
                j--;
            }
    
            if (i <= j) {
                const temp = items[i];
                items[i] = items[j];
                items[j] = temp;
                i++;
                j--;
            }
        }
        const index = i;
        if (left < index - 1) {
            sort(items, left, index - 1);
        }

        if (index < right) {
            sort(items, index, right);
        }
    }

    return items;
}