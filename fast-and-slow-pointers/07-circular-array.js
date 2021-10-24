const is_circular = arr => {
    if(arr.length < 2){
        return;
    }

    for(let i=0;i<arr.length; i++){
        let forwards = arr[i] >= 0;
        let fast = i;
        let slow = i;
        while(true){
            slow = find_next_index(arr,forwards,slow);
            fast = find_next_index(arr,forwards,fast);
            if(fast !== -1){
                fast = find_next_index(arr,forwards,fast);
            }
            if(slow === -1 || fast === -1 || slow === fast){
                break;
            }
        }
        if(slow !== -1 && fast !== -1){
            return true;
        }
    }
    return false;
}


const find_next_index = (arr,forwards,index) => {
    let direction = arr[index] >=0;
    if(direction !== forwards){
        return -1;
    }
    let next = (index+arr[index])%arr.length;
    if(next < 0){
        next += arr.length;
    }
    if(next === index){
        next -= 1;
    }
    return next;
}

console.log(is_circular([1,2,-1,2,2]));
console.log(is_circular([2,2,-1,2]));
console.log(is_circular([2,1,-1,-2]));