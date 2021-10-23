class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

const find_cycle_start = head => {
    let fast = head;
    let slow = head;
    let cycle_count = 0;
    while(fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast){
            cycle_count = calculate_cycles(slow);
        }
    }
    return find_start(head,cycle_count);
}

const calculate_cycles = slow => {
    let current = slow;
    let current_length = 0;
    while(current !== null){
        current = current.next;
        current_length += 1;
        if(current === slow){
            break;
        }
    }
    return current_length;
}

const find_start = (head, cycle_count) => {
    let first_pointer  = head;
    let second_pointer = head;
    while(cycle_count > 0){
        second_pointer = second_pointer.next;
        cycle_count -= 1;
    }
    while(first_pointer !== second_pointer){
        first_pointer  = first_pointer.next;
        second_pointer = second_pointer.next;
    }
    return first_pointer;
}