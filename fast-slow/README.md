## Fast and Slow Pointer - Hare & Tortoise Algorithm
- two pointers move through the linear data
- two pointers - fast & slow pointers
- vital for cyclic data (LinkedLists/Arrays)
- fast pointer shld catch slow pointer once both pointers are in a cyclic loop
- useful in below:
- ```problems dealing with a loop ```
- ```Linked List cycle ```
- ```Palindrome linked list ```
- ```Cycle in circular array ```
- if the pointers meet at any point, thus the LinkedList has a cycle

## start of a linkedlist cycle
- get the length of the cycle
- use length and head to find the cycle starting node
- NB: Pay keen attention to the problem framing