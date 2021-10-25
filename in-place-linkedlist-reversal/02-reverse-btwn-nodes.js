class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }

    print_list(){
        let current = this;
        let result  = "head -> ";
        while(current !== null){
            result += current.data +"-> ";
            current = current.next;
        }
        result += "null";
        console.log(result);
    }
}

const reverse_btwn_nodes = (head,p,q) => {
    if(p === q){
        return head;
    }

    let current  = head;
    let previous = null;
    let i = 0;
    while(current !== null && i< p-1){
        previous = current;
        current  = current.next;
        i += 1;
    }

    let last_node_first_part = previous;
    let last_node_sublist = current;

    let next = null;
    let j = 0;
    while(current !== null && j < q-p+1){
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
        j += 1;
    }

    if(last_node_first_part !== null){
        last_node_first_part.next = previous;
    }else{
        head = previous;
    }

    last_node_sublist.next = current;
    return head;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);
head.print_list();
reverse_btwn_nodes(head,2,4).print_list();