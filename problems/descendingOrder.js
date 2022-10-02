let set = [1,2,3,10,1,2,10,5,10,3,10,11,3,4,7,4,7,8,8,12,3,2];

function descendingOrder(x){ // USING BUBBLE SORT
    for(let i = 0 ; i < x.length ; i++){
        for(let j = i + 1 ; j < x.length ; j++){
            if(x[i] < x[j]){
                let temp = x[i];
                x[i] = x[j];
                x[j] = temp;
            }
        }
    }

    return x;
}

console.log(descendingOrder(set));