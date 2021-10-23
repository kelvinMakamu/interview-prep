class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

const is_palindrome = head => {
    // 1. empty - no values
    if(head === null && head.next === null){
        return true;
    }
    let fast = head;
    let slow = head;
    // 2. get mid node
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    // 3. reverse second half
    let second_half = reverse_linked_list(slow);
    let second_half_copy = second_half;
    // 4. compare first and second halves data
    while((head !== null && second_half !== null)){
        if(head.data !== second_half.data){
            break;
        }
        head = head.next;
        second_half = second_half.next;
    }
    // 5. reverse second half copy
    reverse_linked_list(second_half_copy);
    // both halves data match
    if(head === null || second_half === null){
        return true;
    }
    return false;
}

const reverse_linked_list = head => {
    let previous = null;
    while(head !== null){
        let next  = head.next;
        head.next = previous;
        previous  = head;
        head      = next;
    }
    return previous;
}

let head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(2);
head.next.next.next.next.next = new Node(2);

console.log(is_palindrome(head));