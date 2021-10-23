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

## Palindromic LinkedList
- Divide the list into two halves at the middle
- ``` 1. Find middle node of the list ```
- ``` 2. Reverse the second half ```
- ``` 3. compare first half with second half values. Break early when a single node value does not match ```
- ``` 4. reverse second_half_copy back to the original ```

## Rearranging Linked List
- Divide the list into two halves at the middle
- ``` 1. Find middle node of the list ```
- ``` 2. Reverse the second half ```
- ``` 3. compare first half with second half values. Break early when a single node value does not match ```
- ``` 4. reverse second_half_copy back to the original ```
- ``` 5. link the two halves taking note of the problem condition```
- ``` let temp  = head.next;```
- ```head.next = second_half; ```
- ```head = temp; ```
- ``` 6. remember to nullify the nodes you are done with```
- ``` if(head !== null){```
   ```     head.next = null;```
    ```}```