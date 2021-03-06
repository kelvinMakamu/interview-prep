### Subarrays for positive integer arrays: 
- check the condition clearly
- process till the condition is met or surpassed(>=condition)
- start shrinking whenever condition is violated

### String to obtain substring 
- check the condition clearly
- use dynamic sliding window whenever possible
- use hashmap to keep track of character frequency
- add characters into the hashmap till the condition is violated
-  shrink the window - decrease frequency of characters in the hashmap

### No-repeat substring
- check and understand the condition clearly
- use dynamic sliding window
- use hashmap to track the index of the character last processed
- shrink sliding window whenever the condition is violated

### After replacement
- check and understand the condition clearly
- use dynamic sliding window
- shrink sliding window whenever the condition is violated 
- ```(window_end-window_start+1)-maxRepeats > k ```
- ```maximum_length = Math.max(maximum_length, window_end-window_start+1)```
