class Interval{
    constructor(start,end){
        this.start = start;
        this.end = end;
    }
}

const insert_interval = (intervals,interval) => {
    let merged = [];
    let i = 0;
    // 1. skip all intervals ending before new interval starts
    while(i<intervals.length && intervals[i].end < interval.start){
        merged.push(intervals[i]);
        i += 1;
    }
    // 2. merge intervals overlapping with new interval
    while(i<intervals.length && intervals[i].start <= interval.end){
        interval.start = Math.min(interval.start, intervals[i].start);
        interval.end   = Math.max(interval.end, intervals[i].end);
        i += 1;
    }
    // 3. push new interval
    merged.push(interval);
    // 4. push remaining intervals
    while(i<intervals.length){
        merged.push(intervals[i]);
        i += 1;
    }
    return merged;
}