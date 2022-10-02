/*
    Input : 'aabbcde'
    Output : 2a2b1c1d1e

    Input: 'wwwbbbw'
    Output : 3w3b1w
*/

const repeating = (x) => {
    x = x.split('');
    let obj = []
    let count = 1;
    for(let i = 0 ; i < x.length ; i ++){
        let item = x[i]
        if(item == x[i + 1]){
            ++count;
        }else {
            obj.push(count);
            obj.push(item);
            count = 1;
        }
    }
    return obj.join("").toString();
}

console.log(repeating('wwwbbbw'))