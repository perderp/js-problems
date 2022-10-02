function sortedSq(nums){
    return nums.map(x => {
        return Math.pow(x, 2)
    }).sort((a, b) => a - b);
}

console.log(sortedSq(array))