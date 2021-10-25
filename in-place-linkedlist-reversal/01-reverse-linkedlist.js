class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }

    print_list(){
        let current = this;
        let result  = "head -> ";
        while(current !== null){
            result += current.data + " -> ";
            current = current.next;
        }
        result += "null";
        console.log(result);
    }
}

const reverse_linked_list = head => {
    let previous = null;
    while(head !== null){
        let next = head.next;
        head.next = previous;
        previous = head;
        head = next;
    }   
    return previous;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log("Original");
head.print_list();
let result = reverse_linked_list(head);
console.log("Reversed");
result.print_list();