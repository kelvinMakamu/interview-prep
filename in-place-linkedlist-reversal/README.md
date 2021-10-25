## In-Place Reversal of LinkedList
- reversing links
- without using any extra memory/space
- reverse a node at a time starting with the current one
- ``` let next = current.next; ```
- ``` current.next = previous; ```
- ``` previous = current; ```
- ``` current = next; ```

## Reverse btwn 2 nodes, p & q
- interested in three parts: before p, bwtn p and q, and after q
- skip p-1 nodes
- reverse nodes btwn p and q
- connect all three part
