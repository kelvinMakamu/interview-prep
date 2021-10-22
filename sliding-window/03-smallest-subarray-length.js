const find_smallest_subarray_length = (arr,target_sum) => {
    let window_start = 0;
    let window_sum   = 0;
    let min_length   = Infinity;
    for(let window_end=0;window_end<arr.length;window_end++){
        window_sum += arr[window_end];
        while(window_sum >= target_sum){
            min_length = Math.min(min_length,window_end-window_start+1);
            window_sum -= arr[window_start];
            window_start += 1;
        }
    }
    return min_length === Infinity ? 0 : min_length;
}

console.log(find_smallest_subarray_length([1,2,3,4,5,6],15));