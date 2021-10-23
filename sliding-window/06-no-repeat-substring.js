const no_repeat = str => {
    let char_index_map = {};
    let maximum_length = 0;
    let window_start   = 0;
    for(let window_end=0;window_end<str.length;window_end++){
        let right_char_index = str[window_end];
        if(right_char_index in char_index_map){
            window_start = Math.max(window_start,char_index_map[right_char_index]+1);
        }
        char_index_map[right_char_index] = window_end;
        maximum_length = Math.max(maximum_length,window_end - window_start + 1);
    }
    return maximum_length;
}

console.log(no_repeat("clementisacap"));