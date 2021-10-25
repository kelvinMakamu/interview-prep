/* Given an unsorted array containing numbers, find the smallest missing positive number in it. */

const find_smallest_positive_integer = arr => {
    if(arr.length < 1){
        return;
    }

    let smallest_positive = 1;
    let found_positives_map = {};
    for(let i=0;i<arr.length;i++){
        if(arr[i] > 0){
            found_positives_map[arr[i]] = true;
        }
    }

    while(!found_positives_map[smallest_positive]){
        return 1;
    }

    while(found_positives_map[smallest_positive]){
        smallest_positive += 1;
    }

    return smallest_positive;
}

console.log(find_smallest_positive_integer([-3, 1, 5, 4, 2]));
console.log(find_smallest_positive_integer([3, -2, 0, 1, 2]));
console.log(find_smallest_positive_integer([3, 2, 5, 1]));