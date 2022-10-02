/*
 Remove Duplicates from Sorted List
 Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
*/

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

var a = new Node(1);
var b = new Node(1);
var c = new Node(3);


a.next = b;
b.next = c;

console.log(a);

const removeDuplicate = (head) => {
    let current = head;

    while(current){
        if(current.next !== null && current.val === current.next.val ){
            current.next = current.next.next;
        }else{
            current = current.next;
        }
    }

    return head;
}

console.log(removeDuplicate(a));