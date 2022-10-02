class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;

    }
}
/*
            a(1)
            /  \
        b(2)    c(3)
        /  \      \
    d(4)   e(5)    f(6)
    /   \
g(7)    h(8)
*/

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);
let f = new Node(6);
let g = new Node(7);
let h = new Node(8);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
d.left = g;
d.right = h;
const depthFirstValues = (root) => {
    if(root == null ) return [];
    const stack = [ root ];
    let res = [];
    while(stack.length > 0 ){
        let current = stack.pop();
        res.push(current.val)
        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left)
    }
    return res;
}

// recursive
const depthFirstValuesR = (root) => {
    if(root === null) return [];
    const leftValues = depthFirstValues(root.left); // [b, d, e]
    const rightValues = depthFirstValues(root.right); // [c, f]
    return [root.val, ...leftValues, ...rightValues]

}

const breadthFirstValues = (root) => {
    if(root == null ) return [];
    const queue  = [ root ]
    const values = []
    while(queue.length > 0) {
        const current = queue.shift();
        values.push(current.val)
        if(current.left !==  null ) queue.push(current.left);
        if(current.right !== null ) queue.push(current.right);
    }
    return values
}

const treeIncludes = (root, target) =>{
    if(root == null) return [];
    const stack = [root];

    while(stack.length > 0){
        const current = stack.pop();
        if(current.val == target) return true;
        
        if(current.right) stack.push(current.right)
        if(current.left) stack.push(current.left)
    }
    return false;
};

//recursive
const treeIncludesR = (root, target) =>{
    if(root === null) return false;
    if(root.val === target) return true;
    return treeIncludes(root.left , target) || treeIncludes(root.right, target)
}

const treeSum = (root) =>{
    if(root == null) return -1;
    const queue = [ root ];
    var sum = 0;
    while(queue.length > 0) {
        const current = queue.shift();
        sum +=    current.val;
        if(current.left !== null)
        {
            queue.push(current.left);
        } 
        if(current.right !== null) queue.push(current.right);

    }

    return sum;
}
//can be breadth first and depth first
const treeMinVal = (root) =>{
    let smallest = Infinity;
    if(root == null ) return null;
    const stack = [ root ];

    while(stack.length > 0){
        const current = stack.pop();
        if(current.val < smallest){
            smallest = current.val;
        }
        if(current.left !== null ) stack.push(current.left);
        if(current.right !== null) stack.push(current.right);

        }

    return smallest;

}

const recVal = (root) => {
    if(root === null) return -Infinity;
    const leftMin = recVal(root.left);
    const rightMin = recVal(root.right);
    
    return Math.max(root.val, leftMin, rightMin)
}   

const maxPathSum = (root) =>{
    if(root === null) return -Infinity;
    if(root.left === null && root.right === null) return root.val;
    const maxChildPathSum = Math.max(maxPathSum(root.left), maxPathSum(root.right))
    return root.val + maxChildPathSum;
}

const depthFirstMax = (root) => {
    if(root === null) return 0;

    let queue = [root];
    let height = 0;

    while(true){
        let nodeCount = queue.length;
        if(nodeCount == 0) return height;
        height++;

        while(nodeCount > 0){
            let current = queue.shift();
            if(current.left !== null) queue.push(current.left);
            if(current.right !== null) queue.push(current.right);

            nodeCount --;
        }
    }
}


// sample TreeSum
const sampleDepth = (root) => {
    let stack = [ root ], result = [];
    while(stack.length > 0){
        const current = stack.pop();
        result.push(current.val);
        if(current.right) stack.push(current.right);
        if(current.left ) stack.push(current.left);
    }
    return result;
}
console.log(sampleDepth(a));

const sampleBreadth = (root) => {
    let queue = [ root ] , result = [];
    while(queue.length > 0){
        const current = queue.shift();
        result.push(current.val);

        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
    return result;
}

console.log(sampleBreadth(a));

const sampleSum = (root) => {
    let stack = [ root ], sum = 0;
    while(stack.length > 0){
        const current = stack.pop();
        sum += current.val;
        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);
    }

    return sum;
}

console.log(sampleSum(a));


const sampleMin = (root) => {
    if(root === null) return Infinity ;
    const leftVal = sampleMin(root.left);
    const rightVal = sampleMin(root.right);

    return Math.min(root.val, leftVal, rightVal);
}

console.log(sampleMin(a));


const sampleMaxPath = (root) => {
    if(root === null) return 0;
    if(root.left === null && root.right === null) return root.val;
    const pathValues = Math.max(sampleMaxPath(root.left), sampleMaxPath(root.right));

    return root.val + pathValues;
} 

console.log(sampleMaxPath(a));

const sampleBreadthFirstMax = (root) => {
    if(root === null) return 0
    let queue = [ root ];
    let height = 0;

    while(true){
        let qLen = queue.length;
        if(qLen == 0 ) return height;

        height++;

        while(qLen > 0){
            let current = queue.pop();

            if(current.left !== null) queue.push(current.left);
            if(current.right !== null) queue.push(current.right);

            qLen --;
        }
    }

}
console.log('DEPTH FIRST',sampleBreadthFirstMax(a) )