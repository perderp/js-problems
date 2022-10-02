const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
};


const depthFirstTraversal = (graph, source) =>{
    if(source === null || source === undefined) return false;
    const stack = [ source ];
    let result = [];
    while(stack.length > 0){
        const current = stack.pop();
        result.push(current);
        for(let neighbor of graph[current]){
            stack.push(neighbor);
        }
    }
    return result;
}

const depthFirstTraversalRecursive = (graph, source) => {
    console.log(source)
    for(let neighbor of graph[source]){
        depthFirstTraversalRecursive(graph, neighbor);
    }

}

const breadthFirstTraversal = (graph, source) => {
    const queue = [ source ];
    let result = [];

    while(queue.length > 0){
        const current = queue.shift();
        result.push(current)

        for(let neighbor of graph[current]){
            queue.push(neighbor)
        }
    }

    return result;
}



const graph02 = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g','k'],
    j: ['i'],
    k: [],
}


function depthFirstTraversalSearch(graph, source, target){

    let stack = [ source ];
    while(stack.length > 0){
        const current = stack.pop();
        if(current == target) return true
        for(let neighbor of graph[current]){
            stack.push(neighbor)
        }
    }
    return false
}


function hasPathRecursive (graph, source, target){
    if(source === target) return true;

    for(let neighbor of graph[source]){
        if(hasPathRecursive(graph, neighbor, target) === true){
            return true;
        }
    }

    return false;
}

function breadthFirstTraversalSearch(graph, source, target){
    let queue = [ source ];
    while(queue.length > 0){
        const current = queue.shift();
        if(current == target) return true;
        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
    return false;
}

// Undirected Paths

/*
    edges : [
        [i, j],
        [k, i],
        [m, k],
        [k, l],
        [o, n]
    ]


*/

// let graph = {
//     i:['j', 'k'],
//     j:['i','k'],
//     k:['i','m','l','j'],
//     m:['k'],
//     l:['k'],
//     o:['n'],
//     n:['o']

// }

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];


const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    console.log(graph)
    return hasPath(graph, nodeA, nodeB, new Set());
}
//check recursively (using depthFirstSearch) and add a set for every visited
const hasPath = (graph, src, dst, visited) => {
    if(src === dst) return true;
    if(visited.has(src)) return false;

    visited.add(src)

    for(let neighbor of graph[src]){
        if(hasPath(graph, neighbor, dst, visited) === true){
            return true
        } 
    }

    return false;
}

// from edges to adjaceny list  
const buildGraph = (edges) => {
    const graph ={ };
    for(let edge of edges){
        const [a , b] = edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}




// connected components count 

/* 
    ⓿ ❶ ❷ ❸ ❹ ❺ ❻ ❼ ❽ ❾ ❿

        ❶-❷
           ❹
           |
        ❺--❻--❽
           |
        ❸  ❼
*/

let graph03 = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
}
const connectedComponentsCount = (graph) => {
    const visited = new Set();
    let count = 0;
    
    for(let node in graph ){
        if(explore(graph, node, visited) === true){
            count += 1;
        }
    }
    return count;
}

const explore = (graph, current, visited) => {
    if(visited.has(String(current))) return false;

    visited.add(String(current))

    for(let neighbor of graph[current]){
        explore(graph, neighbor, visited);
    }

    return true;
}


// Largest Component 
/* 
    ⓿ ❶ ❷ ❸ ❹ ❺ ❻ ❼ ❽ ❾ ❿

     ❺
    | \
 ❶--⓿--❽  size : 4

    ❹--❷
    \ /
     ❸  size : 3
*/

let graph04 = {
    0 : ['1', '5', '8'],
    1 : ['0'],
    5 : ['0' , '8'],
    8 : ['0', '5'],

    4 : ['2', '3'],
    3 : ['4', '2'],
    2 : ['3', '4']
}

const largestComponent = (graph) => {
    const visited = new Set();
    let longest = 0;
    for(let node in graph){
        console.log(`Node in Graph :  ${node} Graph: ${graph[node]}`);
        const size = exploreSize(graph, node, visited);
        if(size > longest ) longest = size;
    }

    return longest;
}

const exploreSize = (graph, node, visited) => {
    if(visited.has(node)) return 0;
    visited.add(node);

    let size = 1;

    for(let neighbor of graph[node]){
        console.log(`graph[node] : ${graph[node]}  ,  Neighbor ${neighbor} : ` ,  exploreSize(graph,neighbor, visited))
        size += exploreSize(graph, neighbor, visited);
    }

    return size;
};


var edges02 = [
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f'],
]
const shortestPath = (edges, nodeA, nodeB) => {
    // nodeA = src , nodeB = destinaton
    const visited = new Set([ nodeA ])
    const graph = buildGraph02(edges)
    const queue = [ [nodeA, 0] ];
    console.log(graph)
    while(queue.length > 0){

        const [node, distance] = queue.shift();
        console.log(node, distance , visited)
        if(node === nodeB) return distance;

        for(let neighbor of graph[node]){
            if(!visited.has(neighbor)){
                visited.add(neighbor);
                queue.push([neighbor, distance + 1]);
            }
        }

    }
    return -1;
}

const buildGraph02 = (edges) => {
    const graph = {}
    for(let edge of edges) {
        const [a , b] = edge;

        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    
    return graph;
}


const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W','W', 'W',],
    ['W', 'W', 'W','L', 'W',],
    ['W', 'W', 'L','L', 'W',],
    ['W', 'W', 'W','L', 'L',],  
    ['L', 'L', 'W','W', 'W',],
]

const islandCount = (grid) => {
    const visited = new Set();
    let count = 0 ;
    for(let row = 0 ; row < grid.length; row++){
        for(let col = 0 ; col < grid[0].length; col++){
            if(islandExplore(grid, row, col, visited) === true){
                count += 1;
            }
        }
    }
    
    return count;
}

const islandExplore = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;
    if(!rowInbounds || !colInbounds) return false;

    if(grid[r][c] === 'W') return false;

    const pos = r + ',' + c;

    if(visited.has(pos)) return false;
    visited.add(pos);

    islandExplore(grid, r - 1, c, visited);
    islandExplore(grid, r + 1, c, visited);
    islandExplore(grid, r, c - 1, visited);
    islandExplore(grid, r, c + 1, visited);

    return true;
}
// waymigopart
// waygradobataa114

// Island Minimum
const grid02 = [
    ["W","L","W","W","W"],
    ["W","L","W","W","W"],
    ["W","W","W","L","W"],
    ["W","W","L","L","W"],
    ["L","W","W","L","L"],
    ["L","L","W","W","W"],
]

const minimumIsland = (grid) => {
    const visited = new Set();
    let minSize = Infinity;
    for(let row = 0 ; row < grid.length ; row++){
        for(let col = 0 ; col < grid[0].length ; col++){
            const size = exploreIsland(grid, row, col, visited);
        }
    }

}
const exploreIsland = (grid, r, c, visited) => {
    const rowInbounds = r <= 0 && r < grid.length;
    const colInbounds = c <= 0 && c < grid[0].length;

    if(!rowInbounds || !colInbounds) return 0;
    if(grid[r][c] === 'W') return 0;

    const pos = r + ',' + c;

    if(visited.has(pos)) return 0;
    visited.add(pos);

    let size = 1;

    size += exploreIsland(grid, r - 1, c, visited);
    size += exploreIsland(grid, r + 1, c, visited);
    size += exploreIsland(grid, r, c - 1, visited);
    size += exploreIsland(grid, r, c + 1, visited);

    return size;
}

console.log(minimumIsland(grid02))