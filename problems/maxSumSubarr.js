// MAX SUM USING WINDOW SLIDING TECHNIQUE 
let ar = [1, 4, 2, 10, 2, 3, 1, 0, 20];

function maxSum(arr, k){
    let currentSum = 0;
    let maxSum =0;

    for(let i = 0 ; i < k ; i ++){
        currentSum += arr[i];
    }

    for(let j = k ; j < arr.length; j++){
        currentSum += arr[j] - arr[j - k];
        if(maxSum < currentSum){
            maxSum = currentSum;
        }
    }
    return maxSum;
}

console.log(maxSum(ar,4));