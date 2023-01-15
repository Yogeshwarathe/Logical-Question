// Solution
function Middle_of_the_list(head){
    const user_length = head.length;
    const divition_haf = user_length / 2;
    const haf = ~~(divition_haf);

    const middle_list = [];
    for(var input=haf;input<user_length; input+=1){
        middle_list.push(head[input])
    }

    return middle_list

}


// function Middle_of_the_list(head){
//     const user_length = head.length;
//     const divition_haf = user_length / 2;
//     const haf = ~~(divition_haf);

//     return head.slice(haf,user_length)
// }

var ans = Middle_of_the_list([1,2,3,4,5,6]);
console.log(ans);



// Question
// 876. Middle of the Linked List
// Companies
// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
// Constraints:
// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100


