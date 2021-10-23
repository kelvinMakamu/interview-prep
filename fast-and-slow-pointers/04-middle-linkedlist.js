class Node {
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

const find_middle = head =>{
    let fast = head;
    let slow = head;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}