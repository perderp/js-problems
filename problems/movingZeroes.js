function movingZeroes(x){
    for(let i = 0; i < x.length ; i++){
        for(let j = i + 1; j < x.length ; j++){
            if(x[i] === 0){
                let temp = x[i];
                x[i] = x[j];
                x[j] = temp;
            }
        }
    }

    return x;
}
let sample = [false,1,0,1,2,0,1,3,"a"];
console.log('9.) Moving Zeroes' + movingZeroes(sample))