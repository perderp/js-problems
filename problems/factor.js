function factors(n){
    let arr = [];
    for(let i = 1 , count = 0 ; i <= n ; i++){
        if(n%i == 0 ){
            count++;
            arr.push(count)
        }
    }
    return arr;

}
console.log('1.) Factors ' +factors(15));