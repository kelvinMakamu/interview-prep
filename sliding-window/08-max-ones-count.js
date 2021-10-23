const max_ones_count_replacement = (arr,k) => {
    let max_ones_count = 0;
    let window_start = 0;
    let maximum_length = 0;
    for(let window_end=0;window_end<arr.length;window_end++){
        if(arr[window_end] === 1){
            max_ones_count += 1;
        }
        if((window_end-window_start+1)-max_ones_count > k){
            if(arr[window_start]=== 1){
                max_ones_count -= 1;
            }
            window_start += 1;
        }
        maximum_length = Math.max(maximum_length, window_end-window_start+1);
    }
    return maximum_length;
}

console.log(max_ones_count_replacement([0,1,1,0,0,0,1,1,0,1,1],2));