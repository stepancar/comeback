export class BST {
    constructor() {
        this.root = null;
    }

    root: Node;

    insert(value: number) {
        const nodeToInsert = new Node(value);
        if (!this.root) {
            this.root = nodeToInsert;
            return this;
        }

        let currentNode = this.root;
        
        while(currentNode) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = nodeToInsert;
                    break;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (!currentNode.right) {
                    currentNode.right = nodeToInsert;
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }

        return this;
    }

    walk(callback: (node: Node) => any, node = this.root) {
        if (node) {
            callback(node);
            this.walk(callback, node.left);
            this.walk(callback, node.right)
        }
    }
}

class Node {
    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    value: number;
    left: Node;
    right: Node;
}