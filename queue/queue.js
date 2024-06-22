class Queue {
    constructor() {
        this.queue = []
    }
    enqueue(data) {
        this.queue.push(data)
    }
    dqueue(data) {
        if (this.isEmpty) {
            return "queue is empty"
        }
        return this.queue.shift()
    }

    isEmpty() {
        return this.queue.length === 0;
    }
    peek() {
        return this.queue[0]
    }
    size() {
        return this.queue.length
    }

    printQueue() {
        let str = ""
        for (let i = 0; i < this.queue.length; i++) {
            str += this.queue;
        }
        return str
    }

}

