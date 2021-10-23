const longest_substring_replacement = (str,k) => {
    let window_start = 0;
    let maximum_length = 0;
    let max_repeats = 0;
    let char_frequency = {};
    for(let window_end=0;window_end<str.length;window_end++){
        let right_char = str[window_end];
        if(!(right_char in char_frequency)){
            char_frequency[right_char] = 0;
        }
        char_frequency[right_char] += 1;
        max_repeats = Math.max(max_repeats,char_frequency[right_char]);
        if((window_end-window_start+1)-max_repeats > k){
            let left_char = str[window_start];
            char_frequency[left_char] -=1;
            window_start += 1;
        }
        maximum_length = Math.max(maximum_length,window_end-window_start+1);
    }
    return maximum_length;
}

console.log(longest_substring_replacement("aabccbb",2));