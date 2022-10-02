let nums =[1,2,3,4,5,6];
//part 1
function twoSum(nums, target){ 
    // using a binary Search
    let left = 0 , right = nums.length - 1 ;
    while(left <= right){
        let sum = nums[left] + nums[right];
        if(sum > target){
            right -= 1;
        }else if(sum < target) {
            left += 1;
        }else{
            return [left, right];
        }
    }

    // using linear loop
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = i + 1 ; j < nums.length ; j++){
            if(nums[i]+ nums[j] === target){
                return [i, j];
            }
        } 
    }
}

console.log(twoSum(nums,11));


