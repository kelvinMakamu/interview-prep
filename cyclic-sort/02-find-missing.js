const find_missing = nums => {
    if(nums.length < 1){
        return;
    }
    let i = 0;
    let n = nums.length;
    while(i<n){
        let j = nums[i];
        if(nums[i] < n && nums[i] !== nums[j]){
            [nums[i],nums[j]] = [nums[j],nums[i]];
        }else{
            i += 1;
        }
    }

    for(let i=0; i<n;i++){
        if(nums[i] !== i){
            return i;
        }
    }
}

console.log(find_missing([4,0,3,1]));