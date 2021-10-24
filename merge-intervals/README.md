## Merge Intervals
- overlapping intervals
- Two intervals (a,b) rshps:
- ``` 1. a and b do not overlap ```
- ``` 2. a and b overlaps, b ends after a ```
- ``` 3. a completely overlaps b ```
- ``` 4. a and b overlaps, a ends after b ```
- ``` 5. b completely overlaps a ```
- ``` 6. a and b do not overlap ```

## Merge Intervals Pattern
- list mutually exclusive intervals
- check for overlapping intervals

## Common challenges
- Intervals intersection
- Maximum CPU load

# Merge Overlapping Intervals
- sort intervals on start time ``` intervals.sort((a,b)=>a.start-b.start) ``` to enforce ```a.start<=b.start ```
- if 'a' overlaps 'b', i.e. ``` b.start <= a.end ```
``` c.start = a.start ```
``` c.end   = Math.max(a.end, b.end) ```
- repeat above step

# Insert Interval into an existing non-overlapping intervals
- find correct index to place the interval - skip all interval ending before start of the new interval
- if an existing interval overlaps the new interval, merge them into c
- ``` c.start = Math.min(a.start,b.start);```
- ``` c.end   = Math.max(a.end,b.end); ```

# Inserting new interval steps
- ``` 1. skip all intervals before start of the new interval ```
- ``` 2. merge overlapping ```
- ``` 3. add the new interval to an array ```
- ``` 4. add remaining intervals ```

