const has_pattern_permutation = (str,pattern) => {
    let char_frequency = {};
    let matched = 0;
    let window_start = 0;

    // add pattern characters onto the hash map
    for(let i=0;i<pattern.length;i++){
        let pattern_char = pattern[i];
        if(!(pattern_char in char_frequency)){
            char_frequency[pattern_char] = 0;
        }
        char_frequency[pattern_char] += 1;
    }

    for(let window_end=0;window_end<str.length;window_end++){
        let right_char = str[window_end];
        if(right_char in char_frequency){
            char_frequency[right_char] -= 1;
            if(char_frequency[right_char] === 0){
                matched += 1;
            }
        }

        if(matched === Object.keys(char_frequency).length){
            return true;
        }

        if(window_end >= pattern.length-1){
            let left_char = str[window_start];
            window_start += 1;
            if(left_char in char_frequency){
                if(char_frequency[left_char] === 0){
                    matched -= 1;
                }
                char_frequency[left_char] += 1;
            }
        }
    }
    return false;
}

console.log(has_pattern_permutation("aaacb","abc"));