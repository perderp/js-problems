class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue { 
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    queue(val){
        this.size++;
        let newNode = new Node(val);
        
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return this
    }

    enqueue(){
        if(this.head == null) return null;
        let temp = this.head;
        if(this.head === this.tail) this.tail = null;
        this.head = this.head.next;
        this.size--;
        return temp.val;
    }

    length(){
        if(this.head === null) return [];
        let queue = [ this.head ];
        let result = [];
        while(queue.length > 0 ){
            let current = queue.pop();
            result.push(current.val);
            if(current.next !== null) {
                queue.push(current.next);
            }
        }

        return result;
    }
}

let q = new Queue();

q.queue(2);
q.queue(6);
q.queue(8);
q.queue(10);
q.enqueue();
console.log(q.length())