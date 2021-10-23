const square_array = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    let highestIndex = nums.length - 1;
    let squares = [];
    while(left<=right){
        let leftSquare = nums[left] * nums[left];
        let rightSquare = nums[right] * nums[right];
        if(leftSquare > rightSquare){
            squares[highestIndex] = leftSquare;
            left += 1;
        }else{
            squares[highestIndex] = rightSquare;
            right -= 1;
        }
        highestIndex -= 1;
    }
    return squares;
}

console.log(square_array([-3,-1,0,1,2]));