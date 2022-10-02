function bubbleSort(arr){
    for(let i = 0 ; i < arr.length ; i ++){
        for(let j = i + 1 ; j < arr.length; j++){
            if(arr[i] > arr[j] ){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function selectionSort(arr){
    for(let i = 0 ; i < arr.length ; i++){
        var min = i;
        for(let j = i + 1 ; j < arr.length ; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        if(min !== i){
            var temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }

    return arr;
}

function insertionSort(arr){
    for(let i = 0 ; i < arr.length ; i ++){
        let key = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}


console.log(selectionSort([1,6,3,5,8,2]))