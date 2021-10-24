class Interval{
    constructor(start,end){
        this.start = start;
        this.end   = end;
    }
}

const merge_overlapping_intervals = intervals => {
    if(intervals.length < 2){
        return intervals;
    }

    let merged = [];
    let start  = intervals[0].start;
    let end    = intervals[0].end;

    for(let i=0;i<intervals.length;i++){
        let interval = intervals[i];
        if(interval.start <= end){
            end = Math.max(end, interval.end);
        }else{
            merged.push(new Interval(start,end));
            start = interval.start;
            end   = interval.end;
        }
    }
    merged.push(new Interval(start,end));
    return merged;
}
let intervals = [[1,4],[2,6],[3,5]];
console.log(merge_overlapping_intervals(intervals));