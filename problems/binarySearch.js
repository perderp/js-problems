const divideAndConquerSearch = (arr, target) => {
    let left = 0 , right = arr.length -1;

    while(left <= right){
        const middle = Math.floor((left + right ) / 2);
        if(arr[middle] > target) {
            right -= 1;
        }else if(arr[middle] < target){
            left += 1;
        }else{
            return middle;
        }
    }
    return -1;
}

console.log(divideAndConquerSearch([-1,0,3,5,9,12],20))