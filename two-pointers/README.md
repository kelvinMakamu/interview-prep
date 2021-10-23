## Two pointers
- sorted arrays/linked lists, find a set of elements
- set = { pair,triplet, subarray}
- one pointer, left points at the beginning
- ``` let left = 0; ```
- second pointer, right points at the end
- ``` let right = arr.length -1; ```

## pair target sum
- initialize two pointers:
- ``` let left = 0;```
- ``` let right = arr.length - 1; ```
- get sum:
- ``` let sum = arr[left] + arr[right]; ```
- if sum > target, then right -= 1
- else left += 1