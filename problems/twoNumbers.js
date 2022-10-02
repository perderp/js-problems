class listNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let l0 = new listNode(2);
let l1 = new listNode(4);
let l2 = new listNode(3);
let l3 = new listNode(4);

let k0 = new listNode(5);
let k1 = new listNode(6);
let k2 = new listNode(4);

l0.next = l1;
l1.next = l2;
l2.next = l3;
k0.next = k1;
k1.next = k2;


const twoNumbers = (a1, a2) => {
    let list = new listNode(0);
    var head = list, sum = 0, carry = 0;
    while(a1!== null || a2 !== null || sum > 0){
        if(a1!==null){
            sum = sum + a1.data;
            a1 = a1.next;
        }
        if(a2!==null){
            sum = sum + a2.data;
            a2 = a2.next;
        }
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }

        head.next = new listNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;
    }

    return list.next;
}

const twoNumbersArray = (a1, a2) => {
    let result = [];
    var sum = 0, carry = 0;
    while(a1 || a2){
        if(a1){
            sum += a1.data;
            a1 = a1.next;
        }

        if(a2){
            sum += a2.data;
            a2 = a2.next;
        }

        if(sum > 9){
            carry = sum/10;
            sum = sum%10;
            result.push(sum);
        }else{
            result.push(sum + carry);
            carry = 0;
            sum = 0;
        }
    }
    return result;
}


console.log(twoNumbers(l0, k0));

