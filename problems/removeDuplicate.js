let set = [1,2,3,10,1,2,10,5,10,3,10,11,3,4,7,4,7,8,8,12,3,2];
function removeDuplicate(x){
    return x = [... new Set(x)];
}

let arr = [1,1,2,2,3]
var removeDuplicates = function(nums) {
    let count = 0;
    let result = []
    for(let i = 0; i < nums.length; i++){
        if(i < nums.length - 1 && nums[i] === nums[i + 1]) continue;
        
        nums[count] = nums[i];
        result.push(nums[count]);
        count++;

    }
    
    return result;   
    
};


console.log(removeDuplicates(set));