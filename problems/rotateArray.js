/* 
Given an array, rotate the array to the right by k steps, where k is non-negative.

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

*/

let x = [1,2,3,4,5,6];
// where k is the number to rotate to right
function rotateArray(x, k){
    k  = k % x.length; // so it will not repeat since if the k is larger than the arraylength itself
    let arr = [] // set an empty array;
    for(let i = 0 ; i < x.length ; i ++){
        console.log((i + k) % x.length )
        arr[(i + k) % x.length] = x[i];
    }

    return arr;

}
