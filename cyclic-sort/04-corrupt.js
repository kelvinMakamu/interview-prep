const corrupt = arr => {
    let observed = {};
    let smallest = 1;
    let result   = [];
    for(let i=0;i<arr.length;i++){
        if(!(arr[i] in observed)){
            observed[arr[i]] = true;
        }else{
            result.push(arr[i]);
        }
    }

    while(!observed[smallest]){
        smallest = 1;
    }

    while(observed[smallest]){
        smallest += 1;
    }

    result.push(smallest);

    return result;
}
let arr = [3,1,2,5,2];
console.log(corrupt(arr));
let arr1 = [3,1,2,3,6,4];
console.log(corrupt(arr1));