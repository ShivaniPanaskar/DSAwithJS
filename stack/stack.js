class Stack {
    constructor() {
        this.stack = [];
    }

    push(data) {
        this.stack.push(data);
    }

    pop() {
        return this.stack.pop();
    }

    // Find top of the stack
    peek() {
        return this.stack[this.stack.length - 1];
    }

    // Check if empty
    isEmpty() {
        return this.stack.length === 0;
    }

    // Check size
    size() {
        return this.stack.length;
    }

    // Clear the stack
    clear() {
        this.stack = [];
    }

    // Check if element exists
    contain(element) {
        return this.stack.includes(element);
    }

    // Reverse the stack
    reverse() {
        this.stack.reverse();
    }

    // Print the stack
    printStack() {
        let str = '';
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i] + '\n';
        }
        return str;
    }
}

// Usage example
let myStack = new Stack();
myStack.push(4);
myStack.push(6);
myStack.push(8);
myStack.push(10);
console.log(myStack.printStack());
myStack.reverse();
console.log(myStack.size());
console.log(myStack.contain(2));
console.log(myStack.printStack());
