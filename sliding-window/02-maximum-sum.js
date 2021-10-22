/* 
    Find maximum sum of any contiguous subarray of size k
    in an array of positive numbers
*/
const find_maximum_sum = (arr,k) => {
    if(k > arr.length){
        return "INVALID";
    }
    let window_start = 0;
    let window_sum   = 0;
    let maximum_sum  = 0;
    for(let window_end=0;window_end<arr.length;window_end++){
        window_sum += arr[window_end];
        if(window_sum > maximum_sum){
            maximum_sum = window_sum;
        }
        if(window_end >= k-1){
            window_sum -= arr[window_start];
            window_start += 1;
        }
    }
    return maximum_sum;
}

console.log(find_maximum_sum([1,2,3,4,5,6],3));