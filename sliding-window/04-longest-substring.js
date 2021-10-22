const longest_substring = (str,k) => {
    let char_frequency = {};
    let max_length     = 0;
    let window_start   = 0;
    for(let window_end=0;window_end<str.length;window_end++){
        let right_char = str.charAt(window_end);
        if(!(right_char in char_frequency)){
            char_frequency[right_char] = 0;
        }
        char_frequency[right_char] += 1;
        while(Object.keys(char_frequency).length > k){
            let left_char = str.charAt(window_start);
            char_frequency[left_char] -= 1;
            if(char_frequency[left_char] === 0){
                delete char_frequency[left_char];
            }
            window_start += 1;
            max_length  = Math.max(max_length,window_end - window_start + 1);
        }
    }
    return max_length;
}
console.log(longest_substring("bcbbde",2));