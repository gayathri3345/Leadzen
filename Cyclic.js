// javascript program to check if
// linked list is circular
 
    /* Link list Node */
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}
 
 
    /*
     * This function returns true if given linked list is circular, else false.
     */
    function isCircular( head) {
        // An empty linked list is circular
        if (head == null)
            return true;
 
        // Next of head
         node = head.next;
 
        // This loop would stop in both cases (1) If
        // Circular (2) Not circular
        while (node != null && node != head)
            node = node.next;
 
        // If loop stopped because of circular
        // condition
        return (node == head);
    }
 
    // Utility function to create a new node.
    function newNode(data) {
         temp = new Node();
        temp.data = data;
        temp.next = null;
        return temp;
    }
 
    /* Driver code */
     
        /* Start with the empty list */
         head = newNode(1);
        head.next = newNode(2);
        head.next.next = newNode(3);
        head.next.next.next = newNode(4);
 
        document.write(isCircular(head) ? "True<br/>" : "False<br/>");
 
        // Making linked list circular
        head.next.next.next.next = head;
 
        document.write(isCircular(head) ? "True<br/>" : "False<br/>");
 
// This code contributed by gauravrajput1