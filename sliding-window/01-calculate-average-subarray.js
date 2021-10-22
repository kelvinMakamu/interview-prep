/* 
 Find average of all subarrays of size 'k' in an array
*/
const calculate_average = (arr,k) => {
    // 1. compare array length with K
    if(k> arr.length){
        return "INVALID";
    }
    let window_start = 0;
    let window_sum   = 0;
    let result       = [];
    for(let window_end=0;window_end<arr.length;window_end++){
        window_sum += arr[window_end];
        if(window_end >= k-1){
            result.push(window_sum/k);
            window_sum -= arr[window_start];
            window_start += 1;
        }
    }
    return result;
}

console.log(calculate_average([1,2,3],2));