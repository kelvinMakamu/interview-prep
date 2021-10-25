## In-Place Reversal of LinkedList
- reversing links
- without using any extra memory/space
- reverse a node at a time starting with the current one
- ``` let next = current.next; ```
- ``` current.next = previous; ```
- ``` previous = current; ```
- ``` current = next; ```