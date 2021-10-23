class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

const is_cyclic = head => {
    let fast = head;
    let slow = head;
    while(fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast){
            return true;
        }
    }
    return false;
}