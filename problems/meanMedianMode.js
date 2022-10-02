let set = [1,2,3,10,1,2,10,5,10,3,10,11,3,4,7,4,7,8,8,12,3,2];

function mean(x){
    let sum = 0;
    for(let i = 0 ; i < x.length ; i++){
        sum += x[i];
    }
    return sum/ x.length;
}
console.log('8.) Mean' +mean(set));

function ascending(x){
    for(let i = 0 ; i < x.length ; i++){
        for(let j = i + 1 ; j < x.length ; j++){
            if(x[i] > x[j]){
                let temp = x[i];
                x[i] = x[j];
                x[j] = temp;
            }
        }
    }

    return x;
}
console.log(ascending(set))
function median(x){
    ascending(x);
    if(x.length%2 == 0){
        return (x[x.length/2 - 1] + x[x.length/2])/2
    }else{
        return x[(x.length - 1) / 2];
    }
}
console.log('8.) Median' +median(set));

function mode(x){
    ascending(x);
    const obj = {};
    let max = 0, count = 0;
    for(let i = 0 ; i < x.length ; i++){
        let item = x[i];
        if(obj[item]){
            obj[item]++;
        }else{
            obj[item] = 1;
        }

        if(count < obj[item]){
            count = obj[item];
            max = item;
        }
    }
    return max;
    
}
console.log('8.) Mode' +mode(set));