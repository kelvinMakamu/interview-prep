/* Given an unsorted array containing numbers and a number ‘k’, find the first ‘k’ missing positive numbers in the array. */

const find_first_missing_posistive = (arr,k) => {
    if(arr.length < 1){
        return;
    }
    let total_elements = arr.length <= k ? arr.length + k : arr.length;
    let smallest_found_positives = {};
    let result = [];
    for(let i=0;i<total_elements;i++){
        if(arr[i] > 0){
            smallest_found_positives[arr[i]] = true;
        }
    }

    for(let i=1;i<=total_elements+1;i++){
        if(!(i in smallest_found_positives) && result.length < k){
            result.push(i);
        }
    }
    return result;
}

console.log(find_first_missing_posistive([3,-1,4,5,5],3));
console.log(find_first_missing_posistive([2,3,4],3));
console.log(find_first_missing_posistive([-2,-3,4],2));