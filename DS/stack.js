class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(val){
        this.size++;
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            var temp = this.head;
            this.head = newNode;
            this.head.next = temp;

        }

        return this
    }

    pop(){
        if(this.head == null) return null;
        let temp = this.head;
        if(this.head === this.tail) this.tail = null;
        this.head = this.head.next;
        this.size--;

        return temp.val;
    }

    length(){
        if(this.head == null) return [];
        let stack = [ this.head ];
        let result = [];
        let i = 0;
        while(stack.length > 0){
            let current = stack.pop();
            result[i] = current.val;
            if(current.next !== null) stack.push(current.next);
            i++;
        }
        return result;
    }
}
let s = new Stack();

s.push(2);
s.push(6);
s.push(8)

console.log(s.length())