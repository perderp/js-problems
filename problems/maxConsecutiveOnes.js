// Count Number 1's  consecutively and return the max

let a = [1,0,0,0,0,1,1,1,1,0,0,0,0]

function maxConsecutive(arr){
    let maxCount = 0;
    let currentCount = 0;
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] == 1){
            currentCount += 1;
        }else{
            currentCount = 0;
        }

        if(maxCount < currentCount){
            maxCount = currentCount;
        }
    }

    return maxCount;
}

console.log(maxConsecutive(a))