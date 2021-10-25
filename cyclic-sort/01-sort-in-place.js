const sort_in_place = nums => {
    if(nums.length < 2){
        return nums;
    }
    let i = 0;
    while(i<nums.length){
        let j = nums[i] - 1;
        if(nums[i] !== nums[j]){
            [nums[i],nums[j]] = [nums[j],nums[i]];
        }else{
            i += 1;
        }
    }
    return nums;
}

console.log(sort_in_place([3,1,5,4,2]));
console.log(sort_in_place([2,6,4,3,1,5]));
console.log(sort_in_place([1,5,6,4,3,2]));