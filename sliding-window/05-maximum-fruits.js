const find_maximum_fruits = (fruits,k) => {
    let fruits_frequency = {};
    let maximum_fruits   = 0;
    let window_start     = 0;
    for(let window_end=0;window_end<fruits.length;window_end++){
        let right_fruit = fruits[window_end];
        if(!(right_fruit in fruits_frequency)){
            fruits_frequency[right_fruit] = 0;
        }
        fruits_frequency[right_fruit] += 1;
        while(Object.keys(fruits_frequency).length > k){
            let left_fruit = fruits[window_start];
            fruits_frequency[left_fruit] -= 1;
            if(fruits_frequency[left_fruit] === 0){
                delete fruits_frequency[left_fruit];
            }
            window_start += 1;
        }
        maximum_fruits = Math.max(maximum_fruits, window_end - window_start + 1);
    }
    return maximum_fruits;
}

console.log(find_maximum_fruits(['D','E','F','D','F'],2));