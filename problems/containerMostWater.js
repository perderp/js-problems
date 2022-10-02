/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.
*/

let array = [1,8,6,2,5,4,8,3,7];

var maxArea = (height) => {
    let left = 0, right = height.length - 1;
    var result = 0;

    while(left < right){
        const smallestSide = Math.min(height[left], height[right]);
        const area = (right - left) * smallestSide;
        
        if(area > result) result = area;
        
        if(height[left] < height[right]) left++;
        else right--;
    }

    return result;
}
console.log(maxArea(array));

/*

8|   *         *    
7|   *         *   *
6|   * *       *   *
5|   * *   *   *   *
3|   * *   * * * * *
2|   * * * * * * * *
1| * * * * * * * * *
0| * * * * * * * * *
----------------------------------------

*/