class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

const is_happy_number = head => {
    let fast = head;
    let slow = head;
    while(fast !== null && fast.next !== null){
        fast = find_squares(find_squares(fast));
        slow = find_squares(slow);
        if(slow === fast){
            break;
        }
    }
    return slow === 1;
}

const find_squares = num => {
    let sum = 0;
    while(num > 0){
        let digit = num % 10;
        sum += digit * digit;
        num  = Math.floor(num/10);
    }
    return sum;
}