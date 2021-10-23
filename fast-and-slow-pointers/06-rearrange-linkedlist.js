class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }

    print(){
        let current = this;
        let result = "head->";
        while(current !== null){
            result += current.data + "->";
            current = current.next;
        }
        result +=" null";
        console.log(result);
    }
}

const rearrange = head => {
    if(head === null && head.next === null){
        return "NOTHING_TO_PROCESS";
    }
    let fast = head;
    let slow = head;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    let second_half = reverse_linked_list(slow);
    while(head !== null && second_half !== null){
        let temp  = head.next;
        head.next = second_half;
        head = temp;

        let temp2 = second_half.next;
        second_half.next = head;
        second_half = temp2;
    }

    if(head !== null){
        head.next = null;
    }
}

const reverse_linked_list = head => {
    let prev = null;
    while(head !== null){
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

rearrange(head);

head.print();