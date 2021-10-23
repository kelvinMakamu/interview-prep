/* 
    Given an array of integers that are out of order, determine the bounds of the smallest
    window that must be sorted in order for the entire array to be sorted.
    Input: [3,7,5,6,9] ===> (1,3) 
*/
const smallest_window = arr => {
    let result = [];
    let sorted = [...arr].sort((a,b)=>a-b);
    for(let i=0;i<arr.length;i++){
        console.log(i,":",arr[i],":",sorted[i]);
        if(arr[i] !== sorted[i]){
            console.log(i);
            result.push(i);
        }
    }
    return result;
}

console.log(smallest_window([3,7,5,6,9]));