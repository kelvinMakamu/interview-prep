/* 
    Given an array of integers, return a new array such that each element at index i of
    the new array is the product of all the numbers in the original array except the one
    at i.
    Input: [1,2,3,4,5] ===> [ 120,60, 40, 30, 24]
    Input: [3,2,1] ===> [2,3,6]
*/
const find_products = arr => {
    if(arr.length < 3){
        return "REQUIRES_AT_LEAST_THREE_ELEMENTS_IN_THE_ARRAY";
    }
    let result = [];
    for(let i=0; i<arr.length;i++){
        result.push(get_product(arr,i));
    }
    return result;
}

const get_product = (arr, currentIndex) => {
    let product = 1;
    for(let i=0;i<arr.length;i++){
        if(i !== currentIndex){
            product *= arr[i];
        }
    }
    return product;
}

console.log(find_products([1,2,3,4,5]));
console.log(find_products([3,2,1]));
console.log(find_products([3,2]));