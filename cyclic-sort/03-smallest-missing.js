const smallest_missing = arr => {
    let observed = {};
    let smallest = 1;
    for(let i =0; i<arr.length; i++){
        if(arr[i] > 0){
            observed[arr[i]] = true;
        }
    }
    while(!observed[smallest]){
        return 1;
    }

    while(observed[smallest]){
        smallest++;
    }
    return smallest;
}

console.log(smallest_missing([2,3,1]));