//MAX ARRAY LINEAR TIME
let maximum = (x) => {
    let current = x[0];
    for(let i = 1 ; i < x.length ; i++){
        if(current < x[i]){
            current = x[i]; 
        }
    }

    return current;
}
// MIN ARRAY LINEAR TIME
let minimum = (x) => {
    let current = x[0];
    for(let i = 1 ; i < x.length ; i++){
        if(current > x[i] ){
            current = x[i];
        }
    }

    return current;
}