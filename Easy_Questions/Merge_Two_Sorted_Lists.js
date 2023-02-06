// Solution
var mergeTwoLists = function(list1, list2) {
    // return list1
    var merge_list = [];
    for(var i of list1){
        list2.push(i)
    }
    console.log(list2);
    for(var first of list2){
        for(var secound = 0; secound<list2.length; secound+=1){
            if(first > list2[secound]){
                merge_list.push(list2[secound])
                list2.pop(secound)
            }
        }
    }

    console.log(merge_list);
    
};

var ans = mergeTwoLists([1,2,4],[1,3,4]);
// console.log(ans);

// Question
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:
// Input: list1 = [], list2 = []
// Output: []
// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]
