const pair_target_sum = (nums, target) => {
    let left  = 0;
    let right = nums.length - 1;
    while(left<right){
        let sum = nums[left] + nums[right];
        if(sum === target){
            return [left,right];
        }

        if(sum > target){
            right -= 1;
        }else{
            left  += 1;
        }
    }
    return [-1,-1];
}

console.log(pair_target_sum([1,2,3,4,6],6));