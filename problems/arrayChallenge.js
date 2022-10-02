/*
    Input : [2, 4, 6, 8]
    Output : Arithmetic

    Input : [5, 10, 15]
    Output: Arithmetic / Geometric

    Input : [2, 4, 16, 24]
    Output: -1 
*/


const arrayChallenge = (x) => {
    let first_term = x[0];
    let result;
    for(let i = 0; i < x.length ; i++){
        for(let j = i + 1 ; j < x.length ; j++){
            if((x[i] +  first_term) == x[j]){
                result = 'GEOMETRIC';
            }else{
                result = -1;
            }
        }
    }

    return result;


}

console.log(arrayChallenge([2,4,6,8]));